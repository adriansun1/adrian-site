import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const StyledWrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Wip() {
  return (
    <StyledWrapper>
      <Navbar open hasHome/>
      <h1>Doesnt exist yet</h1>
      <p>This site is still WIP, have alot of things to do</p>
    </StyledWrapper>
  );
}
