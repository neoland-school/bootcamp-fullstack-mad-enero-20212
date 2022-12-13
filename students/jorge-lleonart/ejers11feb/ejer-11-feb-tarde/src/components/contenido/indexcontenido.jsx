// 2. Crea un componente react llamado Contenido, el cual recibirá por Props la variable de tipo string que le enviaremos desde App.js. Pintala por pantalla.
// 3. Crea un componente llamado Text el cual será hijo del componente Contenido el cual recibira por Props la variable de tipo string "Hola Mundo" desde App.js y se debe ver por pantalla.

import React from "react"
import Text from "./text/indextext"

function Contenido(props){
    return (
        <React.Fragment>
            <h6>{props.text}</h6>
            <Text textson={props.text}></Text>
        </React.Fragment>
    )
}
export default Contenido