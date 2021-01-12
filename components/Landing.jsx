import Image from 'next/image';
import Link from 'next/link';
import StyledLanding from '../styles/StyledLanding';
import { IoLogoLinkedin, IoLogoGithub, IoIosPaper } from 'react-icons/io';

export default function Landing() {
  const logoSize = '4rem';
  return (
    <StyledLanding>
      <div className='title'>
        <h1>ADRIAN</h1>
        <h2>·x·</h2>
        <h1>SUN</h1>
        <div className='links'>
          <Link href='/resume'>
            <a>
              <IoIosPaper size={logoSize} />
            </a>
          </Link>
          <Link href='https://github.com/adriansun1'>
            <a>
              <IoLogoGithub size={logoSize} />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/adrian-sun/'>
            <a>
              <IoLogoLinkedin size={logoSize} />
            </a>
          </Link>
        </div>
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
