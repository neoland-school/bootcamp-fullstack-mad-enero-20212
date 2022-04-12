import React from 'react'
import './style.css'
import CardList from '../CardList/index'
import CardList2 from '../CardList/card2list.jsx'


function Card(props) {
    return (
        <div className='card'>
            <header className='card-header'>
                <h1 className='title-card'>{props.title}</h1>
                <p>...</p>
            </header>

            <CardList description='Crear un logo' description1='Definir plantilla para facturacion' description2='Definir plantilla para presupuesto' description3='Crear estimador' description4='Mockups Web Personal' description5='Brainstorming Web personal'> </CardList>

           

            <footer className='card-footer'>
                <div>
                    <p><i class="fas fa-plus"></i>Añada una tarjeta</p>
                </div>

                <i class="fas fa-credit-card"></i>
            </footer>
        </div>
    )
}

export default Card