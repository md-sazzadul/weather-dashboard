import React, { useContext } from "react";
import CloudIcon from "../../assets/icons/cloud.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import MaxTempIcon from "../../assets/icons/temp-max.svg";
import MinTempIcon from "../../assets/icons/temp-min.svg";
import WindIcon from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context";

const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  const { maxTemp, minTemp, humidity, cloudPercentage, wind, description } =
    weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        {description}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemp)}°</p>
            <img src={MaxTempIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemp)}°</p>
            <img src={MinTempIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={HumidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={CloudIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(WeatherCondition);
