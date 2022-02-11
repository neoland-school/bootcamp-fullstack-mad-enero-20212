/**
 * Crear un componente reactJS llamado Cuadro con un div de 100px por 100px con el fondo rojo. Crear otro componente llamado Text que tenga un p con el texto `soy un componente hijo`. Meter este componente como hijo del anterior y visualizo en pantalla.
 */
 import './index.css';
 import TextP from '../Texto';

function Cuadro(){
        return <div className="rojo"> <TextP></TextP> </div>
}

export default Cuadro;