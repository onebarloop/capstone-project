import { useRouter } from "next/router";
import artists from "../lib/artists";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Artist from "../components/Artist";

export default function ArtistPage(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const artist = artists.find((artist) => artist.slug === slug);

  return artist ? (
    <>
      <Header />
      <Artist {...artist} />
      <Footer />
    </>
  ) : (
    <p style={{ color: "white" }}>Page not found</p>
  );
}
