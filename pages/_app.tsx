import type { AppProps } from "next/app";
import GlobalStyles from "../globalStyles";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Function for handling the favorites. Needs to live here, since the state is needed all over the app
  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(_id: string): void {
    likes.includes(_id)
      ? setLikes((prev) => prev.filter((like) => like !== _id))
      : setLikes((prev) => [...prev, _id]);
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} onLike={handleLike} likes={likes} />
    </>
  );
}
