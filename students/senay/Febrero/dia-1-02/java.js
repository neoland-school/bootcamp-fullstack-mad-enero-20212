/**
 * crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se 
 * debe añadir un p con el texto añadido desde JS dentro del div.
 */


// const parrafo = document.createElement('p');
// parrafo.textContent = 'Soy un parrafo';
// parrafo.appendChild('contenedor');

const contenedor = document.querySelector('.container');
const button = document.querySelector('.btn')


const masP = () => {
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Soy un parrafo';
    contenedor.appendChild(parrafo);
};
button.addEventListener('click', masP);