// Crea una aplicación React con dos botones como en la siguiente imagen, valiéndonos del State al darle click al de + deberá sumar 1 y al de - restar un numero.
// 2. En tu app react crea un componente que tenga un boton que al darle click se actualice el color del fondo del boton a verde.
// 3. Crea un componente que actualice en un p lo que el usuario vaya escribiendo en un input (onChan..)

// import React, {useState} from 'react';


// function Buttons(){

//     let[counter, updateCounter]= useState(1)
//     let clickHandlerLess = ()=>updateCounter(counter-1);

//     let[color, updateColor]= useState('red')
//     let changeColor = ()=> updateColor('blue')

//     let changeText= (e)=>  updateText(e.target.value)


//     let [userInput, updateText]=useState('')
  
//     return(
//         <>
//          <button onClick={ ()=> updateCounter(counter+1)}>+</button>
//          <button onClick={clickHandlerLess}>-</button>

//          <button onClick={changeColor}>Change color</button>
//          <input  onChange={changeText}></input>

//          <p style={{color:color}}>{counter}{userInput}</p>
//     </>
//     )
// }

// export default Buttons;