import React from "react";
import { Artist } from "./ArtistClass";

export default async function upload(
  event: React.SyntheticEvent
): Promise<void> {
  // Event targets are destructured and typed
  const { artistname, firstname, lastname, location, pics } =
    event.target as typeof event.target & {
      artistname: { value: string };
      firstname: { value: string };
      lastname: { value: string };
      location: { value: string };
      pics: { files: Blob[] };
    };

  // Upload function for Cloudinary
  async function fileupload(files: Blob[]): Promise<string[]> {
    let urls = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "b5zcklfu");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload",
        { method: "POST", body: formData }
      );
      const data = await response.json();
      urls.push(data.public_id);
    }
    return urls;
  }

  // Upload function is called and returns the picture URLs
  const urls = await fileupload(pics.files);

  // New Artist Object from the form elements plus the returnvalue of the cloudinary-upload is created
  const newArtist = new Artist(
    artistname.value,
    firstname.value,
    lastname.value,
    location.value,
    urls
  );

  // Upload Artist Object via custom API-call
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
}
