import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Artist } from "../lib/ArtistClass";
import type { ArtistInterface } from "../lib/ArtistClass";

export default function ArtistPage(): JSX.Element {
  const newArtist: ArtistInterface = new Artist(
    "Yolo Inc",
    "",
    "",
    "Mannheim",
    ["/tattoos/af", "tattoos/ag"]
  );
  console.log(JSON.stringify(newArtist));

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
