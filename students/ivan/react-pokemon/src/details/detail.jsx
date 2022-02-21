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

  return (
    <React.Fragment>
      <Header></Header>
      <div className="main__container">
        <div className="pokedex_pokemon">
          <section className="pokemon">
            <div className="pokemon_status">
              <p>{pokemon.state.stats[0].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[0].base_stat}</p>
            </div>
            <div className="pokemon_status">
              <p>{pokemon.state.stats[1].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[1].base_stat}</p>
            </div>
            <div className="pokemon_status">
              <p>{pokemon.state.stats[2].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[2].base_stat}</p>
            </div>
            <div className="pokemon_status">
              <p>{pokemon.state.stats[3].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[3].base_stat}</p>
            </div>
            <div className="pokemon_status">
              <p>{pokemon.state.stats[4].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[4].base_stat}</p>
            </div>
            <div className="pokemon_status">
              <p>{pokemon.state.stats[5].stat.name.toUpperCase()}</p>

              <p>{pokemon.state.stats[5].base_stat}</p>
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
            <div className="pokemon-height">
              <p>HEIGHT</p>

              <p>{`${pokemon.state.height / 10} m`}</p>
            </div>
            <div className="pokemon-weight">
              <p>{`${pokemon.state.weight / 10} m`}</p>
            </div>
            <div className="pokemon-ability">
              <p>ABILITY</p>
              <p>
                {pokemon.state.ability[0].toUpperCase() +
                  pokemon.state.ability.substring(1)}
              </p>
            </div>
            <div className="pokemon-height">
              {typesNames.map((type, i) => (
                <p key={i} className={`type ${type}`}>
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
        <section className="pokemon_moves">
          <div>
            <p>ataque</p>
            <p>nivel</p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Details;
