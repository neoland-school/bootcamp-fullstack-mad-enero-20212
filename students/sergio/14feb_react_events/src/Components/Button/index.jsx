import React, { useState } from "react";
import '../Button/style.css'


function HtmlButton(){

    let [valor, updateValue] = useState(0);
    let [color, updateColor] = useState('');
    let [textoinput, updateText] = useState('')

    const handleSubmitSuma = e =>{
        e.preventDefault();
        updateValue(valor+1)
    }

    const handleSubmitResta = e => {
        e.preventDefault();
        updateValue(valor-1)
    }

    const handleColor = e => {
        e.preventDefault();
        updateColor('green');
    }

    const handleWriteText = e =>{
        console.log(e.key)
        let newTextoInput = textoinput+e.key;
        updateText(newTextoInput)
    }


    return (
        <React.Fragment>
           
            <h4>Ej 1</h4>
            <button id="Suma" type="submit" class="button" onClick={handleSubmitSuma}>+</button>
            <p>{valor}</p>
            <button id="Resta" type="submit" class="button" onClick={handleSubmitResta}>-</button>
            
            <h4>Ej 2</h4>
            <button type="submit" class={color} onClick={handleColor}>Cambiar Color</button>

            <h4>Ej 3</h4>
            <input type="text" name="inputText" placeholder="introduce aqui el texto" onKeyUp={handleWriteText}></input>
            <p>Ejercicio 3: {textoinput}</p>
        </React.Fragment>
    )
}

export default HtmlButton;