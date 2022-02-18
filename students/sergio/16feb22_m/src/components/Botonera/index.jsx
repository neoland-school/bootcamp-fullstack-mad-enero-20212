/**
 * 3- Gestión de API. Vamos a crear un componente para poder llamar a diferentes API's. El componente debe tener una botonera para poder realizar diferentes peticiones HTTP. Además tendrá un pre para pintar la respuesta y un p para pintar el codigo HTTP de respuesta. (Tenéis ejemplo en la imagen).
POST: Cuando se pulse el botón de Post Ok se deberá realizar una llamada POST a la siguiente url (https://bootcamp.free.beeceptor.com/hello-ok) y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre . Se tiene que pintar también el código de respuesta HTTP recibido
PUT: Cuando se pulse el botón de Put Ok se deberá realizar una llamada PUT a la siguiente url (https://bootcamp.free.beeceptor.com/hello-ok) y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre .Se tiene que pintar también el código de respuesta HTTP recibido
DELETE: Cuando se pulse el botón de Delete Ok se deberá realizar una llamada DELETE a la siguiente url (https://bootcamp.free.beeceptor.com/hello-ok) y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre . Se tiene que pintar también el código de respuesta HTTP recibido
POST: Cuando se pulse el botón de Post ko se deberá realizar una llamada POST a la siguiente url (https://bootcamp.free.beeceptor.com/hello-ko) y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre .Se tiene que pintar también el código de respuesta HTTP recibido. Hint: Ojo con está que no es un 200
 */

import React from "react";
import { useState } from "react";

function Botonera() {


    let [valor, uploadValor] = useState('');
    let [statusCore, uploadStatusCore] = useState('')

    /**
     * fetch('http://text-processing.com/api/sentiment/',{
              method: 'POST',
              body: data,
            }).then(r => r.json()).then(e => uploadValor(e.label))
    
     */

    const handlePostOk = e => {
        console.log(e)
        e.preventDefault();
        fetch('https://bootcamp.free.beeceptor.com/hello-ok', {
            method: 'POST',
        }).then(r => { r.json(); uploadStatusCore(r.status) }).then(e => uploadValor(e.status))

    }

    const handlePutOk = e => {
        console.log(e)
        fetch('https://bootcamp.free.beeceptor.com/hello-ok', {
            method: 'PUT',
        }).then(r => { r.json(); uploadStatusCore(r.status) }).then(e => uploadValor(e.status))
    }

    const handleDeleteOk = e => {
        console.log(e)
        fetch('https://bootcamp.free.beeceptor.com/hello-ok', {
            method: 'DELETE',
        }).then(r => { r.json(); uploadStatusCore(r.status) }).then(e => uploadValor(e.status))
    }

    const handlePostKo = e => {
        console.log(e)
        fetch('https://bootcamp.free.beeceptor.com/hello-ko', {
            method: 'POST',
        }).then(r => { r.json(); uploadStatusCore(r.status) }).then(e => uploadValor(e.status))
    }


    return (
        <React.Fragment>
            <div>
                <button name="post_ok" onClick={handlePostOk}>POST ok</button>
                <button name="put_ok" onClick={handlePutOk}>PUT ok</button>
                <button name="delete_ok" onClick={handleDeleteOk}>DELETE ok</button>
                <button name="post_ko" onClick={handlePostKo}>POST ok</button>
            </div>
            <p>Valor: {valor}</p>
            <p>Status Code: {statusCore}</p>
        </React.Fragment>


    )

}

export default Botonera;