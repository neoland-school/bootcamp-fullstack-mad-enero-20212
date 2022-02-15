
// // compontente hijo, tiene que tener:
//  input que coja el valor 
//  cuando se escriba en el input tiene que pasar el valor al padre

import React, { useState } from "react"
import react from "react";



function Child() {
    let [change, updatechange] = useState('');
  const handler = e => {
        updatechange(e.target.value);

    }


    return (

        <React.Fragment>
            <input type="text" onChange={handler}></input>
            <p>texto input{change}</p>
        </React.Fragment>
    )


}

export default Child