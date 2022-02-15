import React, { useState } from "react";
import Avatar from "../avatar";


function AvatarList(props) {
    // necesito un state ya que la lista se debe ir refrescando en el HTML.
    // inicialmente el state será TODO el array recibido por props
    const [filteredArray, updateArray] = useState(props.avatars);
    const [name, updateName] = useState('');

    const handleOnChange = e => { // escuchamos el cambio del input
        // necesito el nuevo value del input
        const newValue = e.target.value.toLowerCase();
        const newArray = props.avatars.filter(a => a.name.toLowerCase().includes(newValue));
        updateArray(newArray); // actualizar el state con el array filtrado del ARRAY original
    }

    const handleOnAvatarOffline = name => {
        updateName(name);
        // a los dos segundos vaciamos el nombre, lo que produce un refresco y por 
        // tanto no se pintará el h1 (desaparecerá)
        setTimeout(() => updateName(''), 2000); 
    }

    return (
        <React.Fragment>
            {
                name !== ''
                    ? <h1 style={{ color: 'red' }}>{name} está offline</h1>
                    : ''
            }
            <input onChange={handleOnChange}></input>
            <ul>
                {
                    filteredArray.map((a) => (
                        <li key={a.name}>
                            <Avatar onAvatarOffline={handleOnAvatarOffline} avatar={a}></Avatar>
                        </li>
                    ))
                }
            </ul>
        </React.Fragment>
    )

}


export default AvatarList;