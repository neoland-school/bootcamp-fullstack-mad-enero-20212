import React from "react";

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
    const handleSubmit = e => {
        e.preventDefault();
        

        fetch('http://text-processing.com/api/sentiment/', {
            method: 'POST',
            body: data
        })
        console.log(handleSubmit);
    }

    return (
            <React.Fragment>
            <form>
                <fieldset>
                    <legend>Analize Sentiment</legend>
                    <label htmlFor="sentiment"></label>
                    <textarea name="" id="sentiment" cols="30" rows="10"></textarea>
                    <button type="submit">Analyze</button>
                </fieldset>
            </form>
            </React.Fragment>
    )
}
export default Sentiment;