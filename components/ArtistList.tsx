import artists from "../lib/artists";
import styled from "styled-components";
import Link from "next/link";
import Picture from "./Picture";

export default function ArtistList(): JSX.Element {
  return (
    <>
      {artists.map(({ id, artistName, location, tattoos, slug }) => (
        <StyledArtistList key={id}>
          <StyledArtistCard href={`/${slug}`}>
            <StyledInfoBox>
              {artistName} <br /> {location}
            </StyledInfoBox>
            <StyledPicture width={140} length={140} source={tattoos[0]} />
          </StyledArtistCard>
        </StyledArtistList>
      ))}
    </>
  );
}

const StyledArtistList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

const StyledArtistCard = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: black;
  position: relative;
`;

const StyledInfoBox = styled.div`
  width: 100vw;
  height: 170px;
  background-color: #848484;
  border-radius: 30px;
  padding: 10px;
`;

const StyledPicture = styled(Picture)`
  position: absolute;
  right: 10px;
  top: 7px;
`;
