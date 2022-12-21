import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Artist } from "../lib/ArtistClass";
import cloudUpload from "../lib/upload";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";
import Router from "next/router";

export default function ArtistPage(): JSX.Element {
  const [isloading, setLoading] = useState(false);

  async function onSubmit(event: React.SyntheticEvent) {
    setLoading(true);

    event.preventDefault();

    const { artistname, firstname, lastname, location, pics } =
      event.target as typeof event.target & {
        artistname: { value: string };
        firstname: { value: string };
        lastname: { value: string };
        location: { value: string };
        pics: { files: Blob[] };
      };

    const urls = await cloudUpload(pics.files);

    const newArtist = new Artist(
      artistname.value,
      firstname.value,
      lastname.value,
      location.value,
      urls
    );
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArtist),
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    Router.reload();
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledForm onSubmit={onSubmit}>
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
