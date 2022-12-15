import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <h1>Wannado</h1>
      <Link href="/">
        <Image alt="logo" src="/logo.svg" height={60} width={60} />
      </Link>
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
