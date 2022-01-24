/*
4. Imprime por pantalla el siguiente
 patron, el cual va a depender del numero
  que pases por prompt, usaremos CSS para
   la maquetación (una vez terminado y 
    mediante animation usando @keyframes 
    haz que el triangulo se desplace 
    hasta el otro punto de la pantalla 
    de manera infinita). 
*/

const DIMENSION = parseFloat(prompt('Escoja un numero del 1 al 100;'));
for ( let i = 0; i < DIMENSION ; i++) {
   let asterisco = '*';
   for ( let j = 0; j<i ; j++) {
   asterisco+='*'};
   document.write(asterisco, '<br>')
}
for ( let k = DIMENSION; k >= 0; k--) {
    let asterisco = '*';
    for ( let l = 0; l<k ; l++) {
        asterisco+='*'};
        document.write(asterisco, '<br>');
    }

