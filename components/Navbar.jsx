import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledWrapper = styled.ul`
  position: ${({isAbsolute})=>isAbsolute ? 'absolute' : 'relative'};
  background: ${({isAbsolute})=>isAbsolute ? '' : 'var(--bgGradient)'};
  list-style-type: none;
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  margin: 0;
  a {
    color: var(--white);
  }
`;

export default function Navbar({isAbsolute}) {
  return (
    <StyledWrapper isAbsolute={isAbsolute}>
      <li>
        <Link href='/professional'>
          <a>Professional</a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href='/food'>
          <a>Food</a>
        </Link>
      </li>
      <li>
        <Link href='/notes'>
          <a>Notes</a>
        </Link>
      </li>
    </StyledWrapper>
  );
}
