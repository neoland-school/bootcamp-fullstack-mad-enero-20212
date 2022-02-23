import React, { useState } from 'react';
import './style.css'

/**
 * 1 escuchar el submit del formulario, cuando se produzca quiero hacer la peticion
 * 2 obtener los valores del formulario en formato FormData
 * 3 hacer una peticion fetch de tipo post con los datos del punto 2
 * 4 escuchar la respuesta y formatearla a Json 
 * 5 escuchar el body y pintarlo en html
 * 
 */
function FielingsApi() {
    const [sentiment, setSentiment] = useState('');

    const handlerSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch('http://text-processing.com/api/sentiment/', {
            method: 'POST',
            body: data
        })
        .then(r => r.json())
        .then(s => setSentiment(s.label));
    }


    return (
        <React.Fragment>
            <form onSubmit={handlerSubmit}>
                <fieldset>
                    <legend>Analise Sentiment</legend>
                    <label htmlFor="sentiment">Intro texto</label>
                    <textarea required name="text" id="sentiment" cols="30" rows="10"></textarea>
                    <button type="submit">analizar</button>
                </fieldset>
            </form>
            <p>{sentiment}</p>
        </React.Fragment>
    );
}

export default FielingsApi;