import react from 'react';
import React, { useState } from 'react';

function Escribir(){
    let [text,updatetext] = useState('');
    const handle = e => {
        updatetext(e.target.value);



    }
    


    return(
       
        <react.Fragment>
        <input onKeyDown={handle} name='cambio' type="texto"></input>
        <p>{text}</p>





        </react.Fragment>




    )
}


export default Escribir