import { useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonNav from '../../components/pokemonnav';
import './stylesheet.css'

function Contact() {
    let [user,updateuser]= useState('');

    const handlesubmit = e =>{
        e.preventDefault();
        updateuser(e.target.email.value);
        console.log(user)


    }


    return (

        
        <div>
            <PokemonNav></PokemonNav>
            <form className='formulario' method='POST' action="https://www.gmail.com/" target="_blank">
        <label className='label' htmlFor="n">Nombre</label>
        <input className='input'type="text" name="nombre" id="n" required></input>
        <label className='label'htmlFor="c">Email</label>
        <input className='input'type="email" name="email" id="c" required></input>
        {/* <input type="hidden" name="req_address2" value="1" input name="email" /> */}

        <button type='sumbit'  className='env'>Enviar</button>
    



    </form>
        </div>
    )
}

export default Contact



