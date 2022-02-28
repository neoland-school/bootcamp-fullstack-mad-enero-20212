import React from "react";
import { useContext } from "react";
import CurrencyContext from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";




function UserInfo(){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const {currencyState,updateCurrencyState} = useContext(CurrencyContext)
    
    const handler = e =>{
        e.preventDefault();
        let newState = {
            // ...currencyState,
            name: e.target.nombre.value,
            apellido : e.target.apellido.value,
            edad : e.target.edad.value
        }
        updateCurrencyState({...currencyState,...newState})

        console.log(currencyState)
        localStorage.setItem('age', e.target.edad.value);
        navigate('/numbers');        
    }
   

    return(
        <React.Fragment>
            <form onSubmit={handler} action="">
                <h1>Userinfo</h1>

                <label htmlFor="nombre">Introduzca su nombre</label>
                <input type="text" id="nombre" name="nombre"/>
                <label htmlFor="apellido">Reino unido</label>
                <input type="text" id="apellido" name="apellido" />
                <label htmlFor="age">Introduzca su edad</label>
                <input type="number" id="age" name="edad"/>

                <button type="submit">Enviar</button>

            </form>
    
        </React.Fragment>
        
    )
}

export default UserInfo;