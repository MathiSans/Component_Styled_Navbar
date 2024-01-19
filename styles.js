import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/jetbrains-mono";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --link-color: darkblue;
    --link-hover: white;
    --background-color: lightblue;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
  font-family: "JetBrains Mono Variable", sans-serif;
  }
`;
