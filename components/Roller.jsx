import React from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  h1{
    margin:1rem 0.5rem;
  }
  .location {
    padding-top: 10vh;
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
  height: 110vh;
  min-height: 700px;
  background: url('./assets/images/hiking.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    padding-right: 1rem;
    .location {
      padding-top: 5vh;
      padding-right: 3rem;
      h1 {
        margin:0;
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
    background-position: -350px 0px;
  }
`;

export default function Roller() {
  return (
    <StyledWrapper>
      <div className='location'>
        <h1>I am a Full-Stack Software Engineer based in:</h1>
        <Fade>
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
    </StyledWrapper>
  );
}
