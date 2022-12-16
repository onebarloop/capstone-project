import styled from "styled-components";
import Picture from "./Picture";
import Link from "next/link";
import artists from "../lib/artists";

export default function RandomView(): JSX.Element {
  const randomArtists = artists
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <StyledRandom>
      {randomArtists?.map((artist) => (
        <Link key={artist.id} href={`/${artist.slug}`}>
          <Picture
            width={120}
            length={120}
            source={
              artist.tattoos[Math.floor(Math.random() * artist.tattoos.length)]
            }
          />
        </Link>
      ))}
    </StyledRandom>
  );
}

const StyledRandom = styled.main`
  color: rgba(217, 217, 217, 1);
  height: 75vh;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-around;
  justify-items: center;
  align-items: start;
  gap: 15px;
`;
