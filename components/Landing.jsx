import React, { useState } from 'react';
import Link from 'next/link';
import StyledLanding from '../styles/StyledLanding';
import { IoLogoLinkedin, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

export default function Landing() {
  const logoSize = '4rem';

  return (
    <StyledLanding >
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
          <a
            href='https://github.com/adriansun1'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoGithub size={logoSize} />
          </a>
          <a
            href='https://www.linkedin.com/in/adrian-sun/'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoLinkedin size={logoSize} />
          </a>
        </div>
      </div>
      {/* <div className='hero-img'>
        <img src='./assets/images/kpop_dude_s.png' width='613' height='1132' />
      </div> */}
    </StyledLanding>
  );
}
