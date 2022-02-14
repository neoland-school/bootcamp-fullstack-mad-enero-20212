/**
 * . Crea un input que capture el evento del teclado (buscar eventos del teclado, keyD...) y 
 *    muestre en un P debajo del input  las teclas que estas escribiendo.
 */


const copyIn = document.querySelector('input');
const p = document.querySelector('.textid');

copyIn.addEventListener('keydown', e => {
    console.log(e.key); //el e se el la var temp k hace la function, y el key es la letra cual haz tocado al escribir
    // y esta alojada al mirar el console abriendo la flecha en KEY (como accedes a object)
    p.textContent += e.key;
});