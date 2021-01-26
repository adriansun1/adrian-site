import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width:100%;
  height:100%;
  border-radius: 10px;
  overflow:hidden;
  img {
    object-fit: cover;
    transition: all ease 0.5s;
    filter: blur(3px);
  }
  .description {
    width:100%;
    position: absolute;
    font-size: 2.5vw;
    text-align:center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:hover {
    img {
      filter:blur(0);
    }
  }
`;

export function PhotoCard({title, url}) {
  return (
    <StyledWrapper>
      <img src={url} alt='whatever' />
      <h3 className='description'>
        <strong>{title}</strong>
      </h3>
    </StyledWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export function PhotoGrid({ children }) {
  return <GridWrapper>{children}</GridWrapper>;
}
