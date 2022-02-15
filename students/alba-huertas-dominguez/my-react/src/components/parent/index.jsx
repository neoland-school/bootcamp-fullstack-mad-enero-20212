import React, { useState } from "react"
import react from "react";
import Child from "../child";




// componente padre que debe llevar:
// componente hijo
// debajo de este un <p></p>
// el p pintar lo que escriba el input hijo
// // constuir otra funcion handler un parametro y la funcion al mismo parametro con la del handler.
// en el hijo ponerle la funcion del hijo que queriamos traer los datos al padre y poner dentro esta funcion handler. 
// en el parrafo pintar la variable que va cambiando 


function Parent() {
    let [change, updatechange] = useState('');
  

const handler = text =>{
    updatechange(text)
}

    return (
        <react.Fragment>
            <Child  handlerOn={handler}></Child>
            <p>{change} </p>
        </react.Fragment>




    )



}

export default Parent