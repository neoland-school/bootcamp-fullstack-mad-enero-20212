
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import './stylesheet.css'


function CharacterCard(){


  


    return(

        <React.Fragment>
            {/* <img className="imagen" src={props.img}></img>
            <h1>{props.nombre}</h1>
            <p>{props.estado}</p>

            <p>Last Known location</p>
            <p>{props.localizacion}</p>

            <p>First seen in:</p>
            <p>{props.seen}</p> */}
            
            <div className="container">

            <div className="containerimg">
            <img className="imagen" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></img>
            </div>


            <div className="text">
            <h1 className="title">titulo</h1>
            <p className="status">estado</p>

            <p>Last Known location</p>
            <p>localizacion</p>

            <p>First seen in:</p>
            <p>blablalalalala</p>
            </div>
            </div>
        </React.Fragment>


    )




}

export default CharacterCard