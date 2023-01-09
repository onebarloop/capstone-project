import styled from "styled-components";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <StyledLink href="/">
        <p>HOME</p>
      </StyledLink>
      <StyledLink href="/map">
        <p>MAP</p>
      </StyledLink>
      <StyledLink href="/newuser">
        <p>USER</p>
      </StyledLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: black;
  color: rgba(217, 217, 217, 1);
  padding: 15px;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  background-color: #d93378;
  text-align: center;
  padding: auto;
  border-radius: 4px;
  width: 70px;
  height: 39px;
  font-size: 0.9em;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: Roboto;
`;
