//1- Hello Comunicación hijo-padre: Crear dos componentes:
// Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
// Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.

import React, { useState } from "react";


function Hijo({ sendInputValue = () => { } }) { // El hijo debe definir una prop de tipo función (sendInputValue), como si fuese un evento.
    const handler = e => {
        sendInputValue(e.target.value)
    }
    return (
            <input type="text" onKeyUp={handler}/>  
            //Esta función será llamada (handler llama a la funcion y nosotros llamamos a handler) cuando se necesite producir el evento por parte del hijo es decir, cuando el hijo quiera avisar al padre.
    )
}
export default Hijo;