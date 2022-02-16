/**
 * Crear un componente CharacterCard que reciba por props la información
 * necesario para pintar 1 card del personaje que se le pase por props
 *  *
 */
import React from "react";
import "./style.css";

function CharacterCard({ character }) {
  return (
    <React.Fragment>
      <section className="card_container">
        <img className="img" src={character.image} alt="" />
        <div className="character_container-info">
          <div className="character_name">
            <h2>{character.name}</h2>
            <div className="character_description">
              <div className={`life ${character.status.toLowerCase()}`}></div>
              <h4>{character.status} -</h4>
              <h4>{character.species}</h4>
            </div>
          </div>
          <div className="character_location">
            <p>Last Known location</p>
            <h3>{character.location.name}</h3>
          </div>
          <div>
            <p className="character_seen">First seen in:</p>
            <h3>{character.origin.name}</h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CharacterCard;
