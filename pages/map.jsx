import Head from "next/head";
import Header from "../components/Header";

import Footer from "../components/Footer";

export default function Map() {
  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Footer />
    </>
  );
}
