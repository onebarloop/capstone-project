import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useState } from "react";
import useFetch from "../lib/useFetch";

export default function App({ Component, pageProps }: AppProps) {
  //Initial fetch
  const artists = useFetch(
    "https://wannado-6afpz1vsf-onebarloop.vercel.app//api"
  );

  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(_id: string): void {
    likes.includes(_id)
      ? setLikes((prev) => prev.filter((like) => like !== _id))
      : setLikes((prev) => [...prev, _id]);
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
