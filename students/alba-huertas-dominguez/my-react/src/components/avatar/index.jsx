import react from 'react';
import React, { useState } from 'react';
import Color from '../color';
import './styleshee.css';






function Avatar(props){
   let[change,updatechange] =useState('green')
   let[changeo,updatechangeo] =useState(1)

   let handle = e =>{
    change ==='green'?updatechange('red') :updatechange('green');
    changeo === 1 ? updatechangeo(0.6):updatechangeo(1)
    }


    return(
        <react.Fragment>
            
           
      <div className='container'>
<img onClick={handle} src={props.img} className="imagen" style={{opacity: changeo}}></img>
<div className='estado'style={{backgroundColor: change}}></div>
<p className='texto'>{props.nombre}</p>

</div>
</react.Fragment>


    )



}

export default Avatar