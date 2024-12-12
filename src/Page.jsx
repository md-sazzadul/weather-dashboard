import React, { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Forecast from "./components/Weather/Forecast";
import { WeatherContext } from "./context";
const Header = React.lazy(() => import("./components/Header/Header"));
const Spinner = React.lazy(() => import("./components/Spinner"));
const WeatherBoard = React.lazy(() =>
  import("./components/Weather/WeatherBoard")
);

const Page = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return SunnyImage;
    }
  }

  useEffect(() => {
    const img = new Image();
    img.src = getBackgroundImage(weatherData.climate);
    img.onload = () => setClimateImage(img.src);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-full p-8 mt-14 mx-auto">
          {" "}
          <Spinner />{" "}
        </div>
      ) : error ? (
        <div className="flex bg-red-200 rounded-md w-full p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-red-500">{error.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main className="flex flex-col items-center w-full">
            <section className="w-full max-w-6xl p-4">
              <WeatherBoard />
              <Forecast />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default React.memo(Page);
