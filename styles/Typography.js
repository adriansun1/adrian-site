import { createGlobalStyle } from 'styled-components';
import './Fonts.module.css';

const Typography = createGlobalStyle`

  // font-family: 'Raleway', sans-serif;
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Source Code Pro', monospace;
  // font-family: 'Source Sans Pro', sans-serif;
  // font-family: 'Titillium Web', sans-serif;
  // font-family: 'Work Sans', sans-serif;

  html {
    // font-family: 'Source Code Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family: 'Titillium Web';
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    margin: 1rem 0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 200;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
`;

export default Typography;
