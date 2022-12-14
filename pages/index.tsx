import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
