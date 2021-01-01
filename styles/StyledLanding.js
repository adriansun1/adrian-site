import styled from 'styled-components';

const StyledLanding = styled.div`
  --columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  padding: 0 4rem;
  height: 100vh;
  overflow:hidden;
  background: var(--bgGradient);
  background-attachment:fixed;
  .hero-img {
    width: 35vw;
    margin: auto;
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
      margin-top: 2.5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      color:var(--white);
    }
  }
  .chevron {
    color: var(--white);
    width: 4rem;
    height: 4rem;


  }
  @media (max-width: 950px) {
    --columns: 1;
    .hero-img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      min-width: 330px;
    }
    .title {
      z-index: 3;
    }
  }
`;

export default StyledLanding;