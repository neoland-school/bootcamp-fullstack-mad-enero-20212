// 4- Ricky Morty App: Vamos a construir una aplicación de personajes de Ricky Morty. Para ello nos apoyaremos de un API pública que nos devuelve la información de personajes, localizaciones y episodios. Debemos construir una interfaz como la de la imagen. La información del API podemos encontrarla en el siguiente enlace (https://rickandmortyapi.com/documentation/#rest).
// Crear una app de react llamada ricky-morty-pedia
// Crear un componente CharacterCard que reciba por props la información necesario para pintar 1 card del personaje que se le pase por props
// Crear un componente CharacterList que se realice la llamada al API y pinte la lista de caracteres (los primeros 20). como se muestra en la imagen.
// Añadir al componente CharacterList un input para filtrar por nombre la lista. Además añadir 3 radio buttons  que nos permitirán filtrar por los caracteres vivos, muertos o todos.
// (Leyend) El API de caracteres solo te devuelve los primeros 20 caracteres en una llamada (a esto se le conoce como paginación). Añadir un botón al final de la lista (ver más) que cuando se pulse solicite los siguientes 20 caracteres y los añada a la lista. Cuando ya no queden más personajes (no haya mas páginas en el listado), el botón más deberá desaparecer.
// HInt para el API:
// https://rickandmortyapi.com/api/character => nos devuelve los primeros 20 personajes.
// https://rickandmortyapi.com/api/location/:id  ->  nos devuelve la información de la localización de ese id
// https://rickandmortyapi.com/api/episode/:id  -> Nos devuelve la información de un episodio concreto.

import React from 'react';
import './style.css';

//1. Creamos una card con la con la apariencia que queremos

function CharacterCard(props){
    return(
        <React.Fragment>
            <div className='card'>
                <img src="" alt="imagen de personaje" />
                <div className='card__info'>
                    <h2 className='character__name'>Macarena</h2>
                    <div className='point__spice'>
                        <div className='point'></div>
                        <h5 className='spice'>Unknown - Alien</h5>
                    </div>
                    <div className='titles'>
                        <h6 className='title__info'>Last location</h6>
                        <p className='title__answer'>Bajo un puente</p>
                    </div>
                    <div className='titles'>
                        <h6 className='title__info'>First seen</h6>
                        <p className='title__answer'>Bowling</p>
                    </div>
                
                </div>

            </div>
        </React.Fragment>
    )
}

export default CharacterCard;










