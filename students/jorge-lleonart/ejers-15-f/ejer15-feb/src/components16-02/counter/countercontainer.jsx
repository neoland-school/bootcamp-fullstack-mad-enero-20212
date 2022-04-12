// 2- UseEffect.
// - Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número empezará en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's de los anteriores segundos no se eliminan).
// - Crear un componente padre CounterContainer que tenga un checkbox y un componente counter interval.
// - Si el checkbox está checked, se renderizará el componente CounterInterval. Si el checkbox no está checked el Counter Interval  desaparecerá. Hint: No os olvidéis de eliminar los residuos de vuestro componente cuando se elimina del DOM.

import { useState } from "react";
import Write from "./conuterinterval";

// tenemos que escuchar el check del imput

function CheckBox(){
    let [status, updateStatus] = useState(false)
    let handler = () =>{
        if(status===false){
            updateStatus(true)
        }else {
            updateStatus(false)
        }
    }
    return(
        <>
            <input name="state" type="checkbox" onClick={handler}></input>
            {status?<Write></Write>:''}            
        </>
    )
}

export default CheckBox;