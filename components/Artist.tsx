import Picture from "../components/Picture";
import styled from "styled-components";

type ArtistProps = {
  artistName: string;
  location: {
    city: string;
    streetname: string;
    number: number;
  };
  tattoos: string[];
};

export default function Artist({
  artistName,
  location,
  tattoos,
}: ArtistProps): JSX.Element {
  return (
    <StyledMain>
      <StyledInfoCard>
        Information
        <li>
          Artist:
          <br /> {artistName}
        </li>
        <li>
          Location: <br />
          {location.city}
        </li>
      </StyledInfoCard>
      <StyledSchedule>
        Timeschedule (Hardcode)
        <li>Monday, 13.12.</li>
        <li>Monday, 13.12.</li>
        <li>Monday, 13.12.</li>
        <li>Monday, 13.12.</li>
      </StyledSchedule>
      <StyledGalery>
        {tattoos.map((tattoo) => (
          <Picture width={125} height={125} source={tattoo} key={tattoo} />
        ))}
      </StyledGalery>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  color: rgba(217, 217, 217, 1);
  height: 80vh;
  padding: 15px;
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
  align-content: space-between;
  justify-items: center;
`;
