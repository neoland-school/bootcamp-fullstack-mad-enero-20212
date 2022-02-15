
import './App.css';
import React, { useState } from 'react';
import Color from './components/color';
import Escribir from './components/escribir';
import Avatar from './components/avatar';
import Cabecera from './components/cabecera';
let contacts = [
  {
    img: `https://randomuser.me/api/portraits/men/1.jpg`,
    name: "pepe"
  },
  {
    img: `https://randomuser.me/api/portraits/women/2.jpg`,
    name: "carla"
  },
  {
    img: `https://randomuser.me/api/portraits/men/3.jpg`,
    name: "andres"
  },
  {
    img: `https://randomuser.me/api/portraits/women/4.jpg`,
    name: "andrea"
  },
  {
    img: `https://randomuser.me/api/portraits/men/5.jpg`,
    name: "victor"
  },
  {
    img: `https://randomuser.me/api/portraits/men/6.jpg`,
    name: "jose"
  },


];



function App() {
  // let[counter,updateCounter] = useState(5);
  // return (
  //   <div className="App">
  //     <button onClick={()=> updateCounter(++counter)}>+</button>
  //     <p>{counter}</p>
  //     <button onClick={()=> updateCounter(--counter)}>-</button>

      
  //   </div>
  // );
  return(
    <React.Fragment>
      <div>
      <Cabecera></Cabecera>
      </div>
    
    {contacts.map((v,i) =>
    <Avatar key={i} nombre={v.name} img={v.img}></Avatar>)
  }
  
  </React.Fragment>
  )
}

export default App;
