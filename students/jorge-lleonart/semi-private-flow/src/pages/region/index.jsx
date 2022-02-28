import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrencyContext from "../../context/context";
import {useContext} from "react"



function Region() {
    const {currencyState,updateCurrencyState} = useContext(CurrencyContext)
    let navigate = useNavigate()
    const handler = e =>{
        e.preventDefault()
        let obj ={
            idioma: e.target.idioma.value,
            pais: e.target.region.value
        }
        updateCurrencyState(obj);
        navigate('/user-info');
    }
    console.log(currencyState)

    

    return (
        <React.Fragment>
            <form name="form" onSubmit={handler}>
                <h1>Region</h1>
                <label htmlFor="españa">España</label>
                <input type="radio" id="españa" value="españa" name="region"/>
                <label htmlFor="uk">Reino unido</label>
                <input type="radio" id="uk" value="uk" name="region" />
                <label htmlFor="francia">Francia</label>
                <input type="radio" id="francia" value="francia" name="region" />

                <h1>Idioma</h1>
                <label htmlFor="español">España</label>
                <input type="radio" id="español" value="español" name="idioma" />
                <label htmlFor="ingles" name="idioma">Reino unido</label>
                <input type="radio" id="ingles" value="ingles" name="idioma" />
                <label htmlFor="frances" >Francia</label>
                <input type="radio" id="frances" value="frances" name="idioma" />

                <p></p>
                
                <button>Siguiente</button>
              
            </form>


        </React.Fragment>


    )
}

export default Region;