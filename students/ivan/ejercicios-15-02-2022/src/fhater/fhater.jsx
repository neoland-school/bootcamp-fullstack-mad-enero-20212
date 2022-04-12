/**
 *  * 1- Hello Comunicación hijo-padre: Crear dos componentes:
Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.
 */

import React, { useState } from "react";
import Child from "../child/child";

function Fhater() {
  let [input, updateInput] = useState("");

  const handleOnchange = (e) => {
    const newValue = e.target.value;
    updateInput(newValue);
  };
  return (
    <React.Fragment>
      <Child onChange={handleOnchange}></Child>
      <p>{input}</p>
    </React.Fragment>
  );
}

export default Fhater;
