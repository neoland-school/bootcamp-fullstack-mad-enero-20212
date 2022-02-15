import React from "react";
import "./style.css";



function Avatar(props) {
    let []
    
    return (
        <React.Fragment>
            <div className="cont">
                <img className="img" src={props.pole} alt="Image Avatars" />
                <h1 className="container__list--header">{props.senay}</h1>
                <div className="dot"></div>
            </div>
        
        </React.Fragment>
    
    );
}
export default Avatar;
/**
 * Vamos a crear una lista de contactos como en la siguiente imagen, para eso nos vamos a crear un
 * componente llamado Avatar que va a recibir por Props un array y deberá pintar los avatares, el
 * color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity
 * e la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del
 * state.
 */
