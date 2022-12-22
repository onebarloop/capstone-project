import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useEffect, useState } from "react";
import { ArtistInterface } from "../lib/ArtistClass";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [artists, setArtists] = useState<ArtistInterface[]>();

  useEffect(() => {
    // Auslagern!
    async function fetchData() {
      const response = await fetch("/api");
      setArtists(await response.json());
    }
    fetchData();
  }, []);

  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(_id: string): void {
    likes.includes(_id)
      ? setLikes((prev) => prev.filter((like) => like !== _id))
      : setLikes((prev) => [...prev, _id]);
  }

  return (
    <>
      <GlobalStyles />
      {!artists ? (
        <p>loading</p>
      ) : (
        <Component
          {...pageProps}
          onLike={handleLike}
          likes={likes}
          artists={artists}
          setArtists={setArtists}
        />
      )}
    </>
  );
}
