/**
 * Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número empezará
 * en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's de los anteriores
 * segundos no se eliminan).
 *Crear un componente padre CounterContainer que tenga un checkbox y un componente counter interval.
 *Si el checkbox está checked, se renderizará el componente CounterInterval. Si el checkbox
 *no está checked el Counter Interval  desaparecerá. Hint: No os olvidéis de eliminar los residuos
 *de vuestro componente cuando se elimina del DOM
 */

import { useEffect, useState } from "react";

function CounterInterval({ startInterval }) {
  let [arrValues, updatearrValues] = useState([]);
  let [counter, updateCounter] = useState(0);

  useEffect(() => {
    let intervalId;
    if (startInterval) {
      intervalId = setInterval(() => {
        arrValues.push(counter);
        updatearrValues(arrValues);
        counter += 1;
        updateCounter(counter);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      clearInterval(intervalId);
      console.log("estoy en el else");
      updatearrValues([]);
      updateCounter(0);
    }
  }, [startInterval]);

  return (
    <div>
      {arrValues.map((number, i) => (
        <p key={i}>{number}</p>
      ))}
    </div>
  );
}

export default CounterInterval;
