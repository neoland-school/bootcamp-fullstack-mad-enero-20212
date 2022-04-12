import { useState, useEffect } from "react";


export function usePokemon(){
    const [pokemon, updatePokemon] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/25')
            .then(r => r.json())
            .then(c => updatePokemon(c.name))
              

            },



 []);

 return pokemon;



}

// c.results.forEach(v => {

//     fetch(v.url)
//         .then(r => r.json())
//         .then(data => {
//         }

// import { useState, useEffect } from "react";

// // quiero crear un hook que me devuelva los países
// export function useCountries(){
//     const [countries, updateCountries] = useState([]);

//     useEffect(() => {
//         fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//         .then(r => r.json())
//         .then(c => updateCountries(c.countries))
//     }, []);

//     return countries;
// }