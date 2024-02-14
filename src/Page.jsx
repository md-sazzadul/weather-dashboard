import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header></Header>
      <main>
        <section>
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
    </div>
  );
};

export default Page;
