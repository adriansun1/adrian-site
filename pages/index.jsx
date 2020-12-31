import Image from 'next/image';
import styled from 'styled-components';
import HeroVideo from '../components/HeroVideo';

const StyledBg = styled.div`
  --first:#F87977;
  --second:#B80003;
  background-image: linear-gradient(to bottom right, var(--first), var(--second));
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
  .hero-img {
    padding: 2rem;
    width: 35vw;
    margin: auto;
  }
  .title {
    --spacing: 1.5rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-top: 30vh;
    color: var(--white);
    text-align: center;
    h1 {
      margin: 0;
      line-height: 10rem;
      font-weight: 200;
      font-size: 12rem;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 0;
      line-height: 4rem;
      font-weight: 200;
      font-size: 4rem;
      letter-spacing: var(--spacing);
    }
    button{
      margin-top: 2rem;
      margin-right: var(--spacing);
      padding-left: 3rem;
      padding-right: 3rem;
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
