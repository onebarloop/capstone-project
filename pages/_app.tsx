import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useEffect, useState } from "react";
import { ArtistInterface } from "../lib/ArtistClass";
import fetchData from "../lib/fetchData";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [artists, setArtists] = useState<ArtistInterface[]>();

  //initial fetch
  useEffect(() => {
    fetchData("/api", setArtists);
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
        <h3 style={{ color: "white" }}>loading...</h3>
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
