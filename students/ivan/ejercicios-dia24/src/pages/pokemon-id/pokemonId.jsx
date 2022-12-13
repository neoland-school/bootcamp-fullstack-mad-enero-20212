import { usePokemon } from "../../hooks/pokemonHook/usepokemon";

function PokemonId({ id }) {
  const pokemon = usePokemon({ id });

  return <img src={pokemon.sprites?.front_default} alt="Imagen" />;
}

export default PokemonId;
