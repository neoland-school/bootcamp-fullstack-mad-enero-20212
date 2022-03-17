
import { useEffect, useState } from 'react';
import Cards from '../../components/card';

function Listado (){
  let [data,updatedata] = useState([])
    
        useEffect(()=>{
          fetch('http://localhost:4000/')
          .then(j=>j.json())
          .then(r=>updatedata(r))
    
        },[]
        )
      



    return(

   data.map((v,i)=> <Cards key={i} nombre ={v.name} apellido={v.lastname} user={v.username} ></Cards>)
    
    )


}


export default Listado
