import styled from "styled-components";
import Link from "next/link";
import Picture from "./Picture";
import Button from "./Button";
import useLikes from "../lib/useLikes";
import { ArtistInterface } from "../lib/ArtistClass";

export default function List({
  _id,
  tattoos,
  slug,
  artistName,
  location,
}: ArtistInterface): JSX.Element {
  const { likes, handleLike } = useLikes();

  return (
    <StyledArtistCard key={_id}>
      <StyledInfoBox>
        {artistName} <br /> {location.city}
        <Button
          name={likes.includes(_id) ? "Dislike" : "Like"}
          onClick={() => handleLike(_id)}
        />
      </StyledInfoBox>
      <Link href={`/${slug}`}>
        <StyledPicture width={130} height={130} source={tattoos[0]} />
      </Link>
    </StyledArtistCard>
  );
}

const StyledArtistCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: black;
  position: relative;
  padding: 15px;
`;

const StyledInfoBox = styled.div`
  width: 100vw;
  height: 170px;
  background-color: #848484;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledPicture = styled(Picture)`
  position: absolute;
  right: 25px;
  top: 25px;
`;
