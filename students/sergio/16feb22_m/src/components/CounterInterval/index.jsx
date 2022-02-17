/**
 * 2. UseEffect.
Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número empezará en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's de los anteriores segundos no se eliminan).
Crear un componente padre CounterContainer que tenga un checkbox y un componente counter interval.
Si el checkbox está checked, se renderizará el componente CounterInterval. Si el checkbox no está checked el Counter Interval  desaparecerá. Hint: No os olvidéis de eliminar los residuos de vuestro componente cuando se elimina del DOM
 */

import { useEffect } from "react";
import { useState } from "react";

function CounterInterval(prop) {

    let [contador, uploadContador] = useState(0);
   
    let [arrayContadores , uploadArray] = useState([])
   
   
    useEffect(()=>{
        if(prop.reply === true){
        const interval = setTimeout(() => {  
            
            arrayContadores.push(contador)
            uploadArray(arrayContadores)

             
            uploadContador(contador+1);
            
            console.log(arrayContadores)
            
        }, 1000);
        } else if(prop.reply === false) {
            uploadContador(0)
            uploadArray([])
        }   
        
    }, [contador, prop.reply]);
   console.log(prop.reply)
        
       

    
    return <div>
      {
          arrayContadores.map((e,i)=>{
              return <p key={i}>{e}</p>
          })
      }
    </div>
    
}

export default CounterInterval;