import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import './stylesheet.css'
import { Link } from 'react-router-dom';
import PokemonList from "../../pages/pokemonlist";

function PokemonNav(props){

   

    return(
        
    <div className="header">
        


<Link to="/">
        <img className="imagen" src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png"></img>
        </Link>
        <div className="right">
        <input onChange={props.onfilter} className="buscador" type="text" placeholder="search" ></input>

        <Link className="link" to="/contact"><h2 className="sus">Suscribete</h2></Link>
        </div>
        


    </div>
    )


}

export default PokemonNav