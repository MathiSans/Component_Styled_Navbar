import styled from "styled-components";

const StyledHeader = styled.h1`
  color: var(--link-color);
  font-weight: 300;
  text-align: center;
`;

const StyledDiv = styled.div`
  background-color: var(--background-color);
  padding-block: 1rem;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <StyledHeader>Hello from 🐬</StyledHeader>
    </StyledDiv>
  );
}
