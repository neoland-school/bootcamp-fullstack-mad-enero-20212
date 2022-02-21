import react from 'react';
import './style.css'


function Country(props){
    return (
        <react.Fragment>
            {props.nombre.length>5 ? <div className='card'>
    <img className='imagen' src={props.img}></img>
    <div className='container-title'>
    <h1> {props.nombre}</h1>
    <p>code:{props.codigo}</p>
    <p>Dial Code:{props.dial}</p>
    <button>Buy tickets</button>
    </div>
    </div>:""}
  
    

    </react.Fragment>

    )
}

export default Country
