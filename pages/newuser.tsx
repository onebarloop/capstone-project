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
import { nanoid } from "nanoid";
import Picture from "../components/Picture";

type NewUserProps = {
  onSetArtists: Dispatch<SetStateAction<ArtistInterface[] | undefined>>;
};

export default function NewUserPage({
  onSetArtists,
}: NewUserProps): JSX.Element {
  const [isloading, setLoading] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<Blob[]>([]);

  function changeImage(event: React.SyntheticEvent) {
    const input = (event.target as HTMLInputElement).files;
    setSelectedImages([...selectedImages, input![0]]);
  }
  console.log(selectedImages);

  async function handleSubmit(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    setLoading(true);
    const url = await upload(event, selectedImages);
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
      <Header heading={"Add New Artist"} />

      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          <span>Artistname:</span>
          <input name="artistname" required />
        </StyledLabel>
        <StyledLabel>
          <span>City:</span>
          <input name="city" required />
        </StyledLabel>
        <StyledLabel>
          <span>Street:</span>
          <input name="streetname" required />
          <input name="number" placeholder="#" type="number" required />
        </StyledLabel>

        {selectedImages.length === 4 ? (
          <StyledSubmit
            name={`${isloading ? "Uploading" : "Sumbit"}`}
            inactive={isloading ? true : false}
          ></StyledSubmit>
        ) : (
          <StyledImgInput>
            Add Image
            <input onChange={changeImage} name="pics" type="file" required />
          </StyledImgInput>
        )}

        {selectedImages.length <= 0 ? (
          <StyledPlaceholder>Please Upload up to 4 pictures</StyledPlaceholder>
        ) : (
          <StyledGalery>
            {selectedImages.map((image) => (
              <Picture
                key={nanoid()}
                source={URL.createObjectURL(image)}
                width={110}
                height={110}
              />
            ))}
          </StyledGalery>
        )}
      </StyledForm>

      <Footer />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 35px 40px 0px 40px;
  gap: 20px;
  color: rgba(217, 217, 217, 1);
  height: 80vh;
`;

const StyledPlaceholder = styled.h3`
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledGalery = styled.div`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  align-content: space-between;
  justify-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 100px 195px;

  & ~ & ~ & {
    grid-template-columns: 100px 160px 35px;
  }
`;

const StyledImgInput = styled.label`
  border: 1px solid #ccc;
  align-self: center;
  padding: 6px 12px;
  color: rgba(217, 217, 217, 1);

  input[type="file"] {
    display: none;
  }
`;

const StyledSubmit = styled(Button)``;
