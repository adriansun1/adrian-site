import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';

const StyledWrapper = styled.div`
  --size: 100px;
  height: 0px;
  position: relative;
  h3 {
    font-weight: 400;
  }
  h5 {
    font-weight: 300;
  }
  .image-group {
    display: flex;
    gap: 2rem;
    padding-right: 3rem;
    text-align: center;
    .img-container {
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
    }
  }
  .inner-wrapper {
    background: var(--blue);
    background: linear-gradient(90deg, #00000000, #553d67);
    padding: 1rem 0;
    position: absolute;
    display: flex;
    align-items: top;
    top: -${({ size }) => size + 50}px;
    right: 0;
    > h3 {
      padding-right: 2rem;
    }
  }
  @media (max-width: 500px) {
    .inner-wrapper {
      color: var(--grey);
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
  const { width } = useWindowDimensions();
  const fadeRight = width > 600;
  return (
    <StyledWrapper size={100}>
      <div className='inner-wrapper'>
        <Fade right={fadeRight}>
          <h3>with the family:</h3>
          <div className='image-group'>
            <div>
              <div className='img-container'>
                <img src='/assets/images/merry.png' width='300' height='300' />
              </div>
              <h5>Merry</h5>
            </div>
            <div>
              <div className='img-container'>
                <img src='/assets/images/kiara.png' width='300' height='300' />
                <h5>Kiara</h5>
              </div>
            </div>
            <div>
              <div className='img-container'>
                <img src='/assets/images/momo.png' width='300' height='300' />
                <h5>Moo-moo</h5>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </StyledWrapper>
  );
}
