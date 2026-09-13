import Footer from './footer';
import Navbar from './navbar';
import LaunchpadEvent from './Launchpad';
import RotatingMottos from './Mottos';
import './App.css';

function App() {
  return (<div>
    <Navbar/>
    <LaunchpadEvent/>
    <RotatingMottos/>
    <Footer/>
  </div>);
}

export default App;