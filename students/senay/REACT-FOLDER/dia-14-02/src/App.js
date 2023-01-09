import logo from "./logo.svg";
import "./App.css";
import SumaResta from "./components/suma-resta";
import React from "react";
import GreenButton from "./components/green-button";
import CopyInput from "./components/copy-input";
import Avatar from "./components/avatar";


function App() {
  let contacts = [
    {
      img: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: "pepe",
    },
    {
      img: `https://randomuser.me/api/portraits/women/2.jpg`,
      name: "carla",
    },
    {
      img: `https://randomuser.me/api/portraits/men/3.jpg`,
      name: "andres",
    },
    {
      img: `https://randomuser.me/api/portraits/women/4.jpg`,
      name: "andrea",
    },
    {
      img: `https://randomuser.me/api/portraits/men/5.jpg`,
      name: "victor",
    },
    {
      img: `https://randomuser.me/api/portraits/men/6.jpg`,
      name: "jose",
    },
  ];
  

  return (
    <React.Fragment>
      <header>
          <h1>Contacts</h1>
          <input type="search" name="input" id="input" placeholder='busca contenido'/>
      </header>
      {/* <GreenButton></GreenButton>
      <CopyInput></CopyInput> */}
      {contacts.map((c, i) => <Avatar pole={c.img} senay={c.name} key={i}> </Avatar>)}
    
    </React.Fragment>
  );
}

export default App;
