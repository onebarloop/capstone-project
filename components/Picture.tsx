import styled from "styled-components";
import Image from "next/image";

//Typescript
type PictureProps = {
  width: number;
  length: number;
  source: string;
  className?: string;
};
//Typescript end

export default function Picture({
  width,
  length,
  source,
  className,
}: PictureProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledImage alt={"tattoo"} src={source} width={width} height={length} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 7px;
  background-color: black;
  border-radius: 10px;
  box-sizing: content-box;
`;

const StyledImage = styled(Image)`
  border-radius: 0.2em;
`;
