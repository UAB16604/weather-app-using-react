import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <WeatherIcon main={data.weather[0].main} />
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
