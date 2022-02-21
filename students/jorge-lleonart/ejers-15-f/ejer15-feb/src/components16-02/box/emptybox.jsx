// 1- Comunicación hijo padre
// - Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// - Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
// - Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// - Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.
import './style.css';

function EmptyBox({sendHover = ()=>{}}){ //definimos la prop tipo funcion vacía
    const handler = () =>{ //el handler llama a la function
        sendHover()
    }
    return(
        <div className="EmptyBox" onMouseOver={handler}></div>//definimos el evento on mouseover y lo escuchamos con el handler
    )

}

export default EmptyBox;




