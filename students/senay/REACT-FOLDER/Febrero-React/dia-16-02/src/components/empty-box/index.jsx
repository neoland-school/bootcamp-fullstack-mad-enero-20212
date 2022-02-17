import './style.css';
/**
 * - Comunicación hijo padre
Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
    1. crear evento k maneje el div
    2. crear una () para k envie a su padre k a tenido un cambio en su estado.
        2.a 
 */

function EmptyBox(props) {

    
    return (
        <div onMouseOver={() => {props.handlerColor()}} className="empty-box"></div>
    )
}
// 1 L14 solo creas hasta {props.handlerColor()}
export default EmptyBox;

