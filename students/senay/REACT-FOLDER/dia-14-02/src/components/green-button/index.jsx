import React, { useState } from 'react';
import './style.css';

// En tu app react crea un componente que tenga un boton que al darle click se actualice el color 
// del fondo del boton a verde.

function GreenButton() {
    let [color, updateSetColor] = useState('btn');
    // el btn de 8 al parecer no vale nada. si lo quitas no pasa nada!!!
        const click = () => {
        updateSetColor('btn-green');
    }
    return (
        <div className='container__green--btn'>
            <button className={color} onClick={click}>Click me</button>
        </div>
        // color 16 vale igual color de la 8. 
        
    )
}
export default GreenButton;