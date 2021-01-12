import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';
import Link from 'next/link';

const StyledWrapper = styled.div`
  --distance: 3%;
  --arrowSize: 4rem;

  .slick-arrow {
    z-index: 1;
    opacity: 1;
    display: block;
    color: var(--white);
    width: var(--arrowSize);
    height: var(--arrowSize);
    &:hover {
      color: var(--white);
    }
    transition: all 0.1s ease-out;
  }
  .slick-prev {
    left: var(--distance) !important;
  }
  .slick-next {
    right: var(--distance) !important;
  }
  .slick-slide.slick-center img {
    transform: scale(1.1);
  }
  .item {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      opacity: 0.7;
      height: 100%;
      width: 100%;
    }
    background-color:black;
  }
  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    z-index: 4;
    h1 {
      cursor: pointer;
    }
    transition:all .1s;
    :hover{
      transform:scale(1.1);

    }
  }
  @media (min-width: 1300px) {
    --arrowSize: 5rem;
  }
  // @media (min-width: 1200px) {
  //   --distance: 7%;
  //   --arrowSize: 5rem;
  // }
`;

function LeftArrow({ className, style, onClick }) {
  return (
    <CgArrowLeftO
      style={{
        ...style,
      }}
      onClick={onClick}
      className={className}
    />
  );
}

function RightArrow({ className, style, onClick }) {
  return (
    <CgArrowRightO
      style={{
        ...style,
      }}
      onClick={onClick}
      className={className}
    />
  );
}

export default function ProjectSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <StyledWrapper>
      <div>
        <Slider {...settings}>
          <>
            <div className='item'>
              <img
                src='/../public/assets/images/bread_stock2.jpg'
                height='1200px'
                width='1200px'
              />
              <div className='title'>
                <Link href='/projects/name'>
                  <h1>Project Name</h1>
                </Link>
              </div>
            </div>
          </>
          <>
            <div className='item'>
              <img
                src='/../public/assets/images/bread_stock2.jpg'
                height='1200px'
                width='1200px'
              />
              <div className='title'>
                <Link href='/projects/name'>
                  <h1>Nroject Pame</h1>
                </Link>
              </div>
            </div>
          </>
          <>
            <div className='item'>
              <img
                src='/../public/assets/images/bread_stock2.jpg'
                height='1200px'
                width='1200px'
              />
              <div className='title'>
                <Link href='/projects/name'>
                  <h1>Projece Namt</h1>
                </Link>
              </div>
            </div>
          </>
        </Slider>
      </div>
    </StyledWrapper>
  );
}
