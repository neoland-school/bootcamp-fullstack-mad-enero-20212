import React, { useState } from 'react';
/**
 * 1. Escuchar el submit del formulario. Cuando se produzca quiero hacer la petición
 * 2. Obtener los valores del formulario en formato FormData
 * 3. Hacer una petición fetch de tipo POST con los datos del punto 2
 * 4. Escuchar la respuesta y formatearla a JSON
 * 5. Escuchar el body y pintarlo en el HTML
 */

function Sentiment() {
    const [sentiment, updateSentiment] = useState('');

    // paso 1
    const handleSubmit = e => {
        e.preventDefault();
        // paso 2
        const data = new FormData(e.target); // genero un formData con el formulario que produce el evento
        // paso 3
        fetch('http://text-processing.com/api/sentiment/', {
            method: 'POST',
            body: data
        })
            .then(r => r.json()) // paso 4
            .then(s => updateSentiment(s.label)); // paso 5
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Analizar sentimiento</legend>
                    <label htmlFor="sentiment">Introduzca texto</label>
                    <textarea required name="text" id="sentiment" cols="30" rows="10"></textarea>
                    <button type="submit">Analizar</button>
                </fieldset>
            </form>
            <p>{sentiment}</p>
        </React.Fragment>
    )
}

export default Sentiment;