//3- API de sentimientos: Vamos a crear un componente que nos indique el sentimiento de una frase. Para ello debemos utilizar un API que dado un texto nos indique si es positivo, negativo o neutro. El API es el siguiente http://text-processing.com/docs/sentiment.html. Para poder llamar a este API necesitamos hacer un POST a la siguiente URL (http://text-processing.com/api/sentiment/). El body del post debemos pasar en el atributo text el valor del texto que queremos analizar. El formato del body es  x-www-form-urlencoded. La respuesta del API es un JSON con dos atributos (label que indica si el texto es pos, neg o neutral y probability un objeto con la probabilidad del resultado)


// Paso 1: escuchamos y recuperamos el valor del input
// Paso 2: cambiar los valores del formulario a form data
// paso 3: enviar el valor del input a la api (post)
// paso 4: Escuchar la respuesta y pasarla a JSON
// paso 5: mostrar la respuesta


import React from "react";
import { useState } from "react";




function Feelings(){
    let [respuesta, updateRespuesta]= useState('');

    const handleSubmit = e =>{ //la funcion que se encarga de escuchar el evento del form (el submit es del form)
        e.preventDefault(); // para que no se actualice la página con el submit
        let texto= new FormData(e.target) //coge los datos del evento(submit) con el e.target
        fetch('http://text-processing.com/api/sentiment/',{ // el fetch, trae/envia info a la API en forma de promesa
            method: 'POST',
            body: texto
        })
        .then(r => r.json()) //lo que nos devuelve la API lo pasamos a JSON
        .then(i => updateRespuesta(i.label)); //esto nos devuelve el bueno medio y neutro que esta escito en la propiedad label
    }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Analiza el sentimiento de tu frase</legend>
                    <label htmlFor="sentiment">Introducir texto</label> {/*es la etiqueta para el text area con id sentiment*/}
                    <textarea required name="text" id="sentiment"></textarea>
                    <button type="submit">Analiza</button>
                </fieldset>
            </form>
            <p>el sentimiento es: {respuesta}</p>
        </React.Fragment>
    )
}

export default Feelings;