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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 80vh;
  max-width: 80%;
  margin: auto;
  h2 {
    font-weight: 300;
    padding: 0;
  }
`;

export default function Home() {
  return (
    <div>
      <Navbar isAbsolute />
      <Landing />
      <Roller />
      <Family />
      <About />
      <InterestChart />
      <ProjectDescription/>
      <Contact />
      <Footer />
    </div>
  );
}
