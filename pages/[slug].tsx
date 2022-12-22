import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Artist from "../components/Artist";
import type { ArtistInterface } from "../lib/ArtistClass";

type slugProps = {
  artists: ArtistInterface[];
};

export default function ArtistPage({ artists }: slugProps): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const artist = artists.find((artist) => artist.slug === slug);

  return artist ? (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header heading={artist.artistName} />
      <Artist {...artist} />
      <Footer />
    </>
  ) : (
    <p style={{ color: "white" }}>Page not found</p>
  );
}
