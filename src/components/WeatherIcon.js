import React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt } from 'react-icons/fa';

function WeatherIcon({ main }) {
  switch (main.toLowerCase()) {
    case 'clear':
      return <FaSun size={40} color="orange" />;
    case 'clouds':
      return <FaCloud size={40} color="gray" />;
    case 'rain':
      return <FaCloudRain size={40} color="blue" />;
    case 'snow':
      return <FaSnowflake size={40} color="lightblue" />;
    case 'thunderstorm':
      return <FaBolt size={40} color="yellow" />;
    default:
      return <FaCloud size={40} color="gray" />;
  }
}

export default WeatherIcon;
