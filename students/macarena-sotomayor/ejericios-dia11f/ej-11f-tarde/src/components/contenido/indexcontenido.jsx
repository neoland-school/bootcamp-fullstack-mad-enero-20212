import React from "react";
import TextHijo from "../text/texthijo";
function Contenido (props){
    return (
    <React.Fragment>
        <h4>{props.text}</h4>
        <TextHijo textSon={props.text}></TextHijo>
    </React.Fragment>
    
    
    )
    

}

export default Contenido;