import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import InterestChart from '../components/InterestChart';
import ProjectSlider from '../components/ProjectSlider';
import styled from 'styled-components';
import About from '../components/About';
import Roller from '../components/Roller';
import Family from '../components/Family';

const StyledWrapper = styled.div`
height: 100vh;
background:var(--bgGradient);
h1{
  padding: 1rem;
  margin-bottom: 4rem;

}
`

export default function Home() {
  return (
    <div>
      <Navbar isAbsolute />
      <Landing />
      <Roller/>
      <Family/>
      <About/>
      <InterestChart/>
      <StyledWrapper>
        <h1>Since you're here, why not check out some projects?</h1>
          <ProjectSlider/>
      </StyledWrapper>
    </div>
  );
}
