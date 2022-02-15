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
    
    let [contries, updateContries] = useState([]);

    useEffect(() => {
    fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    .then(r => r.json())
    .then(c => updateContries(c.contries));
    
    }), []);

    

    return (
        <React.Fragment>
            
            <ol>
                <input type="text" />
                { contries.map(c => <li>{c.name_es}</li>)
            </ol>
            
        </React.Fragment>
        
    
    )
}
export default ApiWorld;