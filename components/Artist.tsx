import Picture from "../components/Picture";
import styled from "styled-components";
import DatePick from "./DatePick";
import Button from "./Button";
import useLikes from "../lib/useLikes";
import { ArtistInterface } from "../lib/ArtistClass";

export default function Artist({
  _id,
  artistName,
  location,
  tattoos,
  dates,
}: ArtistInterface): JSX.Element {
  const { handleLike, likes } = useLikes();

  return (
    <StyledMain>
      <StyledInfoBox>
        <section>
          <div>{artistName}</div>
          <div>
            <Button name={"Contact"} onClick={() => alert("Hi!")} />
            <Button
              name={likes.includes(_id) ? "Dislike" : "Like"}
              onClick={() => handleLike(_id)}
            />
          </div>
        </section>
        <section>
          <div>{location.city}</div>
          <div>{location.streetname + " " + location.number}</div>
        </section>
      </StyledInfoBox>
      <StyledGalery>
        {tattoos.map((tattoo) => (
          <Picture width={125} height={125} source={tattoo} key={tattoo} />
        ))}
      </StyledGalery>

      <StyledSchedule>
        <DatePick dates={dates} inline />
      </StyledSchedule>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  color: rgba(217, 217, 217, 1);
  margin-bottom: 60px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledInfoBox = styled.article`
  display: flex;
  justify-content: space-around;
  background-color: #474545;
  margin-bottom: 20px;
  font-size: 1.3em;
  padding: 0.5em 0;
  section {
    width: 50%;
  }
  div {
    margin: 1rem 0.5rem;
  }

  Button:first-child {
    margin-right: 1em;
  }
`;

const StyledSchedule = styled.div`
  align-self: center;
  margin: 10px;
`;

const StyledGalery = styled.div`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  align-content: space-between;
  justify-items: center;
  gap: 15px;
  margin-bottom: 20px; ;
`;
