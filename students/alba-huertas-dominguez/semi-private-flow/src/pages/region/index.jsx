
import React from "react"
import {useNavigate } from "react-router-dom" 
import usercontext from "../../context/context";
import { useContext } from "react"



function Region() {
 const {data,updatedata} = useContext(usercontext)
 let navigate = useNavigate()
 const handler =e => {
    e.preventDefault();
  let obj = {
      languaje: e.target.languaje.value,
      pais:e.target.pais.value,

      
    }
 
    updatedata(Object.assign(data,obj))
    navigate('/userinfo')
 }
 
console.log(data)
    return (

        <React.Fragment>
            <form onSubmit={handler}>
                <section>
                    <label htmlFor="sp">Español</label>
                    <input id="sp" type="radio" name="languaje" value="ESPAÑOL" />
                    <label htmlFor="en">Ingles</label>
                    <input id="en" type="radio" name="languaje" value="INGLES" />
                    <label htmlFor="fr">Frances</label>
                    <input id="fr" type="radio" name="languaje" value="FRANCES" />
                </section>
                <section>
                    <label htmlFor="es">España</label>
                    <input id="es" type="radio" name="pais" value="ESPAÑA" />
                    <label htmlFor="in">Reino Unido</label>
                    <input id="in" type="radio" name="pais" value="INGLATERRA" />
                    <label htmlFor="fra">Francia</label>
                    <input id="fra" type="radio" name="pais" value="FRANCIA" />
                </section>
               
              <button type="submit">Siguiente</button>
              
            
            </form>



        </React.Fragment>



    )

}

export default Region