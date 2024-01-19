import { createGlobalStyle } from "styled-components";

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
`;
