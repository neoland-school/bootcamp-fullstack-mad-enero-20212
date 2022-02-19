import { useLocation } from "react-router-dom";
import "./style.css";

function Details() {
  let pokemon = useLocation();
  console.log(pokemon.pathname);
  console.log(pokemon.state);

  return (
    <img
      src={pokemon.state.img}
      alt={`Esta es la imagen del pokemon ${pokemon.state.name}`}
    />
  );
}

export default Details;
