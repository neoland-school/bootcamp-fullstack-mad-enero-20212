/**
 *
 * 2- Llamando a un API:  Hello world. Crear un componente que realice una llamada al JSON de paises
 * (GET, https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json)
 *  y pinte la lista de países con la siguiente estructura (${name_es} ${dial_code})
 *Añadir un input de tipo text antes de la lista. Cuando escriba en la lista, se debe ir filtrando
 *y aparecer los países que su nombre en español contenga el texto del usuario.
 */

import React, { useEffect, useState } from "react";

function DrawCountryList() {
  // el useEffect sirve para ejecutar el código que quiero elegir en que fase del ciclo de vida
  // del componente se ejecuta
  useEffect(() => {
    // este código solo se ejecuta en los refrescos (updates) que YO como desarrollador indique
    fetch(
      "https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json"
    )
      .then((r) => r.json())
      .then((c) => {
        updateCountries(c.countries);
        updateFilteredCountries(c.countries);
      });
  }, []);
  let [countries, updateCountries] = useState([]);
  let [filteredCountries, updateFilteredCountries] = useState([]);

  const handleOnchange = (e) => {
    const filter = countries.filter((c) =>
      c.name_es.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    updateFilteredCountries(filter);
  };

  return (
    <React.Fragment>
      <input onChange={handleOnchange} type="text" />
      <ul>
        {filteredCountries.map((c, i) => (
          <li key={i}>
            {c.name_es} {c.dial_code}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default DrawCountryList;
