import React, { useEffect, useState } from "react";
import NavPokedex from "../navPokedex/navpokedex";
import PokeCard from "../pokeCard/pokecard";
import "./style.css";

function PokeList() {
  let [allPokemonInfo, updateAllPokemonInfo] = useState([]);
  let [filteredPokemon, updateFilteredPokemon] = useState([]);
  let [nextUrl, updateNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  let next;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    (next = () => {
      console.log("hola");
      async function fetchAllPokemon() {
        updateAllPokemonInfo([]); //no me está actualizando mi array a cero

        const r = await fetch(nextUrl);
        const allP = await r.json();
        updateNextUrl(allP.next);
        allP.results.forEach(async (pokemon) => {
          const r = await fetch(pokemon.url);
          const p = await r.json();
          const objPoke = {
            id: p.id,
            name: p.species.name,
            url: p.species.url,
            img: p.sprites.other.dream_world.front_default,
            numerOfTypes: p.types.lenngt,
            type: p.types,
          };
          allPokemonInfo.push(objPoke);
          updateAllPokemonInfo([...allPokemonInfo]);
          updateFilteredPokemon([...allPokemonInfo]);
        });
      }

      fetchAllPokemon();
      console.log(allPokemonInfo);
    }),
    []
  );

  const HandleFiltered = (e) => {
    const filteredPokemon = allPokemonInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    updateFilteredPokemon([...filteredPokemon]);
  };
  console.log(filteredPokemon);
  return (
    <React.Fragment>
      <NavPokedex HandleFiltered={HandleFiltered}></NavPokedex>
      <div className="button_container">
        <button className="button">PREV</button>
        <button className="button" onClick={next}>
          NEXT
        </button>
      </div>
      <div className="main_container">
        {filteredPokemon.map((pokemon, i) => {
          return <PokeCard key={i} pokemonInfo={pokemon}></PokeCard>;
        })}
      </div>
    </React.Fragment>
  );
}

export default PokeList;
