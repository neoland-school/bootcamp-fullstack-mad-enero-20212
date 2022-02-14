import React, {useState} from 'react';


function FormsExample() {
    let [userInput, updateUserInput] = useState(''); // necesito que esta variable refresce el DOM, por eso la meto en un useState
    let [userColor, updateUserColor] = useState('white'); // inicializo el color a blanco
    // function que gestiona el submit
    const handleSubmit = e => {
        e.preventDefault(); // preveemos el comportamiento por defecto del formulario
        const userInputUppercase = e.target.miTexto.value.toUpperCase(); // obtenemos el valor del input en mayusculas
        updateUserInput(userInputUppercase); // forzar a react a que refresque el componente, proporcionando un nuevo valor al estado. userInput = e.target.miTexto.value.toUpperCase()
        updateUserColor(e.target.miColor.value); // actualizo el color con el valor del input de color
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="MI_INPUT_UNICO" >Esto es una label</label>
                <input name="miTexto" minLength={6} id="MI_INPUT_UNICO" type='text' placeholder="hola esto es un pl"></input>
                <input name="miColor"  type='color'></input>
                <button type="submit">Aceptar</button>
            </form>
            <p>El usuario ha escrito: <span style={{ color: userColor }}>{userInput}</span></p>
        </React.Fragment>
    )
}

export default FormsExample;