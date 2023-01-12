import Head from "next/head";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { ArtistInterface } from "../lib/ArtistClass";
import { useEffect, useState } from "react";

type MapProps = {
  artists: ArtistInterface[];
};

export default function MapPage({ artists }: MapProps) {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );

  console.log(userPosition);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

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
      <Map artists={artists} user={userPosition} />
      <Footer />
    </>
  );
}
