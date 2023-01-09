import logo from '../../images/imagen-dead.jpg';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useState } from 'react';


/**
 * Una vez que tenemos nuestro backend y probado con postman, vamos a construir una interfaz para para usarlo. Para ello construiremos una app en react con lo siguientes diseños:
Cuando haga click en un libro iremos al detalle donde podremos ver todos los detalles del libro.

La imagen de los libros de momento la podemos tener en una carpeta img dentro de la carpeta public de react.
 *
 */

function BookHeader() {

    let [userInput, updateUserInput] = useState([]); // 

    const handleSubmit = e => {
        e.preventDefault(); // preveemos el comportamiento por defecto del formulario
        const userInputUppercase = e.target.inputISBN.value.toUpperCase(); // obtenemos el valor del input en mayusculas
        updateUserInput(userInputUppercase); // forzar a react a que refresque el componente, proporcionando un nuevo valor al estado. userInput = e.target.miTexto.value.toUpperCase()
        console.log(userInput)
    };



    return (
        <header className='headerContainer'>
            <div className="containerLeft">
                <div className="textContainer">
                    <h1 className='title'>Buy and sell your textbooks for the best price</h1>
                    <p className='parraffo'>
                        From applied leterature to educational resources, we have a lot of textbooks to offer you. We provide only the best books for rent.
                    </p>
                </div>

                <Form onSubmit={handleSubmit} className='form-container'>
                    <Form.Control
                        name='inputISBN'
                        type="search"
                        id="search"
                        placeholder='Search for ISBN number'
                        className='searchIsbn inputs'
                    />

                    <Form.Control
                        type="submit"
                        id="submit"
                        value="Search"
                        className='searchInput inputs'
                    />
                </Form>
            </div>
            <div className="containerRight">
                <img src={logo} alt="logotipo"></img>
            </div>


        </header>

    );
}

export default BookHeader;