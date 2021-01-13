import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  gap:2rem;
  p{
    font-weight:200;
    text-align:right;
    padding:0.5rem 2rem;
  }
`;

export default function Footer() {
  return (
    <StyledWrapper>
      <p>© {new Date().getFullYear()} Adrian Sun</p>
    </StyledWrapper>
  );
}
