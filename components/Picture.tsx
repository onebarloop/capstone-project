import styled from "styled-components";
import { CldImage } from "next-cloudinary";

type PictureProps = {
  source: string;
  className?: string;
  //can't handle big-prop as boolean - it throws an error
  big?: string;
};

export default function Picture({
  source,
  className,
  big,
}: PictureProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledImage
        alt={"tattoo"}
        src={source}
        width={300}
        height={300}
        crop="fill"
        big={big}
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
  object-fit: contain;
  width: ${(props) => (props.big === "true" ? "150px" : "125px")};
  height: ${(props) => (props.big === "true" ? "150px" : "125px")};
`;
