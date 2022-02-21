import React, { useState,useEffect } from 'react';
import {useParams,useLocation} from 'react-router-dom';
import PokemonNav from "../../components/pokemonnav";
import {PokeFunction} from '../pokefunction' ;
import './stylesheet.css'



function Details(){
    // const Pokedetail = useParams();
    // const [poke,updatepoke] = useState({});
    // useEffect(() => {
    //     PokeFunction(Pokedetail.id)
    //     .then( c => updatepoke(c))
    // },[Pokedetail.id]);
    // console.log(Pokedetail)
    const location = useLocation()
    const {from} =location.state


    return (
        <React.Fragment>
    <PokemonNav></PokemonNav>
    <div className='containerdetails'>

    <p className='detailtitle'> y ahora de espaldas </p>
    <img  className='back' src={location.state.from} alt=""></img>
    </div>
  
    
    </React.Fragment>
    )
}

export default Details