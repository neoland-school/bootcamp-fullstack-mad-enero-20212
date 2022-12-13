import { useState } from "react";

export function usePokemon({ id }) {
  const [pokemon, updatePokemon] = useState({});

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((r) => r.json())
    .then((pokemon) => updatePokemon(pokemon));

  return pokemon;
}
