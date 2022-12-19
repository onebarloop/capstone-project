import Head from "next/head";
import RandomView from "../components/RandomView";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
//import artists from "../lib/artists";
import List from "../components/List";
import useFetch from "../lib/useFetch";
import Artist from "../lib/ArtistClass";

type HomeProps = {
  onLike: () => void;
  likes: string[];
};

export default function Home({ onLike, likes }: HomeProps): JSX.Element {
  //Typescript
  type ViewPoint = { random: boolean; artists: boolean; favorites: boolean };
  //Typescipt end

  const [viewPoint, setViewPoint] = useState<ViewPoint>({
    random: true,
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

  const [artists, setArtists] = useState<Artist[]>([]);

  const art = useFetch("http://localhost:3000/api");

  useEffect(() => setArtists(art), [art]);

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledButtonWrapper>
        <StyledButton
          onClick={() => handleSwitchView("random")}
          name={"Surprise Me!"}
          inactive={!viewPoint.random}
        />
        <StyledButton
          onClick={() => handleSwitchView("artists")}
          name={"Browse Artists"}
          inactive={!viewPoint.artists}
        />
        <StyledButton
          onClick={() => handleSwitchView("favorites")}
          name={"Favorites"}
          inactive={!viewPoint.favorites}
        />
      </StyledButtonWrapper>

      {/* Switching between the three different views */}
      <RandomView artists={artists} />
      {viewPoint.random && <RandomView artists={artists} />}
      {viewPoint.artists &&
        artists.map((artist) => (
          <List key={artist._id} {...artist} onLike={onLike} likes={likes} />
        ))}
      {viewPoint.favorites &&
        artists.map(
          (artist) =>
            likes.includes(artist._id) && (
              <List
                key={artist._id}
                {...artist}
                onLike={onLike}
                likes={likes}
              />
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

const StyledButton = styled(Button)`
  font-size: 0.7em;
`;
