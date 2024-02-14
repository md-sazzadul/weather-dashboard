import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { FavouriteProvider, WeatherProvider } from "./provider";

function App() {
  return (
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
  );
}

export default App;
