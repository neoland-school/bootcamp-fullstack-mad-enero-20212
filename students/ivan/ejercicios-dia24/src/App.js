import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import PokemonId from "./pages/pokemon-id/pokemonId";
import MyMultilanguagePage from "./pages/multilanguage/multilanguage";
import HomeBootstrap from "./pages/home-bootstrap/home";

function App() {
  return (
    <React.Fragment>
      {/* <PokemonId id={26}></PokemonId> */}
      {/* <MyMultilanguagePage></MyMultilanguagePage> */}
      <HomeBootstrap />
    </React.Fragment>
  );
}

export default App;
