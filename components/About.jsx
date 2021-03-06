import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const StyledWrapper = styled.div`
  --columns: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  min-height: 110vh;
  .header {
    max-width: 700px;
    h2 {
      font-weight: 700;
      font-size: 3.5rem;
      line-height: 4rem;
    }
    > :nth-child(2) {
      text-align: right;
      margin-right: -4rem;
      z-index: 3;
    }
  }
  .second {
    display: grid;
    grid-template-columns: var(--columns);
    .portrait {
      --portraitSize: 400px;
      width: var(--portraitSize);
      height: var(--portraitSize);
      margin-top: -30px;
      img {
        position: relative;
        z-index: -1;
      }
    }
    .arrow {
      > :first-child {
        display: inline-block !important;
        width: 4.5rem;
        padding-bottom: 1rem;
        position: relative;
        top: -0.5rem;
      }
      h3 {
        display: inline-block;
        padding-left: 1rem;
      }
    }
    .text-box {
      padding-left: 5rem;
      padding-top: 4rem;
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1000px) {
    --columns: 1;
    .header {
      margin: auto;
      margin: 4rem 0;
      width: 100%;
      max-width: 100%;
      h2 {
        display: inline;
        font-size: 3rem;
      }
    }
    .second {
      width: 100%;
      margin: auto;
      justify-items: center;
      .portrait {
        --portraitSize: 300px;
        margin-top: 0;
      }
      .text-box {
        padding: 0;
        margin: 4rem 0;
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 600px) {
    .header {
      h2 {
        font-size: 2.5rem;
      }
    }
    .second {
      .arrow {
        h3 {
          font-size: 2rem;
        }
      }
      .text-box {
        font-size: medium;
      }
    }
  }
`;

export default function About() {
  return (
    <StyledWrapper>
      <Fade delay={800} triggerOnce>
        <div className='container'>
          {/* <div className='header'>
            <h2>My goal is to become one of</h2>{' '}
            <h2> the top engineers in the industry.</h2>
          </div> */}
          <div className='second'>
            <div>
              <div className='portrait'>
                <img
                  src='./assets/images/circleme.png'
                  width='300'
                  height='300'
                />
              </div>
              <Fade direction='left' triggerOnce>
                <div className='arrow'>
                  <img
                    src='./assets/images/arrow.png'
                    width='100'
                    height='100'
                  />
                  <h3>Me thinking about science</h3>
                </div>
              </Fade>
            </div>
            <div className='text-box'>
              <p>
                <strong>
                  I love to take on challenges and learn as much as a I can.
                </strong>{' '}
                I have a strong background in frontend development, and am
                steadfastly catching the rest of my skills up as well.{' '}
              </p>
              <p>
                I'm familiar with an abundance of technologies, and am able to
                quickly adapt as needed. I like to work in roles where I am able
                to make a positive impact whether it's on the lives of
                consumers, improving developer experiences, etc.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </StyledWrapper>
  );
}
