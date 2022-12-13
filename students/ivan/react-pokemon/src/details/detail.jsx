import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../generalComponents/header/header";
import "./style.css";

function Details() {
  let pokemon = useLocation();
  console.log(pokemon.pathname);
  console.log(pokemon.state);

  let typesNames = [];
  pokemon.state.type.forEach((t) => {
    typesNames.push(t.type.name);
  });
  const drawNumber = () => {
    let ceros = "";

    if (pokemon.state.id < 10) {
      ceros = "00";
    } else if (pokemon.state.id >= 10 && pokemon.state.id < 100) {
      ceros = "0";
    }
    return ceros;
  };

  return (
    <React.Fragment>
      <Header></Header>
      <div className="main__container">
        <div className="pokemon_name">
          <h4 className="poke-id">{`# ${drawNumber()}${pokemon.state.id}`}</h4>
          <h2 className="name">
            {pokemon.state.name[0].toUpperCase() +
              pokemon.state.name.substring(1)}
          </h2>
        </div>
        <div className="pokedex_pokemon">
          <section className="pokemon">
            <h2 className="status">POKEMON STAUS </h2>
            <div className="pokemon_status">
              <p className="status-name">
                {`${pokemon.state.stats[0].stat.name.toUpperCase()}:`}
              </p>

              <p className="status-value ">
                {pokemon.state.stats[0].base_stat}
              </p>
            </div>
            <div className="pokemon_status">
              <p className="status-name">{`${pokemon.state.stats[1].stat.name.toUpperCase()}:`}</p>

              <p className="status-value ">
                {pokemon.state.stats[1].base_stat}
              </p>
            </div>
            <div className="pokemon_status">
              <p className="status-name ">{`${pokemon.state.stats[2].stat.name.toUpperCase()}:`}</p>

              <p className="status-value ">
                {pokemon.state.stats[2].base_stat}
              </p>
            </div>
            <div className="pokemon_status">
              <p className="status-name">{`${pokemon.state.stats[3].stat.name.toUpperCase()}:`}</p>

              <p className="status-value ">
                {pokemon.state.stats[3].base_stat}
              </p>
            </div>
            <div className="pokemon_status">
              <p className="status-name">{`${pokemon.state.stats[4].stat.name.toUpperCase()}:`}</p>

              <p className="status-value ">
                {pokemon.state.stats[4].base_stat}
              </p>
            </div>
            <div className="pokemon_status">
              <p className="status-name">{`${pokemon.state.stats[5].stat.name.toUpperCase()}:`}</p>

              <p className="status-value ">
                {pokemon.state.stats[5].base_stat}
              </p>
            </div>
          </section>
          <article className="images">
            <div className="background_image"></div>
            <img
              className="pokemon-image"
              src={pokemon.state.img2}
              alt={`Esta es la imagen del pokemon ${pokemon.state.name}`}
            />
          </article>
          <div className="pokemon__info">
            <div className="pokemon__info-container">
              <div className="pokemon_properties">
                <p className="status-name">HEIGHT:</p>

                <p>{`${pokemon.state.height / 10} m`}</p>
              </div>
              <div className="pokemon_properties">
                <p className="status-name">WEIGHT:</p>

                <p>{`${pokemon.state.weight / 10} kg`}</p>
              </div>
              <div className="pokemon_properties">
                <p className="status-name">ABILITY:</p>
                <p>
                  {pokemon.state.ability[0].toUpperCase() +
                    pokemon.state.ability.substring(1)}
                </p>
              </div>
              <div className="flex_row">
                {typesNames.map((type, i) => (
                  <p key={i} className={`type ${type}`}>
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section className="pokemon_moves">
          <div></div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Details;
