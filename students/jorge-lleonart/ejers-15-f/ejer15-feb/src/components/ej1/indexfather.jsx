//1- Hello Comunicación hijo-padre: Crear dos componentes:
// Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
// Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.

import Son from "./indexson";
import { useState } from "react";
import React from "react";


function Father(){
    let [text, sendInputValue]=useState('')
    let handler= e => {  //El padre define la función handler que le pasará al hijo.
        sendInputValue(e)
    }
    return(
    <React.Fragment>
        <Son sendInputValue={handler}></Son>
        <p>parrafo padre{text} </p>
    </React.Fragment>
    )
}
export default Father;