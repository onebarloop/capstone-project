import styled from "styled-components";

type ButtonProps = {
  name: string;
  onClick: React.MouseEventHandler;
};

export default function Button({ name, onClick }: ButtonProps): JSX.Element {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
}

const StyledButton = styled.button`
  background: #d93378;
  border-radius: 4px;
  border: none;
  color: #d9d9d9;
  height: 2em;
`;
