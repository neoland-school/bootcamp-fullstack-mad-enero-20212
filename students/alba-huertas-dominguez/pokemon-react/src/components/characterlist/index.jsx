import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import CharacterCard from "../charactercard"
import './stylesheet.css'



function CharacterList(){

    let [character,updatecharacter] = useState()
    
    useEffect(() =>{
      
        fetch("https://rickandmortyapi.com/api/character")
        .then ( r => r.json())
         .then (c => {
            updatecharacter(character)
         console.log(c.results)
         console.log(character)})  



    },[])

    return(
        <React.Fragment>
                
                <div className="container">
            <CharacterCard></CharacterCard>
            </div>



        </React.Fragment>



    )



}

export default CharacterList