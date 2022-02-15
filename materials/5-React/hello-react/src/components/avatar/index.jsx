import React from "react";

/**
 * COMUNICACION HIJO-PADRE
 * 
 * 1. El hijo debe definir una prop de tipo función, como si fuese un evento. 
 *    Esta función será llamada cuando se necesite producir el evento por parte del hijo
 *    es decir, cuando el hijo quiera avisar al padre.
 * 
 * 2. El padre define la función handler que le pasará al hijo. 
 *    En esta función puede actualizar el state o lo que el padre necesite hacer
 */

function Avatar({avatar, onAvatarOffline = () => {}}){
    return (
        <React.Fragment>
            <img alt="" onClick={() => onAvatarOffline(avatar.name)} src={avatar.img}></img>
            <h1 >{avatar.name}</h1>
        </React.Fragment>
    )
}


export default Avatar;