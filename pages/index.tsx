import Head from "next/head";
import Random from "../components/Random";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArtistList from "../components/ArtistList";
import Button from "../components/Button";
import { useState } from "react";
import styled from "styled-components";

export default function Home(): JSX.Element {
  type ViewPoint = { random: boolean; artists: boolean; favorites: boolean };

  const [viewPoint, setViewPoint] = useState<ViewPoint>({
    random: true,
    artists: false,
    favorites: false,
  });

  function handleSwitchView(prop: string): void {
    setViewPoint({
      random: false,
      artists: false,
      favorites: false,
      [prop]: true,
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
      </StyledButtonWrapper>
      {viewPoint.random && <Random />}
      {viewPoint.artists && <ArtistList />}
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
