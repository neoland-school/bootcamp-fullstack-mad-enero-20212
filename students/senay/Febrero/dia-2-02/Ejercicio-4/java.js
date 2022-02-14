/*
 *  .Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  
input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá 
mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá 
nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe 
vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)
 */

// Lets imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href"> element is in the document
// var anchor = document.querySelector("myAnchor");
// var result = anchor.href; // Returns: 'https://developer.mozilla.org/en-US/Location/href'

const texto = document.querySelector('#text');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#btnIndex');

btn.addEventListener('click', e => {

    localStorage.setItem('user', texto.value);
    localStorage.setItem('password', pass.vale);
    location.href = 'user.html';
    e.preventDefault();
});

// -----------------------  segunda parte  ----------------------
// const botonUser = querySelector('#use');

// let getTexto = localStorage.getItem('texto');
// let p = document.createElement('p');
// document.body.appendChild('p');

// userBtn.addEventListener('click', e => {
//     history.back;
// })