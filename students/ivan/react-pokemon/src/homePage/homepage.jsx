import React, { useEffect, useState } from "react";
import Header from "../generalComponents/header/header";
import PokeCard from "./components/pokeCard/pokecard";
import "./style.css";

function HomePAge() {
  let [currentInfo, updateCurrentInfo] = useState({});
  let [allPokemonInfo, updateAllPokemonInfo] = useState([]);
  let [filteredPokemon, updateFilteredPokemon] = useState([]);
  let [nextUrl, updateNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [prevURL, updatePrevUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [isNext, updateIsNext] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("hola");
    async function fetchAllPokemon() {
      const r = await fetch(isNext === true ? nextUrl : prevURL);
      const allP = await r.json();
      updateCurrentInfo(allP);

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
        updateIsNext(false);

        console.log(isNext);
      });
    }

    fetchAllPokemon();
  }, [nextUrl, prevURL]);

  const HandleFiltered = (e) => {
    const filteredPokemon = allPokemonInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    updateFilteredPokemon([...filteredPokemon]);
  };

  const handleNextFilter = () => {
    updateAllPokemonInfo([]); //no me está actualizando mi array a cero
    updateIsNext(true);
    if (currentInfo.next) {
      updatePrevUrl(nextUrl);
      updateNextUrl(currentInfo.next);

      console.log(prevURL);
    } else {
      updateNextUrl("");
    }
  };

  const handlePrevFilter = () => {
    updateAllPokemonInfo([]); //no me está actualizando mi array a cero
    console.log(isNext);
    if (currentInfo.prev) {
      updateNextUrl(prevURL);
      updatePrevUrl(currentInfo.prev);
      console.log(currentInfo.next);
    }
  };

  return (
    <React.Fragment>
      <Header HandleFiltered={HandleFiltered}></Header>
      <div className="button_container">
        {prevURL !== "" ? (
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
