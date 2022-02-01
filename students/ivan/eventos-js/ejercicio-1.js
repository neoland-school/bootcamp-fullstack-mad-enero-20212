/*
1. crear un archivo HTML que tenga un div vacío y un boton 
(añadir). Cada vez que pulse en el botón se debe añadir un 
p con el texto añadido desde JS dentro del div.
*/

const boton = document.querySelector('button');
const container = document.querySelector('.container');

//creo mi función de click

const addP = () => {
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Voy a añadir un párrafo';
    container.appendChild(parrafo)
};


//añado el evento al button
boton.addEventListener('click', addP);

/*
2. Contador: Crear un HTML con un botón  (-), un Parrafo 
y otro botón (+). El p inicialmente mostrará 0. Cuando pulse
 en el "+" se deberá sumar uno al valor del p. Cuando pulse en 
 el "-" se deberá restar 1.
*/

const botonSuma = document.querySelector('.suma');
const botonResta = document.querySelector('.resta');

const resultado = document.querySelector('.result');

const plusP = () => {

    resultado.textContent ++;
    
}

const minusP = () => {
 
    resultado.textContent --;

}

botonSuma.addEventListener('click',plusP);

botonResta.addEventListener('click',minusP);

/*
3. Crea un input que capture el evento del teclado
 (buscar eventos del teclado, keyD...) y muestre en 
 un P debajo del input  las teclas que estas escribiendo.
*/

//Como reto: String.fromCharCode(num1, num2, ..., numN);
//obtengo el keyCode y lo paso a caracteres.

const input = document.querySelector('.input');
let str = '';
const captureEvent = (a) => {
    console.log(a);
    str += a.key
    const p = document.createElement('p');
    p.textContent = str;
    document.body.appendChild(p)
    
}

input.addEventListener('keyup', captureEvent)


