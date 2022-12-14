import { useRouter } from "next/router";
import artists from "../lib/artists";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Picture from "../components/Picture";
import Image from "next/image";
import styled from "styled-components";

export default function ArtistPage(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const artist = artists.find((artist) => artist.slug === slug);
  console.log(artist?.tattoos[0]);
  return (
    <>
      <Header />
      <StyledMain>
        <ul>
          <li>Artist: {artist?.artistName}</li>
          <li>Location: {artist?.location}</li>
        </ul>
        <div></div>
        <StyledGalery>
          {artist && (
            <>
              <Picture width={140} length={140} source={artist?.tattoos[0]} />
              <Picture width={140} length={140} source={artist?.tattoos[1]} />
              <Picture width={140} length={140} source={artist?.tattoos[2]} />
              <Picture width={140} length={140} source={"/img/moon.png"} />
            </>
          )}
        </StyledGalery>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.div`
  color: rgba(217, 217, 217, 1);
  height: 80vh;
  padding: 15px;
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ul {
    list-style: none;
    padding: 0;
  }
`;

const StyledGalery = styled.div`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-items: center;
`;
