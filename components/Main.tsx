import styled from "styled-components";
import Picture from "./Picture";
import Link from "next/link";

export default function Main(): JSX.Element {
  return (
    <StyledMain>
      <Picture width={140} length={140} source={"/img/bike.png"} />
      <Picture width={140} length={140} source={"/img/fox.png"} />
      <Picture width={140} length={140} source={"/img/ice.png"} />
      <Picture width={140} length={140} source={"/img/moon.png"} />
      <Picture width={140} length={140} source={"/img/tree.png"} />
      <Picture width={140} length={140} source={"/img/triangle.png"} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  color: rgba(217, 217, 217, 1);
  height: 80vh;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-around;
  justify-items: center;
  align-items: start;
  gap: 5px;
`;
