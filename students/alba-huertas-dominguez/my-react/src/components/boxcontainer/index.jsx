import react from 'react';
import React, { useState } from 'react';
import EmptyBox from '../emptybox';
import FillBox from '../fillbox';
import './stylesheet.css';

// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.
// 1. meter los dos componentes hijos
// 2. cambiar el fondo a verde del compontente fillbox
// 3. hacer que cambie cuando actuas, es decir, el evento, tiene que ser sobre emptybox y el resultado en fillbox.
// 4. el resultado tiene que mostrarse en boxcontainer.

// donde quiero que cambie el color es en fillbox, quiero que cambie el background.
// siempre que hay un cambio tengo que utilizar el usestate. el primer parametro es el inicial, el segundo el cambio.
// Donde hago el cambio tengo que traer la funcion del hijo que pasba y a la funcion que quiero cambiar, el primer parametro tiene que estar donde quiero que se cambie la cosa en si. 


function BoxContainer() {

    let[change,updatechange] = useState('red')
    
    const handler = background =>{
        updatechange(background)
      
    }
    return (
        <react.Fragment>
            <div className='container'>
                <EmptyBox handlerOn={handler}></EmptyBox>
                <FillBox color={change}></FillBox>
            </div>

        </react.Fragment>


    )

}



export default BoxContainer