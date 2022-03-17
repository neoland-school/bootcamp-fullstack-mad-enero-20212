import { usePokemon } from ".";



function CustomHookExample() {
    const pokemon = usePokemon()
    console.log(pokemon)

    return <p>{pokemon}</p>
    
    // (
    // //     <ul>
    // //         {pokemon.map(c => <li key={c.id}>{c}</li>)}
    // //     </ul>
    // // )
}



export default CustomHookExample;