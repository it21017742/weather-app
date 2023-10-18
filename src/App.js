import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/WeatherService';
import getFormattedWeatherData from './services/WeatherService';

function App() {

  const fetchWeather = async (city) => {
    const data = await getFormattedWeatherData({q:"colombo"});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons></TopButtons>
      <Inputs></Inputs>

      <TimeAndLocation></TimeAndLocation>
      <TemperatureAndDetails></TemperatureAndDetails>
      <Forecast></Forecast>
    </div>
        
  );
}

export default App;
