import styled from "styled-components";
import "@fontsource-variable/jetbrains-mono";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "JetBrains Mono Variable", sans-serif;
  font-weight: 300;
`;

export default function HomePage() {
  return (
    <div>
      <StyledHeader>Hello from Next.js</StyledHeader>
    </div>
  );
}
