import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledWrapper = styled.div`
  --size: 100px;
  height: 0px;
  position: relative;
  .image-group {
    display: flex;
    gap: 2rem;
    padding-right: 3rem;
    > div {
      text-align: center;
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
    }
  }
  .inner-wrapper {
    position: absolute;
    display: flex;
    align-items: top;
    top: -${({ size }) => size + 50}px;
    right: 0;
    > h3 {
      padding-top: 0.5rem;
      padding-right: 2rem;
    }
  }
  @media (max-width: 1200px) {
    .inner-wrapper {
      flex-direction: column;
      align-items: flex-end;
    top: -${({ size }) => size + 100}px;
    }
  }
`;

export default function About() {
  return (
    <StyledWrapper size={100}>
      <div className='inner-wrapper'>
        <h3>with the family:</h3>
        <div className='image-group'>
          <div>
            <Image
              src='/assets/images/merry.png'
              width='300'
              height='300'
              layout='responsive'
            />
            <h5>Merry</h5>
          </div>
          <div>
            <Image
              src='/assets/images/kiara.png'
              width='300'
              height='300'
              layout='responsive'
            />
            <h5>Kiara</h5>
          </div>
          <div>
            <Image
              src='/assets/images/momo.png'
              width='300'
              height='300'
              layout='responsive'
            />
            <h5>Moo-moo</h5>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
