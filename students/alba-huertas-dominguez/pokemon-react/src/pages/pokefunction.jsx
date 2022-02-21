export const PokeFunction= async (id) => {

const req = {
    method:'POST',
    body: JSON.stringify({id:id}),
    headers: {
        'Content-Type': 'application/json'
      }
    }

const r = await fetch('https://pokeapi.co/api/v2/pokemon',req)
const pid = await r.json();
return pid.data;
            



}
