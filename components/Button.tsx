import styled from "styled-components";

//Typescript
type ButtonProps = {
  name?: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  className?: string;
  inactive?: boolean;
};
//Typescript end

export default function Button({
  name,
  onClick,
  className,
  inactive,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton className={className} onClick={onClick} inactive={inactive}>
      {name}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) =>
    props.inactive ? "rgba(217, 51, 120, 0.56)" : "#D93378"};
  border-radius: 4px;
  border: none;
  color: #d9d9d9;
  height: 2em;
  font-family: Roboto;
  cursor: pointer;
`;
