import Picture from "../components/Picture";
import styled from "styled-components";
import DatePick from "./DatePick";
import Button from "./Button";
import useLikes from "../lib/useLikes";
import { ArtistInterface } from "../lib/ArtistClass";
import { useState } from "react";

export default function Artist({
  _id,
  artistName,
  location,
  tattoos,
  dates,
}: ArtistInterface): JSX.Element {
  const { handleLike, likes } = useLikes();

  const [popUp, setPopUp] = useState<string | null>(null);

  return (
    <StyledMain>
      {popUp !== null ? (
        <StyledPopUp>
          <Picture source={popUp} huge={"true"} />
          <Button name="back" onClick={() => setPopUp(null)}></Button>
        </StyledPopUp>
      ) : (
        <>
          <StyledInfoBox>
            <section>
              <p>{artistName}</p>
              <p>
                <Button name={"Contact"} onClick={() => alert("Hi!")} />
                <Button
                  name={likes.includes(_id) ? "Dislike" : "Like"}
                  onClick={() => handleLike(_id)}
                />
              </p>
            </section>
            <section>
              <p>{location.city}</p>
              <p>{location.streetname + " " + location.number}</p>
            </section>
          </StyledInfoBox>

          <StyledGallery>
            {tattoos.map((tattoo) => (
              <Picture
                source={tattoo}
                key={tattoo}
                big="true"
                onClick={() => setPopUp(tattoo)}
              />
            ))}
          </StyledGallery>

          <StyledSchedule>
            <DatePick dates={dates} inline />
          </StyledSchedule>
        </>
      )}
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
  p {
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

const StyledGallery = styled.div`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  align-content: space-between;
  justify-items: center;
  gap: 15px;
  margin-bottom: 20px; ;
`;

const StyledPopUp = styled.div`
  position: absolute;
  height: 80vh;
  width: 100vw;
  background-color: #383636;
  left: 0;
  right: 0;
  bottom: 66px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  gap: 40px;

  Button {
    width: 80px;
    height: 40px;
    font-size: 1em;
  }
`;
