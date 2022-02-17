
/**
 * 3- API de sentimientos: Vamos a crear un componente que nos indique el sentimiento
 *  de una frase. Para ello debemos utilizar un API que dado un texto nos indique si
 * es positivo, negativo o neutro. El API es el siguiente
 *  http://text-processing.com/docs/sentiment.html. Para poder llamar a este API
 * necesitamos hacer un POST a la siguiente URL
 *  (http://text-processing.com/api/sentiment/). El body del post debemos
 *  pasar en el atributo text el valor del texto que queremos analizar.
 * El formato del body es  x-www-form-urlencoded. La respuesta del API
 * es un JSON con dos atributos (label que indica si el texto es pos, neg o
 * neutral y probability un objeto con la probabilidad del resultado)
 */import { useState } from 'react';
import '../sentimientos/style.css'


   
    

function Sentimientos(){

    

    let [valor, uploadValor] = useState('')

    const ExtraerValor = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data)
        
        fetch('http://text-processing.com/api/sentiment/',{
          method: 'POST',
          body: data,
        }).then(r => r.json()).then(e => uploadValor(e.label))

    }

    return (

    <form className="container_form" id='form' onSubmit={ExtraerValor}>
        <h5 className='title_outside'>Analyze Sentiment</h5>
        <div className="container_input">
            <p className='title'>Enter text</p>
            <textarea required name='text'></textarea>
        </div>
        <button type="submit" className='bottom'>Analyze</button>
        <p>{valor}</p>
    </form>
    
    
    
    )
}

export default Sentimientos;