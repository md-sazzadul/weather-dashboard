import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    description: "",
    temperature: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...",
      });

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!weatherResponse.ok) {
        const errorMessage = `Fetching weather data failed: ${weatherResponse.status}`;
        throw new Error(errorMessage);
      }

      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!forecastResponse.ok) {
        const errorMessage = `Fetching forecast data failed: ${forecastResponse.status}`;
        throw new Error(errorMessage);
      }

      const forecastData = await forecastResponse.json();

      setWeatherData({
        location: weatherData.name,
        climate: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        temperature: weatherData.main.temp,
        maxTemp: weatherData.main.temp_max,
        minTemp: weatherData.main.temp_min,
        humidity: weatherData.main.humidity,
        cloudPercentage: weatherData.clouds.all,
        wind: weatherData.wind.speed,
        time: weatherData.dt,
        longitude,
        latitude,
      });

      const dailyForecasts = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecastData(dailyForecasts);
    } catch (error) {
      setError({ message: error.message });
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weatherData, forecastData, error, loading };
};

export default useWeather;
