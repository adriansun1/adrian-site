import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import Navbar from '../components/Navbar';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  .iframe-container {
    padding: 3rem;
    display: flex;
    justify-content: center;
  }
`;

export default function Resume() {
  const ref = useRef(null);
  const { width, height } = useWindowDimensions();

  return (
    <StyledWrapper>
      <Navbar hasHome />
      {/* <p>export as pdf/ docx</p>
      <p>print me</p>
      <p>last updated: today</p> */}
      <iframe width='100%' height='100%' srcdoc="<iframe src='https://d13b2cruxwxefb.cloudfront.net/resume.html'></iframe>"></iframe>
    </StyledWrapper>
  );
}
