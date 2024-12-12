import React from "react";
import Spinner from "./components/Spinner";
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
          <React.Suspense fallback={<Spinner />}>
            <Page />
          </React.Suspense>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default React.memo(App);
