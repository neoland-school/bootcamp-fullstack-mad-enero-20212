import logo from './logo.svg';
import './App.css';
import HtmlButton from './Components/Button';
import Avatar from './Components/Avatares';
import React, { useState,  } from 'react';


function App() {

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

  let [contactos, uploadContactos] = useState(contacts);
  let textoinput = "";
  const handleWriteText = e =>{

    uploadContactos(contactos = contacts.filter(bs => bs.name.substring(0, e.target.value.length) === e.target.value));
  }

  let [nombre, uploadNombre] = useState('')
  let [clase_offline, uploadClass] = useState('invisible')

  function offline(name){
    console.log(name)
    if(name === 'borrar'){
      
      uploadNombre('')
      uploadClass('invisible')
      
    } else {
        setTimeout(() => {
          uploadNombre('')
           uploadClass('invisible');
        }, 2000);
          uploadNombre(name);
          uploadClass('visible');

          

      
    }}
   

  return (
    <React.Fragment>
      <h1 className='title'>CONTACTS</h1>
      {<h3 className={clase_offline}> {nombre} is offline</h3>}
      <div>
      <input type="text" name="input_text" placeholder='buscar contacto' onKeyUp={handleWriteText}></input>

      {contactos.map((c, i) => <Avatar state={offline} key={i} img={c}></Avatar>)}
      </div>
    </React.Fragment>
  )

}

export default App;
