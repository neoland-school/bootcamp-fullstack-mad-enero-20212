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

const DIMENSION = parseInt(prompt('Escoja un numero del 1 al 100;'));

let htmlOutput = `<div class="container">`;
for ( let i = 0; i < DIMENSION ; i++) {
    htmlOutput+= `<div class="row">`
  
   for ( let j = 0; j<=i ; j++) {
       htmlOutput+= `<div class="block bg_asc"></div>`;
}
    htmlOutput+= `</div>`;
}

for(let i=DIMENSION; i>=0; i--){
    htmlOutput+=`<div class="row">`;
    for(let j=0; j<i;j++){
        htmlOutput+=`<div class="block bg_desc"></div>`;
    }
    htmlOutput+= `</div>`;

}
htmlOutput+= `</div>`;

document.write(htmlOutput);



