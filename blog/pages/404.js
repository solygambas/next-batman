import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1 className={utilStyles.headingLg}>404 - Page Not Found</h1>
    </Layout>
  );
}
