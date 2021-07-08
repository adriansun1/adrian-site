import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import InterestChart from '../components/InterestChart';
import styled from 'styled-components';
import About from '../components/About';
import Roller from '../components/Roller';
import Family from '../components/Family';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ProjectDescription from '../components/ProjectDescription';

const StyledWrapper = styled.div``;

export default function Home() {
  return (
    <StyledWrapper>
      {/* <Navbar isAbsolute /> */}
      <Landing />
      {/* <Roller />
      <Family /> */}
      {/* <About />
      <InterestChart />
      <ProjectDescription/> */}
      <Contact />
      <Footer />
    </StyledWrapper>
  );
}
