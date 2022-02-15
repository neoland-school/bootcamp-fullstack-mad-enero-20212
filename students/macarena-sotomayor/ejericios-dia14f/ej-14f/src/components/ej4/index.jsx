// 4.  Vamos a crear una lista de contactos como en la siguiente imagen, para eso nos vamos a crear un componente llamado Avatar que va a recibir por Props un array y deberá pintar los avatares, el color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity de la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del state.
// 5. Al darle click de nuevo a un usuario en offline deberá cambiar a  online de nuevo.
// 6.  Modificar el componente  para que tenga un input que cuando se escriba, se filtren los contactos   cuyo nombre contenga lo que el usuario escribió.
import './style4.css'
import { useState } from 'react';

function Avatar(Props){
    let[online, updateOnline]=useState('ON')
    let handleoff= ()=>updateOnline(online==='ON'?'OFF': 'ON')

    return( <>
        <div className="container">
            <img  onClick={handleoff}  src={Props.img} alt="" className={`imgs${online}`} />
            <p >{Props.name}</p>
            <div className={`onlineColor${online}`}></div>
            
        </div>
    </>
    )

}

export default Avatar;