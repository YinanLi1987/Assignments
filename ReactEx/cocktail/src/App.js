import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Recommend from "./pages/Recomend";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  );
}

export default App;
