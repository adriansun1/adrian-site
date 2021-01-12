import React from 'react';
import Charts from './Charts';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const dataset = [
  {
    label: 'Coding',
    interest: 10,
    proficiency: 8,
  },
  {
    label: 'Cooking',
    interest: 10,
    proficiency: 9.5,
  },
  {
    label: 'Economics',
    interest: 9,
    proficiency: 6,
  },
  {
    label: 'Adventure Cats',
    interest: 7,
    proficiency: 4,
  },
  {
    label: 'Fitness',
    interest: 8,
    proficiency: 8,
  },
  {
    label: 'E-Skateboard',
    interest: 7,
    proficiency: 8,
  },
  {
    label: 'Combat Sports',
    interest: 6,
    proficiency: 4,
  },
  {
    label: 'This Website',
    interest: 5,
    proficiency: 5,
  },
  {
    label: 'Gardening',
    interest: 1,
    proficiency: 0.5,
  },
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 110vh;
  max-width: 80%;
  margin: auto;
  h2 {
    margin-top: 5rem;
    font-weight: 300;
    padding: 0;
    padding-top: 3rem;
  }
  .chartContainer {
    margin-top: 2rem;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s;
  }
  @media (max-width: 500px) {
    min-height: 1000px;
    margin-top: 5rem;
  }
`;

export default function InterestChart() {
  return (
    <StyledWrapper>
      <Fade>
        <h2>
          This is my personal site, I use it to keep track the stuff I care
          about:
        </h2>
      </Fade>
      <Fade>
        <div className='chartContainer'>
          <Charts
            title='Stuff I care about'
            dataset={dataset}
            propOptions={{ hidden: ['proficiency'] }}
          />
        </div>
      </Fade>
    </StyledWrapper>
  );
}
