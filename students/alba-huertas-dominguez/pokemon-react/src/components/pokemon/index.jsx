import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import './stylesheet.css'
import { Link } from 'react-router-dom';

// pok.map((v, i) =>

//                 <Pokemon key={i} nombre={v.name} img={v.img} id={v.id} type={v.type} ></Pokemon>)}

// link a la pagina details 

function Pokemon(props) {
    return (
        <React.Fragment>
             <Link className="link" to={`details/${props.id}`} state= {{from:props}}>
            <div className="containercard">

                <div className="img">
                    <img src={props.img}></img>
                </div>
                <div className="text">
                    <h3>{props.nombre}</h3>
                    <div className="typeC">
                  
                    {props.type[0].map(v =><button className="type">{v.type.name}</button>)}
                    </div>
                    <button className="idp">
                   {props.id}
                    </button>
    
               
                </div>

            </div>
            </Link>


        </React.Fragment>



    )




}

export default Pokemon