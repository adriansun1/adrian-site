import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Twirl as Hamburger } from 'hamburger-react';
import { Fade } from 'react-awesome-reveal';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => (props.isOpen ? 'rgba(0, 0, 0, 0.5)' : 'none')};
  display: flex;
  align-items: center;
  z-index: 9999;
  padding-left: 0.5rem;
  padding-top: 0.25rem;
  transition: all 1s;
  .burg {
    display: flex;
    align-items: center;
    color: var(--purple);
    h3 {
      display: ${(props) => (props.isOpen ? 'none' : '')};
      cursor: pointer;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    position: relative;
    top: -2px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li {
      margin: 0 1rem;
    }
    a {
      color: var(--white);
    }
  }
  .circle {
    border-radius: 100px;
  }
`;

export default function Navbar({ hasHome, open }) {
  const [isOpen, setIsOpen] = useState(open ?? false);
  return (
    <StyledWrapper isOpen={isOpen}>
      <div
        className='burg'
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
      >
        <Hamburger
          direction='right'
          color={isOpen ? 'white' : '#553D67'}
          toggled={isOpen}
          size={25}
          rounded
          toggle={setIsOpen}
          label='Show menu'
        />
        <h3>Menu</h3>
      </div>
      {isOpen ? (
        <Fade direction='right' cascade damping={0.2} triggerOnce>
          <ul>
            {hasHome ? (
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
            ) : (
              <></>
            )}
            <li>
              <Link href='/wip'>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/wip'>
                <a>Notes</a>
              </Link>
            </li>
          </ul>
        </Fade>
      ) : (
        <></>
      )}
    </StyledWrapper>
  );
}
