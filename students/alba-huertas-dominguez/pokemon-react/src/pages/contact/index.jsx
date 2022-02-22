import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonNav from '../../components/pokemonnav';
import './stylesheet.css'

function Contact() {
    const [msgok,updateresponse] =useState(false);
    let navigate = useNavigate();

    const handlesubmit = e =>{
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/ahuertasdominguez@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: e.target.nombre.value,
        email: e.target.email.value,
        message:'te has registrado correctamente'
    })
})
    .then(response => response.json())
    .then(data => {
        updateresponse(true)
      
        setTimeout(() => {
            navigate('/')
           
    }, 5000);}) 



    .catch(error => console.log(error));

    }
 
    


     


    


    return (

     
        
        <div>
            <PokemonNav></PokemonNav>
     
            <form onSubmit={handlesubmit} className='formulario' >
        <label className='label' htmlFor="n">Nombre</label>
        <input className='input'type="text" name="nombre" id="n" required></input>
        <label className='label'htmlFor="c">Email</label>
        <input className='input'type="email" name="email" id="c" required></input>

       <button type='sumbit' className='env'>Enviar</button>

    </form>
    {   msgok ? <h2 className='texto'> Te has registrado correctamente!</h2>:""
        
        
    }
        </div>
    )
}

export default Contact



