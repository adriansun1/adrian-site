import React, { useEffect, useRef, useState } from 'react';
import Charts from './Charts';
import styled from 'styled-components';
import useScrollPosition from '../utils/hooks/useScrollPosition';
import animations from '../styles/Animations.module.css';

const dataset = [
  {
    label: 'Coding',
    interest: 100,
    proficiency: 80,
  },
  {
    label: 'Cooking',
    interest: 100,
    proficiency: 90,
  },
  {
    label: 'Economics',
    interest: 90,
    proficiency: 60,
  },
  {
    label: 'Adventure Cats',
    interest: 70,
    proficiency: 50,
  },
  {
    label: 'Fitness',
    interest: 80,
    proficiency: 80,
  },
  {
    label: 'E-Skateboard',
    interest: 70,
    proficiency: 80,
  },
  {
    label: 'Combat Sports',
    interest: 60,
    proficiency: 40,
  },
  {
    label: 'This Website',
    interest: 50,
    proficiency: 50,
  },
  {
    label: 'Gardening',
    interest: 10,
    proficiency: 3,
  },
];

const StyledWrapper = styled.div`
  height: 100vh;
  min-height: 750px;
  h3 {
    padding: 3rem;
  }
  .chartContainer {
    margin-top: 2rem;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s;
  }
`;

export default function InterestChart() {
  const { scrollPositionBottom } = useScrollPosition();
  const [scrollGoal, setScrollGoal] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    setScrollGoal(divRef.current.offsetTop);
  }, []);

  return (
    <StyledWrapper ref={divRef}>
      <h3 className={animations.fadeIn}>
        This is my personal site, I use it to keep track the stuff I care about:
      </h3>
      {scrollPositionBottom > scrollGoal ? (
        <div className={`chartContainer ${animations.fadeIn}`}>
          <Charts title='Things I care about' dataset={dataset} />
        </div>
      ) : (
        <></>
      )}
    </StyledWrapper>
  );
}
