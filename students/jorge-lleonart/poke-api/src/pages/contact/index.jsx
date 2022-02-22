import { useState } from 'react';
import './style.css'


function Contact() {

    const [msgOk, updateResponse] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`https://formsubmit.co/ajax/jkokeito@gmail.com`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.name.value,
                message: e.target.textarea.value
            })
        })
            .then(r => r.json())
            .then(a => { 
                console.log(a)
                updateResponse(true)})

            .catch(error => console.log(error));
    }


    return (
        <section>
            <h1>Contacto</h1>
            {
                msgOk ? <p>Se ha enviado el mensaje correctamente</p>
                    : ''
            }
            <form onSubmit={handleSubmit} className="formulario">
                <input name="nombre" type="text" placeholder="Introduzca su nombre" />
                <input name="email" type="email" placeholder="Introduzca e-mail" />
                <textarea name="textarea" placeholder="Introducir consulta" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}
export default Contact;