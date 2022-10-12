import CocktailOfTheDay from "./components/CocktailOfTheDay";
import SearchByName from "./components/SearchByName";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SearchByName />
      <CocktailOfTheDay />;
    </>
  );
}

export default App;
