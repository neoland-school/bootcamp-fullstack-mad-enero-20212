import './style.css';

/**
 * Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
 * 
 */

function FillBox(props) {
    return (
        <div className={props.fillColor}></div>
    )
}
export default FillBox;
// 6 L10 le cambias la clase actual por {props.fillColor} k viene del L27 Padre