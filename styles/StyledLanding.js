import styled from 'styled-components';

const StyledLanding = styled.div`
  --columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  padding: 0 4rem;
  height: 100vh;
  overflow: hidden;
  background: var(--bgGradient);
  background-attachment: fixed;
  transition: all .2s;
  .hero-img {
    margin:auto;
    margin-bottom:0;
    width: 35vw;
  }
  .title {
    --spacing: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30vh;
    color: var(--white);
    text-align: center;
    font-weight: 200;
    h1 {
      text-shadow: var(--shadow);
      letter-spacing: var(--spacing);
      text-indent: var(--spacing);
      margin: 0;
      line-height: 10rem;
      font-size: 12rem;
    }
    h2 {
      letter-spacing: var(--spacing);
      text-indent: var(--spacing);
      line-height: 4rem;
      font-size: 4rem;
    }
    a {
      padding-left: 3rem;
      padding-right: 3rem;
      color: var(--white);
    }
    .links {
      padding: 0.2rem 4rem;
      margin-top: 2.5rem;
      display: flex;
      gap: 1rem;
      a {
        padding: 0;
        margin: 0;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .chevron {
    color: var(--white);
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 1150px) {
    --columns: 1;
    .hero-img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      width: 40vw;
      min-width: 350px;
    }
    .title {
      z-index: 3;
    }
  }
  @media (max-width: 540px) {
    padding:0;
    .title {
      h1 {
        font-size: 20vw;
      }
    }
    .hero-img {
      width: 70%;
      margin: auto;
    }
  }
`;

export default StyledLanding;
