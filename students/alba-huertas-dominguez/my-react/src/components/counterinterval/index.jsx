import react, { useEffect } from 'react';
import React, { useState } from 'react';

// 1. tengo que escribir cada segundo un p, por lo que necesito utilizar un setinterval,
// 2. lo que tiene que escribir es un numero que empiece en cero y se vaya añadiendo de 1 en 1, necesitamos un contador y un ++,
// 3. crear cada numero en un p y no eliminar el resto
// +. necesito utilizar un usestate porque se va cambiando
// + . neceisot utilizar un useEffect para que no este en bucle.React
// necesito un array vacio que guarde el contador y despues hacerle un map a el array

// el array vacio, ya que quiero que cambio, lo tengo que hacer con useState, en la funcion tengo que actualizar las dos update.CounterInterval
// por un lado le tengo que sumar ++ al contador, tengo que meter con un push al array vacio y ese array actualizarlo en su funcion.
// leugo con el useefect le meto el set interval y ahi lo que quiero hacer, es decir handler, y que se actualice cada vez que se actualiza mi array (counter).
// despues para pintar cada uno hacer un map a counter.





function CounterInterval() {
    let [contador,updatecontador] = useState (0)
    let [counter, updatecounter] = useState([])


    let handler = () => { 
        updatecontador(contador++)
      
        counter.push(contador)
        updatecounter(counter) 
        console.log(counter)

    }

    useEffect(() => {
     const intervalId = setInterval(handler, 2000)

     return() => {
     clearInterval(intervalId)
     }

    }, [counter]);
 
    

   
    return (
        <div>

       {counter.map((v,i) => <p key={i}>{v}</p>)}
       </div>
      



    )


}







export default CounterInterval