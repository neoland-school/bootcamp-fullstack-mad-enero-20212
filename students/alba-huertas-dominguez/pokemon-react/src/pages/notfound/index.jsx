import React from 'react';
import { Link } from 'react-router-dom';
import PokemonNav from "../../components/pokemonnav"
import './stylesheet.css'


function NotFound(){
    return(
        <React.Fragment>
            <PokemonNav></PokemonNav>
            <div className='notf'>
    <h2> A ver, que te arroja?.... te equivocaste, COÑO!</h2>
    <img className='img' src="http://fc06.deviantart.net/fs71/i/2011/030/e/e/pikachu__s_tears_by_2d75-d38dl8e.jpg"></img>
    </div>
    </React.Fragment>

    )

}

export default NotFound