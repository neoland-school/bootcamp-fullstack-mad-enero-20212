// 1- Comunicación hijo padre
// - Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// - Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
// - Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// - Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.

import './style.css';

function FillBox(props){
    return(
        <div className={props.colorBox}></div>
    )
}

export default FillBox;

