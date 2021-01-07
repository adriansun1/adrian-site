import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maroon: #b80003;
    --black: #22181C2;
    --pink: #f87977;
    --white: #fbf5f3;
    --grey: #efefef;
    --darkGrey: #909090;
    --orange: #F5403D;
    --purple: #856084;
    --bgGradient: linear-gradient(
    to bottom right,
    var(--pink),
    var(--maroon)
  );
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
`;

export default GlobalStyles;
