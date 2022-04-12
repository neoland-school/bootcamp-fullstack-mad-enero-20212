import React from "react";
import './style.css';
import imagen from '../../assets/img/madtree.png';
import Boton from "../boton";

/* 5. Crea un  componente Card como en la siguiente imagen, la imagen debe ser parte de tus archivos del proyecto react, y el boton sera otro componente llamado Boton. */

function Card() {

    return <div className="card_container">
        <img className="imagen" src={imagen} />
        <div className="parte_inferior">

            <h2>MadTree Brewing</h2>
            <div className="hr"></div>

            <p className="text">Type: regional</p>
            <div className="hr"></div>

            <p className="text">City: Cincinnati</p>
            <div className="hr"></div>

            <p className="text">State: Ohio</p>
            <div className="hr"></div>

            <p className="text">Country: United States</p>
            <div className="hr"></div>
            <Boton></Boton>
            
        </div>
    </div>
}

export default Card;