import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .location {
    padding-top: 10vh;
    display: flex;
    justify-content: center;
    ul {
      list-style-type: none;
      padding:0;
      padding-top: 0.5rem;
      padding-left: 1rem;
      margin:0;
    }
    li{
      font-size: 3.5rem;
    }
    align-items: top;
    .strike {
      text-decoration: line-through;
      opacity:0.4;
    }
  }
  height: 110vh;
  min-height: 700px;
  background: url('./assets/images/hiking.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -100px 0px;

  @media(max-width:1010px){
    padding-right:1rem;
    .location{
      padding-top: 5vh;
      padding-right:3rem;
      h1{
        text-align:right;
        max-width:500px;
      }
      flex-direction: column;
      align-items: flex-end;

    }

  }
  @media(max-width:800px){
    background-position: -300px 0px;
  }
  @media(max-width:400px){
    background-position: -350px 0px;
  }
`;

export default function Roller() {
  return (
    <StyledWrapper>
      <div className='location'>
        <h1>I am a Full-Stack Software Engineer based in:</h1>
        <ul>
          <li>
            Portland, Oregon
          </li>
          <li className='strike'>Venice, CA</li>
          <li className='strike'>Diamond Bar, CA</li>
        </ul>
      </div>
    </StyledWrapper>
  );
}
