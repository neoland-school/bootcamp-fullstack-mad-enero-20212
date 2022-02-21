import './stylesheet.css';
import react from 'react';
import React, { useState } from 'react';


function Cabecera(){


    return(
        <react.Fragment>
    <div className='divcabecera'><p>Contacts</p> </div>
    <input className='buscador' type='text' placeholder='busca contacto'></input>
    
    </react.Fragment>
    )
}

export default Cabecera