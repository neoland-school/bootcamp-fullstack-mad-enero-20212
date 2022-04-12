import React from "react";
import CardComponent from "../card";
import { useEffect } from 'react'
import { useState } from "react";


function Listado(){
    let [data, updateData] = useState([])
    useEffect(() => {
        
        fetch('http://localhost:4000/users')
          .then(j => j.json())
          .then(r => updateData(r))
    }, [])
    // console.log(data)

    return (
        <React.Fragment>
            <h2>HOLA</h2>
            {data.map(e => <CardComponent key={e.id} name={e.name} userName={e.userName} country={e.country} image={e.image}></CardComponent>)}
        </React.Fragment>
    )
}
export default Listado;
