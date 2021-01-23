import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { GiStrongMan, GiSandsOfTime } from 'react-icons/gi';

const StyledWrapper = styled.div`
  padding: 8rem;
  height: 100vh;
  .title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  @media (max-width: 800px) {
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    height: 100%;
    gap: 1rem;
  }
  .card {
    --top: -30%;
    position:relative;
    overflow: hidden;
    border-radius: 10px;
    height: 300px;
    transition: all 0.5s;
    box-shadow: var(--shadow);
    img {
      object-fit: cover;
    }
    .description {
      .title {
        line-height: 2rem;
        margin-bottom: 0rem;
        letter-spacing: 0.2rem;
      }
      position: relative;
      top: var(--top);
      background-color: var(--white);
      // background: rgba(0, 0, 0, 0.5);
      // color: var(--white);
      padding: 1rem 2rem;
      margin: auto;
      height: 100%;
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
    .effort {
      >div{
        display:flex;
        align-items:center;
        p{padding:0;margin:0;}
      }
      position: absolute;
      padding:1rem;
      top: 0;
      right:0;
    }
    &:hover {
      transform: scale(1.02);
      img{
        transform: scale(1.3);
        transition: all ease .5s;

      }
    }
  }
`;

export default function Resume() {
  return (
    <StyledWrapper>
      <Navbar hasHome />
      <div className='title'>
        <h1>Recipes for things i made</h1>
        <input type='text' placeholder='eventually search bar that works' />
      </div>
      <p>
        These recipes are curated off the internet from sources I respect. Merry
        and myself have tried every one of the recipes listed, and have left a
        rating as well as any modification notes as well
      </p>
      <div className='card-grid'>
        <div className='card'>
          <img src='/assets/images/avotoast.jpeg' alt='avotoast' />
          <div className='effort'>
            <div>
              <GiStrongMan />
              <p>:3/5</p>
            </div>
            <div>
              <GiSandsOfTime />
              <p>:3/5</p>
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
        </div>
        <div className='card'>
          <img src='/assets/images/avotoast.jpeg' alt='avotoast' />
          <div className='description'>
            <h3 className='title'>
              <strong>Hipster Avocado Toast</strong>
            </h3>
            <div className='rating'>
              <h5>⭐⭐⭐⭐⭐</h5>
              <p>Japanese</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
