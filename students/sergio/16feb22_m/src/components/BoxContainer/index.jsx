/**
 * 1- Comunicación hijo padre
Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.
(editado)
 */

import FillBox from "../FillBox";
import EmptyBox from "../EmptyBox";
import '../BoxContainer/style.css';
import React, { useState } from "react";


function BoxContainer(){
    
    let [color, uploadColor] = useState('red')

    // con esta funcion me estoy trayendo al padre los datos
    // del hijo, en este caso un booleano del hover al div
    function handleHover(text){
        if(text === true){
            uploadColor('fillBoxgreen') // actualizo var
            console.log(color)
        } else if(text === false){
            uploadColor('fillBoxred') // actualizo var
            console.log(color)
        }
    }

    // paso por prop tanto la funcion como la posterio clase para pintar el objeto
    return <div className="boxContainer">
        <EmptyBox hover={handleHover}></EmptyBox>  
        <FillBox style={color}></FillBox>
        </div>
}

export default BoxContainer;