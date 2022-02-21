// el metodo post es para mandar informacion a la pagina.

import { useState } from "react";

/**
 * 
 * 1. escuchar el submit del formulario cuando se produzca quiero hacer la peticion.
 * 2. otener los valores del fomulario en formato FORMDATA.
 * 3. hacer la peticion fetch de tipo POST con los datos del punto 2
 * 4. escuchar la respuesta y formatearla a JSON.
 * 5. ESCUDHAR EL BODY y pintarlo en HTML.
 
 */

function Sentiment(){
const[sentiment,updatesentiment] = useState('');
    //paso 1.
    const handler = e => {
        e.preventDefault();

    const data = new FormData(e.target);
    fetch('http://text-processing.com/api/sentiment/',{
    method: 'POST',
    body: data

})
.then( r => r.json())
.then(s => updatesentiment(s.label));
    }
    return(

        <form onSubmit={handler}>
            <fieldset>
                <legend>Analizar Sentimientos</legend>
                <label htmlFor="sentiment">Introduzaca texto</label>
                <textarea required  name="text" id="sentiment" cols="30" rows= "30"></textarea>
                <button type='submit'>Analizar</button>
                <p>{sentiment}</p>





            </fieldset>




        </form>
        
        )

}

export default Sentiment