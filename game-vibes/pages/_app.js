import Head from "next/head";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <title>Game Vibes</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
