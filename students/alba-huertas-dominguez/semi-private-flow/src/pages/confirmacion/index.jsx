import usercontext from "../../context/context";
import { useContext } from "react";
import {useSearchParams } from "react-router-dom";



function Confirmacion () {
const {data} = useContext(usercontext)
console.log(data)
const [searchParams] = useSearchParams();
  
const op1 = localStorage.getItem('op1')
const op2 = localStorage.getItem('op2')
const sol = op1*op2;
const email = localStorage.getItem('email')
  
    return (
    <div>
    
    <p> confirmacion:</p>
            <ul>
              <li> NOMBRE {data.nombre}</li>
              <li>APELLIDOS {data.apellidos}</li>
              <li>EDAD {data.fecha}</li>
              <li>IDIOMA ELEGIDO  {data.languaje}</li>
              <li>PAIS {data.pais}</li>
              <li>RESULTADO OPERACION {sol}</li>
              <li>email {email}</li>
          




            </ul>
            </div>
            )
  }
  
  export default Confirmacion;