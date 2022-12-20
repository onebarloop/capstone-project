import styled from "styled-components";
import { CldImage } from "next-cloudinary";

//Typescript
type PictureProps = {
  width: number;
  height: number;
  source: string;
  className?: string;
};
//Typescript end

export default function Picture({
  width,
  height,
  source,
  className,
}: PictureProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledImage alt={"tattoo"} src={source} width={width} height={height} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 7px;
  background-color: black;
  border-radius: 10px;
  box-sizing: content-box;
`;

const StyledImage = styled(CldImage)`
  border-radius: 0.2em;
`;
