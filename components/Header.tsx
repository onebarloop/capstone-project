import styled from "styled-components";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <h1>Wannado</h1>
      <Image alt="logo" src="/logo.svg" height={70} width={70} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: black;
  color: rgba(217, 217, 217, 1);
  padding: 20px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 2.5rem;
  }
`;
