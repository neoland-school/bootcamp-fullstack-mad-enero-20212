import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/CharacterCard';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  
  let [Characters, uploadCharacters] = useState([]);
  let [CharactersFiltred, uploadCharactersFiltred] = useState([]);
  let [SegundoFiltro, uploadSegundoFiltro] = useState([])
  let [pagSig, uploadPagSig] = useState('')
  
  useEffect(()=> {
    fetch('https://rickandmortyapi.com/api/character')
    .then(r => r.json()).then(e => { 
      uploadCharacters(e.results); 
      uploadCharactersFiltred(e.results); 
      console.log(e.info.next)
      uploadPagSig(e.info.next)});
    

  }, [])

const handleChange = (c) => {
  const filteredCharc = Characters.filter(d => d.name.toLowerCase().includes(c.target.value));
  uploadCharactersFiltred(filteredCharc);
  uploadSegundoFiltro(filteredCharc);

}
  
const handleVivos = () => {
  const segfilteredCharc = CharactersFiltred.filter(d => d.status === "Alive");
  uploadSegundoFiltro(segfilteredCharc);
}
const handleMuertos = (c) => {
  const segfilteredCharc = CharactersFiltred.filter(d => d.status === "Dead");
  uploadSegundoFiltro(segfilteredCharc);
}
const handleTodos = (c) => {
  const segfilteredCharc = CharactersFiltred.filter(d => d.status != 0);
  uploadSegundoFiltro(segfilteredCharc);
}

const handleMoreCharters = (c) => {
  console.log(c)
  fetch(pagSig)
    .then(r => r.json()).then(e => { 
      let arraynueva = e.results;
      arraynueva.map(e =>Characters.push(e) )
      
      uploadPagSig(e.info.next)
      uploadCharacters(Characters);
      uploadCharactersFiltred(Characters);
      uploadSegundoFiltro(CharactersFiltred)
    });
             
    
}

  return (
    <React.Fragment>
    <div className='encabezado'>
    <h1 className='title'>The Rick and Morty API</h1>
    <input type='text' className='filter_input' placeholder='Busqueda:' onKeyUp={handleChange}></input>

    <div className='containerButtons'>
      <button className='button' onClick={handleVivos}>VIVOS</button>
      <button className='button' onClick={handleMuertos}>MUERTOS</button>
      <button className='button' onClick={handleTodos}>TODOS</button>
    </div>
     </div>
     <div className="containerCards">
    {SegundoFiltro.map((e,i) => {
    return <CharacterCard key={i} listOne={e}></CharacterCard>})}
     

     <button onClick={handleMoreCharters} className='button'>PAGINA SIGUIENTE</button>
    </div>
    </React.Fragment>
  )
}

export default App;
