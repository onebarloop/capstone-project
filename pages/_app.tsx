import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useState } from "react";
import useFetch from "../lib/useFetch";

export default function App({ Component, pageProps }: AppProps) {
  //Initial fetch
  const artists = useFetch("/api");

  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(id: string): void {
    likes.includes(id)
      ? setLikes((prev) => prev.filter((like) => like !== id))
      : setLikes((prev) => [...prev, id]);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        onLike={handleLike}
        likes={likes}
        artists={artists}
      />
    </>
  );
}
