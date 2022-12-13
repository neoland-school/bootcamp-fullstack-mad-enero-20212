import React, { useState } from 'react';
import { useEffect } from 'react';
import PokeCard from '../../components/pokecard/pokecard';
import './../../components/pokecard/style.css'
import './style.css'
import { Link } from 'react-router-dom';

// 1. necesitamos traernos el array con los personajes
// 2. Pintar tantas cards como personajes
// 3. 

function PokeList() {

    let [pokemons, updateList] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(r => r.json())
            .then(c => {
                // let arrpok =  
                c.results.forEach(e => {
                    fetch(e.url)
                        .then(s => s.json())
                        .then(data => {
                            let pokemon ={
                                id: data.id,
                                img: data.sprites.front_default,
                                name: data.name,
                                type:[data.types],
                                weight: data.weight,
                                height: data.height,
                                img2: data.sprites.other.dream_world.front_default,
                            };
                            // console.log(pokemon)
                            // return(pokemon)
                            updateList(pokemons => [...pokemons, pokemon])
                        })
                })
                // updateList(arrpok)
            });
    }, []);

    console.log(pokemons)
    return (
        <div className='container_home'>
            {/* <nav className="header__container">
                <h1>Pokemon</h1>
                <div>
                    <h1>POKEMON</h1>
                    <input type="text" />
                    <Link to='./../contact/index.jsx'>Suscribirse</Link>
                </div>
            </nav> */}

            <button className='button__home'>NEXT</button>
            <div className='main__container'>
                {pokemons.length === 0 ? <h2>Cargando</h2> : pokemons.map((v, i) => <PokeCard key={i} name={v.name} img={v.img} type={v.type} id={v.id} img2={v.img2} height={v.height}  weight={v.weight}></PokeCard>)}

            </div>
        </div>

    )
}

export default PokeList;