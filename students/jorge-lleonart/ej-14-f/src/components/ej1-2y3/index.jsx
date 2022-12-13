// 1. Crea una aplicación React con dos botones como en la siguiente imagen, valiéndonos del State al darle click al de + deberá sumar 1 y al de - restar un numero.

// 2. En tu app react crea un componente que tenga un boton que al darle click se actualice el color del fondo del boton a verde.

// 3. Crea un componente que actualice en un p lo que el usuario vaya escribiendo en un input (onChan..). 

import React, {useState} from 'react';

function FirstExample(){
    let [Color, updateColor]= useState('');

    let [userImput,updateUserImput] = useState('Texto inicial')
    let handleInput = e => updateUserImput(e.target.value);

    let [counter, updateCounter] = useState(1);
    let clickHandlerPlus = ()=> updateCounter(++counter);
    // let clickHandlerLess = ()=> updateCounter(--counter);
    return(
        <>
            <button onClick={()=>updateCounter(--counter)}>-</button>
            <p style={{color: Color}}>{counter}</p>
            <button onClick={clickHandlerPlus}>+</button>
            <button onClick={()=>updateColor('red')}>COLOR Change</button>
            <input name='MyText' type={'text'} onChange={handleInput}></input>
            <p>{userImput}</p>
        </>        
    )
}

export default FirstExample;