import Head from "next/head";
import RandomView from "../components/RandomView";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";
import styled from "styled-components";
import artists from "../lib/artists";
import List from "../components/List";

type HomeProps = {
  onLike: () => void;
  likes: string[];
};

export default function Home({ onLike, likes }: HomeProps): JSX.Element {
  //Typescript
  type ViewPoint = { random: boolean; artists: boolean; favorites: boolean };
  //Typescipt end

  const [viewPoint, setViewPoint] = useState<ViewPoint>({
    random: true, //the standard view. It's called "random" because later I will implement a function to show a random collection of tattoos
    artists: false,
    favorites: false,
  });

  function handleSwitchView(view: string): void {
    setViewPoint({
      random: false,
      artists: false,
      favorites: false,
      [view]: true,
    });
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledButtonWrapper>
        <Button
          onClick={() => handleSwitchView("random")}
          name={"Standard View"}
        />
        <Button
          onClick={() => handleSwitchView("artists")}
          name={"Artist view"}
        />
        <Button
          onClick={() => handleSwitchView("favorites")}
          name={"Favorites"}
        />
      </StyledButtonWrapper>

      {/* Switching between the three different views */}

      {viewPoint.random && <RandomView />}
      {viewPoint.artists &&
        artists.map((artist) => (
          <List key={artist.id} {...artist} onLike={onLike} likes={likes} />
        ))}
      {viewPoint.favorites &&
        artists.map(
          (artist) =>
            likes.includes(artist.id) && (
              <List key={artist.id} {...artist} onLike={onLike} likes={likes} />
            )
        )}
      <Footer />
    </>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0 15px 25px;
`;
