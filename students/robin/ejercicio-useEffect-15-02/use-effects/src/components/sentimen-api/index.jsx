import React, { useState } from "react"
import './style.css'
/** 
 * 1. Escuchar el submit del formulario. Cuando se produzca quiero hacer la peticion.
 * 2. Obtener los valores del formulario en formato FormData
 * 3. Hacer una peticion fetch de tipo POST con los datos del punto 2
 * 4. Escuchar la respuesta y formatear a JSON
 * 5. Escuchar el body y pintarlo en el HTML
*/





function Sentiment() {
    
    // Paso 1
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target) // genero un formData con el formulario que produce el evento   

        fetch('http://text-processing.com/api/sentiment/', {
            method: 'POST',
            body: data,
        })
            .then(r => r.json())
            .then(s => updateSentiment(s.label))
    }

    const [sentiment, updateSentiment] = useState('')


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Analizar sentimiento</legend>
                    <label htmlFor="sentiment">Introduzca texto</label>
                    <textarea name="text" id="sentiment" cols='30' rows='10' required></textarea>
                    <button type="submit">Analizar</button>
                </fieldset>
            </form>
            <p>{sentiment}</p>
        </React.Fragment>
    )
}

export default Sentiment