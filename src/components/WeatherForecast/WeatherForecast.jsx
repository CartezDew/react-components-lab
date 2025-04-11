// src/components/WeatherForecast.jsx
import WeatherIcon from '../WeatherIcon.jsx';
import WeatherData from '../WeatherData.jsx';
import "./WeatherForecast.css"

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <WeatherIcon img={forecast.img} alt={forecast.imgAlt} />
      <WeatherData 
        day={forecast.day} 
        conditions={forecast.conditions} 
        time={forecast.time} 
      />
    </div>
  );
};

export default WeatherForecast;
