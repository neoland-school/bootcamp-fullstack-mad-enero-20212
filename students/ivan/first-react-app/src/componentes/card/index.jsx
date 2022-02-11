/**
 * Crea un  componente Card como en la siguiente imagen, 
 * la imagen debe ser parte de tus archivos del proyecto react,
 *  y el boton sera otro componente llamado Boton.
 */

import Boton from "../button";

function Card(){

    return(

        <>
          <div className="card_container">

          <div className="container__image">

                </div>
                <div className="body__container">
                    <h3 className="beer__name">MadTree Brewing</h3>
                    <div className="beer__info">
                            <p className="text-info">Type: regional</p>
                            <p className="text-info">City: Cincinnati</p>
                            <p className="text-info">State: Ohio</p>
                            <p className="text-info">Country: United States</p>
                    </div>
                    <Boton></Boton>
                </div>
          </div>


        </>
    )
}

export default Card;