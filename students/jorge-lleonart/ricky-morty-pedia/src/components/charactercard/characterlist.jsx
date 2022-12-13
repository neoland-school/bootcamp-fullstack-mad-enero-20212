import React, { useState } from 'react';
import CharacterCard from './charactercard';
import './style.css';
import { useEffect } from 'react';
// 1. necesitamos traernos el array con los personajes

function CharacterList(){

    let [characterList,udateCharacterList] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => r.json())
            .then(c => udateCharacterList(c.characterList));
    }, []);

    return(
        <CharacterCard></CharacterCard>
    )
}

export default CharacterList;