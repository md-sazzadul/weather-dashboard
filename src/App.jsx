import React from "react";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";
const Page = React.lazy(() => import("./Page"));

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page></Page>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default React.memo(App);
