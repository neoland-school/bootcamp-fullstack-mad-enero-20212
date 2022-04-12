// 2- UseEffect.
// - Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número empezará en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's de los anteriores segundos no se eliminan).
// - Crear un componente padre CounterContainer que tenga un checkbox y un componente counter interval.
// - Si el checkbox está checked, se renderizará el componente CounterInterval. Si el checkbox no está checked el Counter Interval  desaparecerá. Hint: No os olvidéis de eliminar los residuos de vuestro componente cuando se elimina del DOM.

import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";

// 1- crear una funcion que escriba un p
// 2- llamarla en un interval cada un segundo

function Write(prop) { //funcion que pinta el p
    let [number, updateNumber] = useState(0) //esto será el contador
    let [counter, update] = useState([0])  //es el array que pintaremos

    let handler = () => { //es la funcion que actualiza el contador y el array
        updateNumber(number++)
        counter.push(number)
        update(counter)
    }
    useEffect(() => {
        const intervalId= setInterval(handler, 1000)
        return() => {
            clearInterval(intervalId)
        }

    }, [counter])

    return (
        <>
            {counter.map((v, i) => <p key={i}>{v}</p>)}
        </>
    )
}

export default Write;


