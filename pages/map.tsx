import Head from "next/head";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { ArtistInterface } from "../lib/ArtistClass";

type MapProps = {
  artists: ArtistInterface[];
};

export default function MapPage({ artists }: MapProps) {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Map artists={artists} />
      <Footer />
    </>
  );
}