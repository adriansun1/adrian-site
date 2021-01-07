import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import InterestChart from '../components/InterestChart';


export default function Home() {
  return (
    <div>
      <Navbar isAbsolute />
      <Landing />
      <InterestChart/>
    </div>
  );
}
