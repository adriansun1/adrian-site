import React, { Children } from 'react';
import styled from 'styled-components';
import { GiStrongMan, GiSandsOfTime } from 'react-icons/gi';

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 300px;
  transition: all 0.5s;
  box-shadow: var(--shadow);
  img {
    object-fit: cover;
    filter: brightness(70%);
    transform-origin: center bottom;
    transition: all ease 0.5s;
  }
  .description {
    .title {
      line-height: 2rem;
      margin-bottom: 0rem;
      letter-spacing: 0.2rem;
    }
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 65px;
    background-color: var(--white);
    // background: rgba(0, 0, 0, 0.5);
    // color: var(--white);
    padding: 1rem 2rem;
    margin: auto;
    transition: all 0.5s;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
  .icons {
    color:white;
    svg {
      padding:2px 5px;
    }
    > div {
      display: flex;
      align-items: center;
      p {
        padding: 0;
        margin: 0;
      }
    }
    position: absolute;
    padding: 1rem;
    top: 0;
    right: 0;
  }
  &:hover {
    transform: scale(1.02);
    img {
      transform: scale(1.3);
      filter: brightness(100%);
    }
  }
`;

export function Card() {
  return (
    <StyledWrapper>
      <img src='/assets/images/avotoast.jpeg' alt='avotoast' />
      <div className='icons'>
        <div>
          <GiStrongMan />
          <p>3/5</p>
        </div>
        <div>
          <GiSandsOfTime />
          <p>3/5</p>
        </div>
      </div>
      <div className='description'>
        <h3 className='title'>
          <strong>Risotto Alla Milanese</strong>
        </h3>
        <div className='rating'>
          <h5>⭐⭐⭐⭐⭐</h5>
          <p>Japanese</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export function Grid({ children }) {
  return <GridWrapper>{children}</GridWrapper>;
}
