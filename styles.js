import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/jetbrains-mono";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --link-color: darkgreen;
    --link-hover: blue;
    --background-color: pink;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
  font-family: "JetBrains Mono Variable", sans-serif;
  }
`;
