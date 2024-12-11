import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, forecastData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider
      value={{ weatherData, forecastData, error, loading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
