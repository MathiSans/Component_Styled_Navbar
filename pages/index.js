import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 300;
`;

export default function HomePage() {
  return (
    <div>
      <StyledHeader>Hello from Next.js</StyledHeader>
    </div>
  );
}
