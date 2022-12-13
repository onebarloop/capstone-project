import styled from "styled-components";
import Image from "next/image";

export default function Main(): JSX.Element {
  return (
    <StyledMain>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/triangle.png"}
          width={150}
          height={150}
        />
      </div>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/moon.png"}
          width={150}
          height={150}
        />
      </div>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/ice.png"}
          width={150}
          height={150}
        />
      </div>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/bike.png"}
          width={150}
          height={150}
        />
      </div>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/fox.png"}
          width={150}
          height={150}
        />
      </div>
      <div>
        <StyledImage
          alt={"tattoo"}
          src={"/img/tree.png"}
          width={150}
          height={150}
        />
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  color: rgba(217, 217, 217, 1);
  padding: 5px;
  height: 80vh;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-around;
  justify-items: center;
  gap: 5px;
  div {
    padding: 7px;
    background-color: #d9d9d9;
    border-radius: 30px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 30px;
`;
