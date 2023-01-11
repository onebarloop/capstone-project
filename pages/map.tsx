import Head from "next/head";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { ArtistInterface } from "../lib/ArtistClass";
import { useEffect, useState } from "react";

type MapProps = {
  artists: ArtistInterface[];
};

type Position = {
  lat: number | null;
  lon: number | null;
};

export default function MapPage({ artists }: MapProps) {
  const [userPosition, setUserPosition] = useState<Position>({
    lat: null,
    lon: null,
  });

  console.log(userPosition);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
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
      <Map artists={artists} />
      <Footer />
    </>
  );
}
