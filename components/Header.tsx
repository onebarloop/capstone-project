import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  heading?: string;
};

export default function Header({
  heading = "Wannado",
}: HeaderProps): JSX.Element {
  const length: number = heading.length;

  return (
    <StyledHeader length={length}>
      <Link href="/">
        <h1>{heading}</h1>{" "}
      </Link>
      <Link href="/">
        <Image alt="logo" src="/logo.svg" height={60} width={60} />
      </Link>
    </StyledHeader>
  );
}

type StyledHeaderProps = {
  length?: number;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: black;
  padding: 20px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;

  h1 {
    font-size: ${(props) =>
      props.length ? (props.length < 13 ? "2.5rem" : "1.5rem") : "2.5rem"};
    color: rgba(217, 217, 217, 1);
  }
`;
