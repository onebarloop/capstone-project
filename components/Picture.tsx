import styled from "styled-components";
import Image from "next/image";

//Typescript
type PictureProps = {
  width: number;
  length: number;
  source: string;
};
//Typescript end

export default function Picture({
  width,
  length,
  source,
}: PictureProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledImage alt={"tattoo"} src={source} width={width} height={length} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 7px;
  background-color: #d9d9d9;
  border-radius: 30px;
  box-sizing: content-box;
`;

const StyledImage = styled(Image)`
  border-radius: 1.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
