import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header></Header>
            <main>
              <section>
                <WeatherBoard></WeatherBoard>
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
