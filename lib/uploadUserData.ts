import React from 'react';
import { Artist } from './ArtistClass';

export default async function upload(
  event: React.SyntheticEvent,
  selectedImages: Blob[],
  dates: string[]
): Promise<string> {
  // Event targets are destructured and typed
  const { artistname, city, streetname, number } =
    event.target as typeof event.target & {
      artistname: { value: string };
      city: { value: string };
      streetname: { value: string };
      number: { value: number };
    };

  // Upload function for Cloudinary. Since Cloudinary doesn't allow multiple files to be uploaded at once,
  // we have to make multiple API-calls for each item in the "selectedImages"-array

  async function fileupload(files: Blob[]): Promise<string[]> {
    let urls: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'b5zcklfu');
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload',
        { method: 'POST', body: formData }
      );
      const data = await response.json();
      urls.push(data.public_id);
    }
    return urls;
  }

  // Upload function is called and returns the picture URLs
  const urls = await fileupload(selectedImages);

  // Declare async function that calls the static factory method (.create())of the Artist-class
  async function createArtist() {
    const artist = await Artist.create(
      artistname.value,
      city.value,
      streetname.value,
      number.value,
      urls,
      dates
    );
    return artist;
  }

  // async function is called
  const newArtist = await createArtist();

  // Upload Artist Object via custom API-call
  try {
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArtist),
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return newArtist.slug;
}
