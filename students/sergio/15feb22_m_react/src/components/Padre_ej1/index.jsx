import React, { useState } from "react";
import InputText from "../Hijo_ej1";

function TextFather(){

    let [text_input, uploadText_input] = useState('');
    
    function handleInputText(text){
        uploadText_input(text);
    }

    return <React.Fragment>
        <InputText text_prop={handleInputText}  ></InputText>
        <p>{text_input}</p>
    </React.Fragment>

}

export default TextFather;