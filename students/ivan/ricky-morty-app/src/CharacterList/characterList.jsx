/**
 * Crear una app de react llamada ricky-morty-pedia
Crear un componente CharacterCard que reciba por props la información necesario para 
pintar 1 card del personaje que se le pase por props
Crear un componente CharacterList que se realice la llamada al API y pinte la lista
 de caracteres (los primeros 20). como se muestra en la imagen.

 *Añadir al componente CharacterList un input para filtrar por nombre la lista. 
 Además añadir 3 radio buttons  que nos permitirán filtrar por los caracteres vivos, muertos o todos.

*(Leyend) El API de caracteres solo te devuelve los primeros 20 caracteres en una llamada 
(a esto se le conoce como paginación). Añadir un botón al final de la lista (ver más) que 
cuando se pulse solicite los siguientes 20 caracteres y los añada a la lista. Cuando ya no 
queden más personajes (no haya mas páginas en el listado), el botón más deberá desaparecer.

 */

import React, { useEffect, useState } from "react";
import CharacterCard from "../characterCard/characterCard";
import "./style.css";

function CharacterList() {
  let [characters, updateCharacters] = useState([]);
  let [filteredCharacters, updateFilteredCharacters] = useState([]);
  let [secondFilteredCharacters, updateSecondFilteredCharacters] = useState([]);
  let [urlNextPage, updateUrlNextPage] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then((c) => {
        updateCharacters(c.results);
        updateFilteredCharacters(c.results);
        updateSecondFilteredCharacters(c.results);
        updateUrlNextPage(c.info.next);
        console.log(c);
      });
  }, []);
  const handleKeyUp = (e) => {
    const filtered = characters.filter((c) =>
      c.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    updateFilteredCharacters(filtered);
    updateSecondFilteredCharacters(filtered);
  };

  const handleAlive = () => {
    const secondFiltered = filteredCharacters.filter(
      (c) => c.status.toLowerCase() === "alive"
    );
    updateFilteredCharacters(secondFiltered);
    updateSecondFilteredCharacters(secondFiltered);
  };

  const handleDead = () => {
    const secondFiltered = filteredCharacters.filter(
      (c) => c.status.toLowerCase() === "dead"
    );
    updateFilteredCharacters(secondFiltered);

    updateSecondFilteredCharacters(secondFiltered);
  };

  const handleShowAll = () => {
    const secondFiltered = filteredCharacters.filter(
      (c) => c.status.toLowerCase() !== 0
    );
    updateFilteredCharacters(secondFiltered);

    updateSecondFilteredCharacters(secondFiltered);
  };

  const handleShowMoreCharacters = () => {
    fetch(urlNextPage)
      .then((r) => r.json())
      .then((c) => {
        c.results.map((o) => characters.push(o));
        console.log(characters);
        updateCharacters(characters);
        updateFilteredCharacters(characters);
        updateUrlNextPage(c.info.next);
        console.log(characters);
      });
  };

  return (
    <React.Fragment>
      <header className="header">
        <div className="header_img"></div>
        <h2 className="header_tittle">The Rick and Morty API</h2>
      </header>
      <div className="search_area">
        <input
          placeholder="Search Character"
          className="search_area-input"
          type="text"
          name="search"
          onKeyUp={handleKeyUp}
        />
        <div className="filtered_area">
          <button className="button" onClick={handleAlive}>
            Filter Alive Characters
          </button>
          <button className="button" onClick={handleDead}>
            Filter Dead Characters
          </button>
          <button className="button" onClick={handleShowAll}>
            Show All Characters
          </button>
        </div>
      </div>
      <div className="main__Container">
        {secondFilteredCharacters.map((c, i) => {
          return <CharacterCard key={i} character={c}></CharacterCard>;
        })}
      </div>
      <div className="show_next_page">
        <button className="button" onClick={handleShowMoreCharacters}>
          SHOW MORE CHARACTERS
        </button>
      </div>
    </React.Fragment>
  );
}

export default CharacterList;
