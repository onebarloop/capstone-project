import styled from "styled-components";
import { CldImage } from "next-cloudinary";

type PictureProps = {
  width: number;
  height: number;
  source: string;
  className?: string;
};

export default function Picture({
  width,
  height,
  source,
  className,
}: PictureProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledImage
        alt={"tattoo"}
        src={source}
        width={width}
        height={height}
        crop="fill"
      />
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
