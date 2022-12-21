import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Artist } from "../lib/ArtistClass";
import type { ArtistInterface } from "../lib/ArtistClass";
import cloudUpload from "../lib/upload";

export default function ArtistPage(): JSX.Element {
  async function upload(event) {
    event.preventDefault();
    const files = event.target.pics.files;
    const urls = await cloudUpload(files);
    console.log(urls);
    const newArtist = new Artist(
      event.target.artistname.value,
      event.target.firstname.value,
      event.target.lastname.value,
      event.target.location.value,
      urls
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
        <input name="pics" type="file" multiple required />

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}
