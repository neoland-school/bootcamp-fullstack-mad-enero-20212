import logo from './logo.svg';
import './App.css';
import PokemonList from './pages/pokemonlist';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/details';
import Contact from './pages/contact';
import NotFound from './pages/notfound';
import PokemonNav from './components/pokemonnav';





function App() {




  return (
    <React.Fragment>
   
    <BrowserRouter>

   

    <Routes>


      <Route path='/' element={<PokemonList></PokemonList>}></Route>
      <Route path='/details/:id' element={<Details></Details>}></Route> 
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/*' element={<NotFound></NotFound>}></Route>




  </Routes>
  </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
