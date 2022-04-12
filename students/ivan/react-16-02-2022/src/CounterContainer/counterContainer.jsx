/**
 * Crear un componente padre CounterContainer que tenga un
 * checkbox y un componente counter interval.
 *
 * 1. creo un evento onChange en el input
 * 2. defino una variable de estado de tipo bolean que me indica si el checkbox está
 * on o off.
 * 3. Defino mi función handle para el evento.
 *  3.1 Esta función actualiza el valor del check al contrario y
 *      actualiza el estado de la variable global.
 * 4. PAso por prop el valor de mi variable de estado de tipo bolean a mi
 *  componente CounterInterval.
 * 5. En mi componente counter interval defino un useState.
 *  Dentro de este useState entro con un if, si el valor del boleano es
 * true ejecuto el intervalo.
 * Sino, lo paro y actualizo las variables de estado (array y number a 0).
 *
 * Defino que el useEffect se lance cada vez que cambia el valor del boleano
 *
 *
 *
 */

import React, { useState } from "react";
import CounterInterval from "../counterInterval/counterInterval";

function CounterContainer() {
  let [isChecked, updateIsChecked] = useState(false);
  const handleChangeStatus = () => {
    isChecked = !isChecked;
    updateIsChecked(isChecked);
  };

  return (
    <React.Fragment>
      <label htmlFor="check">Marca para pintar numeros</label>
      <input
        onChange={handleChangeStatus}
        type="checkbox"
        name="check"
        id="check"
      />
      <CounterInterval startInterval={isChecked}></CounterInterval>
    </React.Fragment>
  );
}

export default CounterContainer;
