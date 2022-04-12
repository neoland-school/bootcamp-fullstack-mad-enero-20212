// 1- Comunicación hijo padre
// - Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// - Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
// - Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// - Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.

import './style.css';
import EmptyBox from "./emptybox";
import FillBox from "./fillbox";
import { useState } from 'react';

//1. Al hacer el hover sobre el emptybox se le manda un dato al padre de que estamos hover
//2. 



function BoxContainer(){
    let [color, update] = useState('red')
    let handler= () => {  //El padre define la función handler que le pasará al hijo.
        update('green')
    }

    return(
        <div className="BoxContainer">
            <EmptyBox sendHover={handler}></EmptyBox> //
            <FillBox colorBox={color}></FillBox>
        </div>
    )
}

export default BoxContainer;
