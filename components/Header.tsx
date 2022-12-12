import styled from "styled-components";

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <h1>Wannado</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: black;
  color: rgba(217, 217, 217, 1);
`;
