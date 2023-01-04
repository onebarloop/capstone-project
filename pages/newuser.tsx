import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Router from "next/router";
import upload from "../lib/uploadUserData";
import { ArtistInterface } from "../lib/ArtistClass";
import fetchData from "../lib/fetchData";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

type NewUserProps = {
  onSetArtists: Dispatch<SetStateAction<ArtistInterface[] | undefined>>;
};

export default function NewUserPage({
  onSetArtists,
}: NewUserProps): JSX.Element {
  const [isloading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState();

  function changeImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

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
        <input name="city" placeholder="city" required />
        <input name="streetname" placeholder="streetname" required />
        <input name="number" placeholder="number" required />
        <input
          onChange={changeImage}
          name="pics"
          type="file"
          multiple
          required
        />
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="preview image"
            width={50}
            height={50}
          />
        )}
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
