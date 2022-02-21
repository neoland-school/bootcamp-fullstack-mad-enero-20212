//2- Llamando a un API:  Hello world. Crear un componente que realice una llamada al JSON de paises(GET, https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json) y pinte la lista de países con la siguiente estructura (${name_es} ${dial_code})
// Añadir un input de tipo text antes de la lista. Cuando escriba en la lista, se debe ir filtrando y aparecer los países que su nombre en español contenga el texto del usuario.

import { useState, useEffect } from "react";


function FetchCountries() {
    let [countries, updateCountries] = useState(['']); // creamos la variable de paises que se irá actualizando
    let [countriesfilter,updatecountriesfilter] =useState(['']);
    useEffect(() => { // El 
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json') //Traera (es promesa) la info desde la URL 
            .then(r => r.json()) // Trae la info y la pasa a JSON
            .then(c => {
                updateCountries(c.countries)
                updatecountriesfilter(c.countries)

            }); //Guarda la info en countries
    }, []); // el array de dependencias me indica cuando debo ejecutar este useEffect

    const handleOnChange = e => { // escuchamos el cambio del input
        // necesito el nuevo value del input
        const newValue = e.target.value.toLowerCase();
        const newArray = countries.filter(a => a.name_es.toLowerCase().includes(newValue));
        updatecountriesfilter(newArray); // actualizar el state con el array filtrado del ARRAY original
    }

    return (
        <>
            <input type="text" onChange={handleOnChange}/>
            <ul>
                {
                    countriesfilter.map(c=> <li> {c.name_es} {c.dial_code}</li>)
                }
            </ul>
        </>  
    )
}


export default FetchCountries;