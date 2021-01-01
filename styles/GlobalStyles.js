import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fbf5f3;
    --grey: #efefef;
    --darkGrey: #909090;
  }


  html, body{
    height:100%;
    width:100%;
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
    color: var(--white);
    text-decoration: none;
    background-color: transparent;
    border: 1px solid var(--white);
    padding: .5rem 1rem;
    &:hover {
      color: var(--black);
      background-color: var(--white);
    }
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
