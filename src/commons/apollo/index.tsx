import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { accessTokenState } from "../store";

interface IProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloClientSettings(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    credentials: "include",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
