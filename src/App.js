import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { PokemonContextProvider } from "./contexto/pokemonContext";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="pokemon-cards"></div>
        <PokemonContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones/:keyword" element={<SearchResult />} />
            <Route path="/detalle/:id" element={<Detail />} />
          </Routes>
        </PokemonContextProvider>
      </div>
    </Router>
  );
}
export default App;
