import React, { useState } from "react"
import react from "react";
import Child from "../child";




// componente padre que debe llevar:
// componente hijo
// debajo de este un <p></p>
// el p pintar lo que escriba el input hijo


function Parent(){

    return(
        <react.Fragment>
        <Child></Child>
        <p> </p>
        </react.Fragment>




    )



}

export default Parent