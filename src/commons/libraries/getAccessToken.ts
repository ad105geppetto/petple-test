import { gql, GraphQLClient } from "graphql-request";
import { type IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    if (!process.env.NEXT_PUBLIC_URI) return;

    const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_URI, {
      credentials: "include",
    });
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);

    const newAccessToken = result.restoreAccessToken.accessToken;

    if (typeof newAccessToken !== "string") return;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
