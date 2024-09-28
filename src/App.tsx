import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [city, setCity] = useState('London'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // Fetch weather data whenever city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${cityName}&units=metric&appid=${API_KEY}`);
      setWeatherData(response.data);
      setError(''); // Reset the error
    } catch (err) {
      console.error(err);
      setWeatherData(null);
      setError('City not found, please try again.');
    }
  };

  return (
    <div className="app">
      <h1>React Weather App</h1>
      <SearchBar setCity={setCity} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
