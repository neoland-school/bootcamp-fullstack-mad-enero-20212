/**
 * - Llamando a un API:  Hello world. Crear un componente que realice una llamada al JSON de paises
 *  y pinte la lista de países con la siguiente estructura (${name_es} ${dial_code})
 * Añadir un input de tipo text antes de la lista. Cuando escriba en la lista, se debe ir filtrando 
 * y aparecer los países que su nombre en español contenga el texto del usuario.
 * 
 * 1 Crea un fetch => Json
 * 2. pinta los paises con la estructura dada 
 * 3. Añadir input text antes de la lista
 * 4. Cuando se escriba en la lista, filtra los paises
 */

import React, { useEffect, useState } from "react";

function ApiWorld() {

    let [countries, updateContries] = useState([]); // countries original, updateContries es una () k peritira guardar y modificar
    let [filterCountries, updateArray] = useState([]); // creamos el useState 2 para guardar y modificar el filterCountries originalmente seria L17 countries

    const handleOnChange = e => {
        const newValue = e.target.value.toLowerCase()
        const newArr = countries.filter(c => c.name_es.toLowerCase().includes(newValue)) 
        updateArray(newArr)
    }


    useEffect(() => {  // 1 creamos el fetch sin el updateArray hasta'.then(x => updateContries(x.countries);' 
        // se quedaria asi...[] es pork usamos useEffect... es un array vacio.
          // fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    //         .then(r => r.json())
    //         .then(x => updateContries(x.countries), []);

        
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(r => r.json())
            .then(x => {    
                updateContries(x.countries)
                updateArray(x.countries);
                } )
    }, []);
// L47 onChange esta pendiente de cambios en su valor... lo k escribimos. yo lo crearia primero y su () seria el nombre de la () k capturara y modificara el filter mira L20
// L49 primero pasamos el updateContries .map guarda el nuevo array de objetos y asi podemos manipularlo


    return (
        <React.Fragment>
            <input onChange={handleOnChange} type="text" />
            <ul>
                {filterCountries.map((c,i) => <li key={i}>{c.name_es} {c.dial_code}</li>)} 
            </ul> 

        </React.Fragment>


    )
}
export default ApiWorld;