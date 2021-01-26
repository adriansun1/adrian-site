import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { PhotoCard, PhotoGrid } from '../components/PhotoCard';

const StyledWrapper = styled.div`
  height: 100vh;
  // min-height: 700px;
  // background: url('./assets/images/hiking.png');
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    margin: 1rem 0.5rem;
  }
  .location {
    padding: 5vh 0;
    display: flex;
    justify-content: center;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    li {
      h1 {
        font-weight: 300;
      }
    }
    align-items: top;
    .strike {
      text-decoration: line-through;
      opacity: 0.4;
    }
  }
  .grid {
    text-align:center;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 0 80px;
    height: 65vh;
    .grid-item{
      height:100%;
    }
  }
  @media (max-width: 1100px) {
    padding-right: 1rem;
    .location {
      padding-top: 5vh;
      padding-right: 3rem;
      h1 {
        margin: 0;
        text-align: right;
        max-width: 500px;
      }
      flex-direction: column;
      align-items: flex-end;
    }
  }
  @media (max-width: 800px) {
    background-position: -300px 0px;
  }
  @media (max-width: 400px) {
    background-position: -375px 0px;
  }
`;

export default function Roller() {
  return (
    <StyledWrapper>
      <div className='location'>
        <h1>I am a Full-Stack Software Engineer based in:</h1>
        <Fade delay={800} fraction={1} direction='up' cascade triggerOnce>
          <ul>
            <li>
              <h1>Portland, Oregon</h1>
            </li>
            <li className='strike'>
              <h1>Los Angeles, CA</h1>
            </li>
          </ul>
        </Fade>
      </div>
        <div className='grid'>
          <Fade fraction={.5} delay={1000} damping={.4} cascade triggerOnce>
          <div className='grid-item'>
            <h2>With</h2>
            <PhotoCard title='Kiara' url='./assets/images/tabby-cat-breed.jpg'/>
          </div>
          <div className='grid-item'>
            <h2>The</h2>
            <PhotoCard title='Merry' url='./assets/images/kpop_blonde.jpg' />
          </div>
          <div className='grid-item'>
            <h2>Family</h2>
            <PhotoCard title='Moo-moo' url='./assets/images/dog.jpeg' />
          </div>
          </Fade>
        </div>
    </StyledWrapper>
  );
}
