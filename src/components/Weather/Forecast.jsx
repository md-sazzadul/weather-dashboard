import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

const Forecast = () => {
  const { forecastData } = useContext(WeatherContext);

  return (
    <div className="container mt-8">
      <h2 className="text-xl font-bold mb-4">Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-lg font-semibold">
              {getFormattedDate(day.dt, "date", false)}
            </p>
            <p className="text-sm">{day.weather[0].description}</p>
            <p className="text-lg font-semibold">
              {Math.round(day.main.temp)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
