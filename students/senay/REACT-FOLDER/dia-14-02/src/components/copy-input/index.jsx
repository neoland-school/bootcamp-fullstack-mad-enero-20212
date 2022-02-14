//  Crea un componente que actualice en un p lo que el usuario vaya escribiendo en un input (onChan..)

import React, { useState } from "react";

function CopyInput() {
    const [title, updateTitle] = useState('');
    // useState con dos variables

    const createP = (c) => {
        let inputValue = c.target.value;
        updateTitle(inputValue);
    }
    // arrow con su nombre y valor local para recibir el valer del input.
    // updateTitle el segundo valor de useState llama a inputValue y se guarda en createP.

    return (
        <React.Fragment>
            <input onChange={createP} type="text" placeholder="Escriba algo" />
            <p>{title}</p>
        </React.Fragment>
        
    )
}
export default CopyInput;