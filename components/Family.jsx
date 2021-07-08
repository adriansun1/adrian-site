import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import { PhotoCard } from '../components/PhotoCard';

const StyledWrapper = styled.div`
  margin-bottom:20rem;
  .title {
    padding: 1rem 0;
    padding-right: 5%;
    text-align: right;
  }
  .grid {
    text-align: center;
    height: 60vh;
    gap: 1%;
    max-width: 1800px;
    display: flex;
    margin: 0 5%;
    > div {
      flex: 1 1 0;
    }
    .grid-item {
      max-width: 60vh;
      height: 100%;
    }
    direction: rtl;
  }
`;

export default function Family() {
  const { width } = useWindowDimensions();
  const fadeRight = width > 600;
  return (
    <Fade fraction={0.9} triggerOnce>
      <StyledWrapper>
        <h1 className='title'>with the family</h1>
        <div className='grid'>
          <Fade fraction={0.8} cascade triggerOnce>
            <div className='grid-item'>
              <PhotoCard
                title='Kiara'
                url='./assets/images/tabby-cat-breed.jpg'
              />
            </div>
            <div className='grid-item pad-1' style={{ paddingTop: '10rem' }}>
              <PhotoCard title='Merry' url='./assets/images/kpop_blonde.jpg' />
            </div>
            <div className='grid-item pad-2' style={{ paddingTop: '20rem' }}>
              <PhotoCard title='Moo-moo' url='./assets/images/dog.jpeg' />
            </div>
          </Fade>
        </div>
      </StyledWrapper>
    </Fade>
  );
}
