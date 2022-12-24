import styled from "styled-components";
import Link from "next/link";
import Picture from "./Picture";
import Button from "./Button";

//Typescript
type ListProps = {
  onLike: (_id: string) => void;
  isLiked: boolean;
  _id: string;
  tattoos: string[];
  slug: string;
  artistName: string;
  location: {
    postalCode: number;
    city: string;
    streetname: string;
    number: number;
  };
};
//Typescript End

export default function List({
  onLike,
  isLiked,
  _id,
  tattoos,
  slug,
  artistName,
  location,
}: ListProps): JSX.Element {
  return (
    <StyledArtistList key={_id}>
      <StyledArtistCard>
        <StyledInfoBox>
          {artistName} <br /> {location.city}
          <Button
            name={isLiked ? "Dislike" : "Like"}
            onClick={() => onLike(_id)}
          />
        </StyledInfoBox>
        <Link href={`/${slug}`}>
          <StyledPicture width={130} height={130} source={tattoos[0]} />
        </Link>
      </StyledArtistCard>
    </StyledArtistList>
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
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledPicture = styled(Picture)`
  position: absolute;
  right: 10px;
  top: 10px;
`;
