import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";
import Router from "next/router";
import upload from "../lib/upload";
import { ArtistInterface } from "../lib/ArtistClass";
import fetchData from "../lib/fetchData";
import { Dispatch, SetStateAction } from "react";

type NewUserProps = {
  onSetArtists: Dispatch<SetStateAction<ArtistInterface[] | undefined>>;
};

export default function NewUserPage({
  onSetArtists,
}: NewUserProps): JSX.Element {
  const [isloading, setLoading] = useState<boolean>(false);

  async function handleSubmit(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    setLoading(true);
    const url = await upload(event);
    fetchData("/api", onSetArtists);
    setLoading(false);
    Router.push(`/${url}`);
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <input name="artistname" placeholder="Artistname" required />
        <input name="firstname" placeholder="Firstname" />
        <input name="lastname" placeholder="Lastname" />
        <input name="location" placeholder="Ort" required />
        <input name="pics" type="file" multiple required />
        <Button
          name={`${isloading ? "Uploading" : "Sumbit"}`}
          inactive={isloading ? true : false}
        ></Button>
      </StyledForm>
      <Footer />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 20px;
`;
