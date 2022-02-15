// import { Profiler } from 'react/cjs/react.production.min';
import './style.css';
import React from 'react';

/**
 * 
 *   Vamos a crear una lista de contactos como en la siguiente imagen, para eso nos vamos a crear un 
 * componente llamado Avatar que va a recibir por Props un array y deberá pintar los avatares, el 
 * color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity 
 * de la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del 
 * state.
 * 
 * 1 problema
 *  - recibir por props un array
 *  -pintar el array de los avatares
 * 2 el .dot sera verde y al darle click sobre la imagen se aplicara opacity
 *      - cambiara el bg de .dot al rojo (offline)
 */
function Avatar(props) {
    return (
        <React.Fragment>
            <div className="container__avatar">
                <img src={props.pole} alt="Imagen del Avatar" />
                <h4>{props.senay}</h4>
                <p className='dot'></p>
            </div>
        </React.Fragment>

    )
}
export default Avatar;