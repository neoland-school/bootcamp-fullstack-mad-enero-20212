import React from "react";
import usercontext from "../../context/context";
import { useContext, } from "react";

import { useNavigate } from "react-router-dom"

function UserInfo() {

    const { data, updatedata } = useContext(usercontext)
    const navigate= useNavigate()
   console.log(data)
    const handler = e => {
        e.preventDefault();
        const obj2={
            nombre : e.target.nombre.value,
            apellidos : e.target.apellido.value,
         fecha : e.target.edad.value
        }

        updatedata(Object.assign(data,obj2))
            
            localStorage.setItem('age',e.target.edad.value)
            console.log(data)
            navigate('/numbers')
            

    }

   





    return (
        <React.Fragment>
            <form onSubmit={handler}>
                <label htmlFor="nom">Nombre</label>
                <input id="nom" type="text" placeholder="Nombre" name="nombre" required />
                <label htmlFor="ape">Apellidos</label>
                <input id="ape" type="text" placeholder="Apellidos" name="apellido" required />
                <label htmlFor="fec">Edad</label>
                <input id="fec" type="number" placeholder="edad" name="edad" required />
                <button type="submit">Guardar</button>
            </form>




        </React.Fragment>


    )


}


export default UserInfo;