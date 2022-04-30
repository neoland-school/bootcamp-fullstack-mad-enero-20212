
// // compontente hijo, tiene que tener:
//  input que coja el valor 
//  cuando se escriba en el input tiene que pasar el valor al padre


// en esta parte tenemos que crear una funcion (hanleron) que haga de prons para que pueda pasarle los parametros al padre. 
//luego hacer la funcion normal y actualizar esa funcion 
// luego en el evento poner la funcion del handler

import React, { useState } from "react"
import react from "react";



function Child( { handlerOn =() =>{} }) {

  const handler = e => {
      handlerOn(e.target.value)
       

    }
 

    return (

        <React.Fragment>
            <input type="text" onChange={handler}></input>
        </React.Fragment>
    )


}

export default Child