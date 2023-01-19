import Head from 'next/head';
import Header from '../components/Header';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import { ArtistInterface } from '../lib/ArtistClass';

type MapProps = {
  artists: ArtistInterface[];
  userPosition: [number, number] | null;
};

export default function MapPage({ artists, userPosition }: MapProps) {
  const Map = dynamic(() => import('../components/Map'), {
    loading: () => <p style={{ color: 'white' }}>...loading the map</p>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Map artists={artists} userPosition={userPosition} />
      <Footer />
    </>
  );
}
