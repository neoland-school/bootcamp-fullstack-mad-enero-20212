import React from "react";
import { Link } from "react-router-dom";
import Details from "../../../details/detail";
import "./style.css";

function PokeCard({ pokemonInfo }) {
  let typesNames = [];
  pokemonInfo.type.forEach((t) => {
    typesNames.push(t.type.name);
  });

  const drawNumber = () => {
    let ceros = "";

    if (pokemonInfo.id < 10) {
      ceros = "00";
    } else if (pokemonInfo.id >= 10 && pokemonInfo.id < 100) {
      ceros = "0";
    }
    return ceros;
  };

  return (
    <Link
      className="linkcard"
      to={`/details/${pokemonInfo.id}`}
      state={pokemonInfo}
    >
      <div className="card_container">
        <div className="image_container">
          <img className="imgage" src={pokemonInfo.img} alt="" />
        </div>
        <div className="pokemon_info">
          <div>
            <h4 className="pokemon_id">
              Nº {`${drawNumber()}${pokemonInfo.id}`}
            </h4>
            <h3>
              {pokemonInfo.name[0].toUpperCase() +
                pokemonInfo.name.substring(1)}
            </h3>
          </div>
          <div className="pokemon_type">
            {typesNames.map((type, i) => (
              <p key={i} className={`type ${type}`}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PokeCard;
