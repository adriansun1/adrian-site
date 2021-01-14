import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  max-width: 80%;
  margin: auto;
  h2 {
    font-weight: 300;
    padding: 0;
  }
`;

export default function ProjectDescription() {
  return (
      <StyledWrapper>
        <h2>Since you're here, why not check out some projects?</h2>
        <div className='content'>
          <h2>Recipe Aggregator</h2>
          <p>
            Solves for a problem that I encounter in my daily life. This app
            aggregates recipes from provided urls, and then creates a shopping
            list from the ingredients contained within each page. I estimate
            that i will save 20 seconds off every week. I should be able to make
            up for the time spent making this in a decade or so.
          </p>

          <h2>NoteMaker</h2>
          <p>
            Extremely barebones cli tool, generates markdown templates so i can
            take notes using vim, it asks nice daily journal questions! Planning
            to implement search functionality, template format is still in flux
            as well until i've used it enough to know where I want improvements.
          </p>

          <h2>Bars to bells</h2>
          <p>
            Does basic Barbell to dumbell conversions as well as other weight
            training related conversions. Useful to compare progress between
            dumbbell and barbell lifts.
          </p>
        </div>
      </StyledWrapper>
  );
}
