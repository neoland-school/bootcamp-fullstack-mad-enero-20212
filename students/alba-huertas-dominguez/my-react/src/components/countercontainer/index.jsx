

import { findAllByTestId } from '@testing-library/react';
import react, { useEffect } from 'react';
import React, { useState } from 'react';
import BoxContainer from '../boxcontainer';
import CounterInterval from '../counterinterval';

// Crear un componente padre CounterContainer que tenga un checkbox y un componente counter interval.
// 1. tenemos que crear un input check box 
// 2. tenemos que importar el componente interval 
// 3. checkbox si esta checked renderizada el counterinterval.
//4. si si el checkbox no esta el counter interval se borra




function CounterContainer() {
    let [boton, updateboton] = useState(false);
    let handler = () => { 
        if (boton === false) {
            updateboton(boton = true)
           
        } else{updateboton(boton = false)}
        console.log(boton)
        // updateboton( !boton )



    }



    return (
        <react.Fragment>
            <input onClick={handler} name="check" type='checkbox'></input>
            {boton ? <CounterInterval></CounterInterval>:""}








        </react.Fragment>
    )
}

export default CounterContainer