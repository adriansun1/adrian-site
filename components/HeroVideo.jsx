import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .videoContainer {
    width: 100%;
    height: 100%;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      // background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
      background-color: rgba(0, 0, 0, 1);
      opacity: 0.5;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export default function HeroVideo() {
  return (
    <StyledVideo>
      <div class='videoContainer'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/bttviARLIew?&start=238&autoplay=1&controls=0&modestbranding&loop=1&rel=0&mute=1'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </StyledVideo>
  );
}
