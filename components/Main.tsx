import styled from "styled-components";
import Picture from "./Picture";
import Link from "next/link";

export default function Main(): JSX.Element {
  return (
    <StyledMain>
      <Link href="/cheapbackpieces">
        <Picture width={140} length={140} source={"/img/paper.png"} />
      </Link>
      <Link href="/customtattoosberlin">
        <Picture width={140} length={140} source={"/img/triangle.png"} />
      </Link>
      <Link href="/worldofpain">
        <Picture width={140} length={140} source={"/img/moon.png"} />
      </Link>
      <Link href="/derbiberbau">
        <Picture width={140} length={140} source={"/img/Xlink.png"} />
      </Link>
      <Link href="/peterskleinestattoostudio">
        <Picture width={140} length={140} source={"/img/pen.png"} />
      </Link>
      <Link href="/stickandpoke">
        <Picture width={140} length={140} source={"/img/Xsimba.png"} />
      </Link>
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
