import { useRouter } from "next/router";
import artists from "../lib/artists";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Picture from "../components/Picture";
import Image from "next/image";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function ArtistPage(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const artist = artists.find((artist) => artist.slug === slug);
  console.log(artist?.tattoos[0]);
  return (
    <>
      <Header />
      <StyledMain>
        <StyledInfoCard>
          Information
          <li>
            Artist:
            <br /> {artist?.artistName}
          </li>
          <li>
            Location: <br />
            {artist?.location}
          </li>
        </StyledInfoCard>
        <StyledSchedule>
          Timeschedule
          <li>Monday, 13.12.</li>
          <li>Monday, 13.12.</li>
          <li>Monday, 13.12.</li>
          <li>Monday, 13.12.</li>
        </StyledSchedule>
        <StyledGalery>
          {artist?.tattoos.map((tattoo) => (
            <Picture width={140} length={140} source={tattoo} key={nanoid()} />
          ))}
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
`;

const StyledInfoCard = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2em;
  li {
    margin: 0.5em;
  }
`;

const StyledSchedule = styled(StyledInfoCard)`
  justify-self: end;
`;

const StyledGalery = styled.div`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  align-content: space-evenly;
  justify-items: center;
`;
