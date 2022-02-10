/*
 * Crea el siguiente formulario ahora vamos a recuperar sus datos, cuando terminemos 
 * de llenar el formulario y le demos al boton de submit, se debe mostrar debajo en 
 * tres P, el nombre, el email y el número, para esto es necesario que cancelemos el 
 * evento en nuestra función (usar e.preventDefault() ). (editado) 
 */

const inputText = document.querySelector('#text');
const inputEmail = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');
const inputButton = document.querySelector('#button');

inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('inputButton.value');

});


// const copyIn = document.querySelector('input');
// const p = document.querySelector('.textid');

// copyIn.addEventListener('keydown', e => {
//     console.log(e.key); //el e se el la var temp k hace la function, y el key es la letra cual haz tocado al escribir
// y esta alojada al mirar el console abriendo la flecha en KEY (como accedes a object)
//     p.textContent += e.key;
// });