import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const CircleElement = styled.div`
  height: 100vh;
  h3{
    padding:3rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Navbar isAbsolute />
      <Landing />
      <CircleElement>
          <h3>
            This is my personal site, I use it to keep track the
            stuff I'm interested in:
          </h3>
      </CircleElement>
    </div>
  );
}
