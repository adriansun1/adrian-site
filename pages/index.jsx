import Image from 'next/image';
import styled from 'styled-components';
import HeroVideo from '../components/HeroVideo';

const StyledBg = styled.div`
  --columns: 2;
  --first: #f87977;
  --second: #b80003;
  background-image: linear-gradient(
    to bottom right,
    var(--first),
    var(--second)
  );
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  padding: 0 4rem;
  height: 100vh;
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
    letter-spacing: var(--spacing);
    text-indent: var(--spacing);
    h1 {
      margin:0;
      line-height: 10rem;
      font-size: 12rem;
    }
    h2 {
      line-height: 4rem;
      font-size: 4rem;
    }
    button {
      margin-top: 2.5rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media (max-width: 950px) {
    --columns: 1;
    .hero-img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      min-width: 300px;
    }
    .title {
      z-index: 3;
    }
  }
`;

export default function Home() {
  return (
    <StyledBg>
      {/* <HeroVideo /> */}
      <div className='title'>
        <h1>ADRIAN</h1>
        <h2>·x·</h2>
        <h1>SUN</h1>
        <button>resumé</button>
      </div>
      <div className='hero-img'>
        <Image
          src='/../public/assets/images/kpop_dude_s.png'
          width='613'
          height='1132'
          layout='responsive'
        />
      </div>
    </StyledBg>
  );
}
