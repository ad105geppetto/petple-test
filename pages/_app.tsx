import { type AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloClientSettings from "../src/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloClientSettings>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloClientSettings>
    </RecoilRoot>
  );
}

export default MyApp;
