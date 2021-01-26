import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import {Grid, Card} from '../../components/Card';

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
      <Grid>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Grid>
    </StyledWrapper>
  );
}
