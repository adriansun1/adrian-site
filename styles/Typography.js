import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  html {
    font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    margin: 1rem 0;
    font-weight:200;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 200;
    margin: 0;
  }
  @media(max-width:600px){
    h1{
      font-size: 3rem;
    }
    h2{
      font-size:2.5rem;
    }
    h2{
      font-size:2rem;
    }
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
`;

export default Typography;
