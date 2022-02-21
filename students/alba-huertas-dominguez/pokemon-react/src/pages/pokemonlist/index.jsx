import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Pokemon from "../../components/pokemon"
import PokemonNav from "../../components/pokemonnav"
import './stylesheet.css'

function PokemonList() {


    let [pok, updatepok] = useState([])
    const [pokfilter, updatefilter] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(r => r.json())
            .then(c => {

                c.results.forEach(v => {
                    fetch(v.url)
                        .then(r => r.json())
                        .then(data => {
                            let pokemon = {
                                id: data.id,
                                img: data.sprites.front_default,
                                imgback:data.sprites.back_default,
                                name: data.name,
                                type: [data.types]

                            };
                            console.log(pok)
                            updatepok((pok) => [...pok, pokemon])
                            updatefilter((pokfilter) => [...pokfilter, pokemon])
                            // pok.push(pokemon)
                            // console.log(pok)
                        })

                })

            });

    }, []);


    const Onfilter = (e) => {
        let arrnew = pok.filter(v => v.name.toLowerCase().includes(e.target.value.toLowerCase()))
        updatefilter(arrnew)

    }


    return (
        <React.Fragment>
            <PokemonNav onfilter={Onfilter}></PokemonNav>
            <div className="botones">
                <button className="bot">Prev</button>
                <button className="bot">Next</button>


            </div>

            <div className="container">


                {pok.length === 0 ? <h1>cargando</h1> : pokfilter.map((v, i) =>

                    <Pokemon key={i} nombre={v.name} img={v.img} id={v.id} type={v.type} back={v.imgback} ></Pokemon>)}


            </div>

        </React.Fragment>



    )


}

export default PokemonList