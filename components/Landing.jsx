import React, { useState } from 'react';
import Link from 'next/link';
import StyledLanding from '../styles/StyledLanding';
import { IoLogoLinkedin, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export default function Landing() {
  const logoSize = '4rem';
  const { height } = useWindowDimensions();
  const [opacity, setOpacity] = useState(100);

  useScrollPosition(({ currPos }) => {
    const val = Math.floor(((height + currPos.y) / height) * 100);
    if (val > 0 && (val > opacity + 5 || val < opacity - 5)) {
      if (val > 90) {
        setOpacity(100);
      } else if (val < 40) {
        setOpacity(0);
      } else {
        setOpacity(val);
      }
    }
  });

  return (
    <div
      style={{
        opacity: `${opacity}%`,
        transition: 'opacity .2s',
        scrollSnapAlign: 'start',
        position: 'relative',
      }}
    >
      <StyledLanding>
        <div className='title'>
          <h1>ADRIAN</h1>
          <h2>·x·</h2>
          <h1>SUN</h1>
          <div className='links'>
            <a
              href='https://d13b2cruxwxefb.cloudfront.net/resume.html'
              target='_blank'
              rel='noreferrer'
            >
              <IoIosPaper size={logoSize} />
            </a>
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
    </div>
  );
}
