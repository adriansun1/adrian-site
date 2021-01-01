import Image from 'next/image';
import Link from 'next/link';
import StyledLanding from '../styles/StyledLanding';

export default function Landing() {
  return (
    <StyledLanding>
      <div className='title'>
        <h1>ADRIAN</h1>
        <h2>·x·</h2>
        <h1>SUN</h1>
        <Link href='/resume'>
          <a>Resumé</a>
        </Link>
      </div>
      <div className='hero-img'>
        <Image
          src='/../public/assets/images/kpop_dude_s.png'
          width='613'
          height='1132'
          layout='responsive'
        />
      </div>
    </StyledLanding>
  );
}
