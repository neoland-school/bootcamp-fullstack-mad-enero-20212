/**
 *  6 - Crea la siguiente pagina de componentes Cards,  
 * la navegacion será otro componente llamado Nav.
 */


import Boton from "../boton-verde";

function CardCountry(){

    return(

        <>
          <div className="card_container">

          <div className="container__image afghanistan" >

                </div>
                <div className="body__container">
                    <h3 className="beer__name">Afghanistan</h3>
                    <div className="beer__info">
                            <p className="text-info">Code: AF</p>
                            <p className="text-info">Dial Code: +93</p>
                           
                    </div>
                    <Boton></Boton>
                </div>
          </div>

          <div className="card_container">

                <div className="container__image algeria" >

                    </div>
                    <div className="body__container">
                        <h3 className="beer__name">Algeria</h3>
                        <div className="beer__info">
                                <p className="text-info">Code: DZ</p>
                                <p className="text-info">Dial Code: +213</p>
                                
                        </div>
                        <Boton></Boton>
                 </div>
            </div>

            
            <div className="card_container">

            <div className="container__image andorra" >

                </div>
                <div className="body__container">
                    <h3 className="beer__name">Andorra</h3>
                    <div className="beer__info">
                            <p className="text-info">Code: AD</p>
                            <p className="text-info">Dial Code: +376</p>
                            
                    </div>
                    <Boton></Boton>
            </div>
            </div>

            <div className="card_container">

            <div className="container__image america-samoa" >

                </div>
                <div className="body__container">
                    <h3 className="beer__name">America Samoa</h3>
                    <div className="beer__info">
                            <p className="text-info">Code: AS</p>
                            <p className="text-info">Dial Code: +1684</p>
                            
                    </div>
                    <Boton></Boton>
            </div>
            </div>


        </>
    )
}

export default CardCountry;