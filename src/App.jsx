import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
    </>
  );
}

export default App;
