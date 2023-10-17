import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 t0-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons></TopButtons>
      <Inputs></Inputs>

      <TimeAndLocation></TimeAndLocation>
      <TemperatureAndDetails></TemperatureAndDetails>
    </div>
        
  );
}

export default App;
