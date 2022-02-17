import "./style.css";

function PokeCard({ pokemonInfo }) {
  console.log(pokemonInfo.type);

  let typesNames = [];
  console.log(typesNames);
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
            {pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.substring(1)}
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
  );
}

export default PokeCard;
