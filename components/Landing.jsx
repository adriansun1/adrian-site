import Link from 'next/link';
import StyledLanding from '../styles/StyledLanding';
import { IoLogoLinkedin, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import Fade from 'react-reveal/Fade';

export default function Landing() {
  const logoSize = '4rem';
  return (
    <StyledLanding>
      <div className='title'>
        <Fade>
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
        </Fade>
      </div>
      <div className='hero-img'>
        <img src='/assets/images/kpop_dude_s.png' width='613' height='1132' />
      </div>
    </StyledLanding>
  );
}
