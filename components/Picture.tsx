import styled from "styled-components";
import { CldImage } from "next-cloudinary";

type PictureProps = {
  source: string;
  className?: string;
  onClick?: () => void;
  //can't handle big-prop as boolean - it throws an error
  big?: string;
  //same with huge
  huge?: string;
};

export default function Picture({
  source,
  className,
  big,
  huge,
  onClick,
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
        huge={huge}
        onClick={onClick}
        priority
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
  width: ${(props) =>
    props.big === "true" ? "150px" : props.huge === "true" ? "300px" : "125px"};
  height: ${(props) =>
    props.big === "true" ? "150px" : props.huge === "true" ? "300px" : "125px"};
`;
