import React, { useState } from "react";

/**
 * 1 crea la () y su html
 * 2 crea una () k manejara/escuchara el button
 * 3 descarga url con fetch copiando de la pagina dada, pero antes lea y entiendela
 * 
 * 
 */


function Sentiment() {
    // let [fetchy, updateFetchy] = useState();
    // console.log(fetchy)
    // useEffect(() => {
    //     // const postRequest = {
    //     //     method: POST
    //     // }
    
    //     fetch('http://text-processing.com/api/sentiment')
    //     .then(r => r.json())
    //     .then(data = data.fetchy)

    // })

    const [sentiment, updateSentiment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = new FormData(e.target);

        fetch('http://text-processing.com/api/sentiment/', {
            method: 'POST',
            body: data
        })
            .then(r => r.json())
            .then(s => updateSentiment(s.label));
    }

    return (
            <React.Fragment>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Analize Sentiment</legend>
                    <label htmlFor="sentiment">Introduzca texto</label>
                    <textarea required name="text" id="sentiment" cols="30" rows="10"></textarea>
                    <button type="submit">Analyze</button>
                </fieldset>
            </form>
            <p>{sentiment}</p>
            </React.Fragment>
    )
}
export default Sentiment;