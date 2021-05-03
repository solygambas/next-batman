import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Just Add Marmite</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
