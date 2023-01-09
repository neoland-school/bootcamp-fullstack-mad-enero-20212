import React from 'react';
import './style.css';

function Greeting(props) {
    return (
        <React.Fragment>
            <h1>Hola {props.name}</h1>
            {props.extended ? <p>Bienvenido a estas clases de react alucinantes</p> : ''}
        </React.Fragment>
    )
}

export default Greeting;