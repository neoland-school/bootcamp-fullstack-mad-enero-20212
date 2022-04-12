import React from "react";
import { Link, useNavigate } from "react-router-dom"
import usercontext from "../../context/context";
import { useContext, } from "react";

function Numbers () {

  const { data, updatedata } = useContext(usercontext)
  console.log(data)
  let navigate = useNavigate()
  const handler = e => {

    localStorage.setItem('op1',e.target.numero1.value)
    localStorage.setItem('op2',e.target.numero2.value)
  
            navigate(`/multiplier?op1=${e.target.numero1.value}&op2=${e.target.numero2.value}`)
            // navigate('/login')
  }
  
    return (

      <React.Fragment>

        <form onSubmit={handler}>
        <label htmlFor="n1">Número 1</label>
    <input type="number" id="n1" name="numero1"/>
    <label htmlFor="n1">Número 2</label>  
    <input type="number" id="n2" name="numero2"/>
    <button type="submit">Guardar</button>
    </form>
    </React.Fragment>
    
    )
    
    }
  
  export default Numbers;