import styled from "styled-components";
import Image from "next/image";
import Whirlpool from "../public/Whirlpool.jpg";

const StyledHeader = styled.h1`
  color: var(--link-color);
  font-weight: 300;
  text-align: center;
`;

const StyledDiv = styled.div`
  background-color: var(--background-color);
  padding-block: 1rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  position: absolute;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <StyledHeader>Hello from 🐬</StyledHeader>
      <StyledImage alt="blue foamy water" src={Whirlpool} />
    </StyledDiv>
  );
}
