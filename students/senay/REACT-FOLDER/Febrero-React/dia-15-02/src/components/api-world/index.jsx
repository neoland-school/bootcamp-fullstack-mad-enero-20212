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

    let [countries, updateContries] = useState([]);
    let [filterCountries, updateArray] = useState([]);

    const handleOnChange = e => {
        const newValue = e.target.value.toLowerCase()
        const newArr = countries.filter(c => c.name_es.toLowerCase().includes(newValue))
        updateArray(newArr)
    }


    useEffect(() => {
        
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(r => r.json())
            .then(x => {    
                updateContries(x.countries)
                updateArray(x.countries);

                
            } )
    }, []);

    // useEffect(() => {
    //     fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    //         .then(r => r.json())
    //         .then(c => {
    //             updateContries(c.countries)
    //             updateArrat(c.countries)

    //             []), });

    return (
        <React.Fragment>
            <input onChange={handleOnChange} type="text" />
            <ul>
                {filterCountries.map((c,i) => <li key={i}>{c.name_es} {c.dial_code}</li>)}
                {/* <input type="text" name="apiInput" id="childInput"></input> */}
                {/* {contries.map(x => <li>{x.name_es}{x.dial_code}</li>)} */}
            </ul>

        </React.Fragment>


    )
}
export default ApiWorld;