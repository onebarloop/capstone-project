import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Function for handling the favorites. Needs to live here, since the state is needed all over the app
  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(id: string): void {
    likes.includes(id)
      ? setLikes((prev) => prev.filter((like) => like !== id))
      : setLikes((prev) => [...prev, id]);
  }

  console.log(likes);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} onLike={handleLike} likes={likes} />
    </>
  );
}
