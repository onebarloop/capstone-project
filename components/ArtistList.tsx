import artists from "../lib/artists";
import styled from "styled-components";
import Link from "next/link";
import Picture from "./Picture";
import Button from "./Button";
import { useState } from "react";

export default function ArtistList(): JSX.Element {
  const [likes, setLikes] = useState<string[]>([]);

  function handleLike(id: string): void {
    likes.includes(id)
      ? setLikes((prev) => prev.filter((like) => like !== id))
      : setLikes((prev) => [...prev, id]);
  }

  console.log(likes);

  return (
    <>
      {artists.map(({ id, artistName, location, tattoos, slug }) => (
        <StyledArtistList key={id}>
          <StyledArtistCard>
            <StyledInfoBox>
              {artistName} <br /> {location}
              <Button name={"Like"} onClick={() => handleLike(id)} />
            </StyledInfoBox>
            <Link href={`/${slug}`}>
              <StyledPicture width={130} length={130} source={tattoos[0]} />
            </Link>
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

const StyledArtistCard = styled.div`
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
  top: 10px;
`;
