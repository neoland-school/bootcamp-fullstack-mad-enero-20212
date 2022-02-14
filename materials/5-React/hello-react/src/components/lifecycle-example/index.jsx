import './style.css';
import React, { useState } from 'react'; // importamos solo la propiedad useState de todo el objeto React

/**
 * 1. Como reaccionar a los eventos del usuario? ==> onClick
 * 2. Diferentes fases del ciclo de vida de un componente
 * 3. El estado interno de un componente
 * 
 */

function LifeCycleExample() {
    console.log('Llamo a la función del componente LifeCycleExample');
    /* 
        Para crear una variable que pertenezca al estado interno, 
        debemos usar una función que se llama useState para generarla
        typeOf useState === 'function'
        - useState sirve para crear una propiedad/variable en el estado del componente.
        - el estado interno es un objeto.
        - useState acepta un parámetro de entrada, que es el valor inicial de esa propiedad/variable que va a generar
        - devuelve un parámetro de salida:
            * Es un array de 2 dimensiones.
                arr[0] === valor actual de la propiedad/variable del esta interno
                arr[1] === una funcion que se utiliza para actualizar esa variable del estado interno y 
                           y ASI PRODUCIR UN CICLO DE ACTUALIZACION DEL COMPONENTE

    */
    let [counter, updateCounter] = useState(1);

    const handleClick = () => {
        updateCounter(++counter); // uso la función de actualización para cambia el valor y refrescar el componente
        console.log('Se ha pulsado el click ', counter);
    }

    return (
        <React.Fragment>
            <p>{counter}</p>
            {/* <button onClick={() => updateCounter(++counter)}>+</button> */}
            <button onClick={handleClick}>+</button>
        </React.Fragment>
    )
}


export default LifeCycleExample;