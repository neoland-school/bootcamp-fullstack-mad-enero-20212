import React, {useState} from 'react';
import FillBox from '../fill-box';
import EmptyBox from '../empty-box';
import './style.css';


/*
 * Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
 * Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.
 * handler al hijo, props
*/

function BoxContainer() {

    let [currentBg, updateCurrentBg] = useState('fill-box');

    const handler = () => { //  1 al escribir aqi aun no vale nada pork aun no esta invocada
        currentBg==='fill-box' ? updateCurrentBg('fill-box-green' ) : 
        updateCurrentBg('fill-box')
// 2 en la L 18 solo tenia updateCurrentBg('fill-box-green' ) y aso se queda hasta k no queremos cambiar ota vez el color
    }

    return (
        <React.Fragment>
        <div className="box-container">
            <EmptyBox handlerColor={handler}></EmptyBox>
            <FillBox fillColor={currentBg}></FillBox>
        </div>
        </React.Fragment>
    )
}
export default BoxContainer;
// 3 L26 creas tu handlerColor/ficticia para poder pasar por props el valor actual/inicial de handlerColorcurrentBg 
// 4 en la L27 creas tu fillColor/ficticia para poder pasar por props el valor actual/inicial de currentBg 