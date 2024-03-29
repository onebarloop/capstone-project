import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import upload from '../lib/uploadUserData';
import { ArtistInterface } from '../lib/ArtistClass';
import fetchData from '../lib/fetchData';
import { Dispatch, SetStateAction, useState } from 'react';
import { nanoid } from 'nanoid';
import Picture from '../components/Picture';
import DatePick from '../components/DatePick';

type NewUserProps = {
  onSetArtists: Dispatch<SetStateAction<ArtistInterface[] | undefined>>;
};

export default function NewUserPage({
  onSetArtists,
}: NewUserProps): JSX.Element {
  const [isloading, setLoading] = useState<boolean>(false);

  //state that keeps track of the chosen dates in the datepicker. Goes as prop to DatePick
  const [dates, setDates] = useState<string[]>([]);

  //state array that keeps track of the selected image files
  const [selectedImages, setSelectedImages] = useState<Blob[]>([]);

  // function for checking the selected img-files and updating the state-array
  function changeImage(event: React.SyntheticEvent): void {
    const imgList = (event.target as HTMLInputElement).files;
    if (imgList && imgList.length > 0) {
      setSelectedImages([...selectedImages, imgList[0]]);
    }
  }

  function handleDelete(name: string): void {
    setSelectedImages(selectedImages.filter((image) => image.name !== name));
  }

  const router = useRouter();

  async function handleSubmit(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    setLoading(true);
    const url = await upload(event, selectedImages, dates);
    fetchData('/api', onSetArtists);
    setLoading(false);
    router.push(`/${url}`);
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header heading={'Add New Artist'} />

      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          <span>Artistname:</span>
          <input name='artistname' required />
        </StyledLabel>
        <StyledLabel>
          <span>City:</span>
          <input name='city' required />
        </StyledLabel>
        <StyledLabel>
          <span>Street:</span>
          <input name='streetname' required />
          <input name='number' placeholder='#' type='number' required />
        </StyledLabel>

        {selectedImages.length === 4 ? (
          <StyledButtonBar>
            <StyledDatePick
              dates={dates}
              onSetDates={setDates}
              inline={false}
            />
            <StyledSubmit
              name={`${isloading ? 'Uploading' : 'Sumbit'}`}
              inactive={isloading}
              disabled={isloading}
            ></StyledSubmit>
          </StyledButtonBar>
        ) : (
          <StyledButtonBar>
            <StyledDatePick
              dates={dates}
              onSetDates={setDates}
              inline={false}
            />
            <StyledImgInput>
              Add Images
              <input
                onChange={changeImage}
                name='pics'
                type='file'
                accept='image/png, image/jpeg'
                required
              />
            </StyledImgInput>
          </StyledButtonBar>
        )}

        {selectedImages.length <= 0 ? (
          <StyledPlaceholder>
            To submit your data, add 4 images from your collection
          </StyledPlaceholder>
        ) : (
          <StyledGalery>
            {selectedImages.map((image) => (
              <div style={{ position: 'relative' }} key={nanoid()}>
                <Picture source={URL.createObjectURL(image)} />
                <StyledDelete onClick={() => handleDelete(image.name)}>
                  X
                </StyledDelete>
              </div>
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

const StyledButtonBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const StyledImgInput = styled.label`
  border: 1px solid #ccc;
  padding: 10px;
  color: rgba(217, 217, 217, 1);
  input[type='file'] {
    display: none;
  }
`;

const StyledDatePick = styled(DatePick)`
  background-color: transparent;
  border: #ccc 1px solid;
  padding: 10px;
  width: 100px;

  &::placeholder {
    color: rgba(217, 217, 217, 1);
    font-family: Roboto;
  }
`;

const StyledSubmit = styled(Button)`
  width: 100px;
  height: 37px;
`;

const StyledDelete = styled.button`
  position: absolute;
  top: -7px;
  right: -7px;
  border: none;
  background-color: #d93378;
  opacity: 80%;
  color: rgba(217, 217, 217, 1);
  height: 20px;
  width: 20px;
  border-radius: 5px;
`;
