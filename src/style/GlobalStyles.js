import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --darkGrey: #909090;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  html {
    font-size: 10px;
    padding: 0px;
    margin:0px;
  }

  body {
    font-size: 2rem;
    padding: 0px;
    margin:0px;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    border-radius: 2px;
    cursor: pointer;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
