import React, { useEffect, useState } from "react";
import Header from "../generalComponents/header/header";
import PokeCard from "./components/pokeCard/pokecard";
import "./style.css";

function HomePAge() {
  let [allPokemonInfo, updateAllPokemonInfo] = useState([]);
  let [filteredPokemon, updateFilteredPokemon] = useState([]);
  let [nextUrl, updateNextUrl] = useState("");
  let [url, updateUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [prevUrl, updatePrevUrl] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("hola");
    async function fetchAllPokemon() {
      const r = await fetch(url);
      const allP = await r.json();
      updateNextUrl(allP.next != null ? allP.next : "");
      updatePrevUrl(allP.previous != null ? allP.previous : "");

      allP.results.forEach(async (pokemon) => {
        const r = await fetch(pokemon.url);
        const p = await r.json();
        console.log(p);
        const objPoke = {
          id: p.id,
          name: p.species.name,
          url: p.species.url,
          img1: p.sprites.other.dream_world.front_default,
          img2: p.sprites.other["official-artwork"].front_default,
          numerOfTypes: p.types.lenngt,
          type: p.types,
          forms: p.forms,
          height: p.height,
          moves: p.moves,
          weight: p.weight,
          stats: p.stats,
          ability: p.abilities[0].ability.name,
        };
        allPokemonInfo.push(objPoke);
        updateAllPokemonInfo([...allPokemonInfo]);
        updateFilteredPokemon([...allPokemonInfo]);
        console.log(allPokemonInfo.ability);
      });
    }

    fetchAllPokemon();
  }, [url]);

  const HandleFiltered = (e) => {
    const filteredPokemon = allPokemonInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    updateFilteredPokemon([...filteredPokemon]);
  };

  const handleNextFilter = () => {
    updateAllPokemonInfo([]); //no me está actualizando mi array a cero
    updateUrl(nextUrl);
    console.log(url);
  };

  const handlePrevFilter = () => {
    updateAllPokemonInfo([]); //no me está actualizando mi array a cero
    updateUrl(prevUrl);
  };

  return (
    <React.Fragment>
      <Header HandleFiltered={HandleFiltered}></Header>
      <section className="search_area">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search Pokemon"
          onKeyUp={HandleFiltered}
        />
      </section>
      <div className="button_container">
        {prevUrl !== "" ? (
          <button className="button" onClick={handlePrevFilter}>
            PREV
          </button>
        ) : (
          <p></p>
        )}
        {nextUrl !== "" ? (
          <button className="button" onClick={handleNextFilter}>
            NEXT
          </button>
        ) : (
          <p></p>
        )}
      </div>
      <div className="main_container">
        {filteredPokemon.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemonInfo={pokemon}></PokeCard>;
        })}
      </div>
    </React.Fragment>
  );
}

export default HomePAge;
