import Picture from "../components/Picture";
import styled from "styled-components";
import DatePick from "./DatePick";
import Button from "./Button";

type ArtistProps = {
  artistName: string;
  location: {
    city: string;
    streetname: string;
    number: number;
  };
  tattoos: string[];
  dates: string[];
};

export default function Artist({
  artistName,
  location,
  tattoos,
  dates,
}: ArtistProps): JSX.Element {
  return (
    <StyledMain>
      <StyledInfoBox>
        <StyledInfoCard>
          <li>{artistName}</li>
          <li>
            <Button name={"✉️"} onClick={() => alert("Hi!")} />
          </li>
        </StyledInfoCard>
        <StyledInfoCard>
          <li>{location.city}</li>
          <li>{location.streetname + " " + location.number}</li>
        </StyledInfoCard>
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

const StyledInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #474545;
  margin-bottom: 20px; ;
`;

const StyledInfoCard = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2em;
  li {
    margin: 0.5em;
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
