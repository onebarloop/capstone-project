import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Artist } from "../lib/ArtistClass";
import type { ArtistInterface } from "../lib/ArtistClass";

export default function ArtistPage(): JSX.Element {
  async function upload(event) {
    event.preventDefault();
    const formData1 = new FormData(event.target);
    const file1 = event.target.bild.files[0];
    formData1.append("file", file1);
    formData1.append("upload_preset", "b5zcklfu");
    const response1 = await fetch(
      "https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload",
      { method: "POST", body: formData1 }
    );
    const url1 = await response1.json();
    console.log(url1.public_id);
    const formData2 = new FormData(event.target);
    const file2 = event.target.bild.files[1];
    formData2.append("file", file2);
    formData2.append("upload_preset", "b5zcklfu");
    const response2 = await fetch(
      "https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload",
      { method: "POST", body: formData2 }
    );
    const url2 = await response2.json();
    console.log(url2.public_id);
    const newArtist = new Artist(
      event.target.elements.artistname.value,
      event.target.elements.firstname.value,
      event.target.elements.lastname.value,
      event.target.elements.location.value,
      [url1.public_id, url2.public_id]
    );
    const responseDB = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArtist),
    });
    console.log(responseDB);
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form onSubmit={upload}>
        <input name="artistname" placeholder="Name" required />
        <input name="firstname" placeholder="Firstname" />
        <input name="lastname" placeholder="Lastname" />
        <input name="location" placeholder="Ort" required />
        <input name="bild" type="file" multiple required />

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}
