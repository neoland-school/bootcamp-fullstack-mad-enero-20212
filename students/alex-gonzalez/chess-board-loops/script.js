/**
 * 1. solicitar al usario un numero
 * 2. Ese numero será el numero de filas y de columnas, por lo que tengo que generar una estrutura HTML
 *    de n divs (filas) que dentro tienen n divs (columnas)
 *    Ejemplo de n === 2
 *      <div class="board">
 *          <div class="row">
 *             <div class="col"></div>
 *             <div class="col"></div>
 *          </div>
 *          <div class="row">
 *             <div class="col"></div>
 *             <div class="col"></div>
 *          </div>
 *      </div>
 * 
 * 3. Recorremos n veces para construir n .row. Para cada row, debo recorrer n veces creando cols como hijas. 
 *    Esto es un claro ejemplo de loop anidado, es decir, un bucle dentro de otro bucle
 * 
 */

const SIZE = Math.abs(parseInt(prompt('Introduzca el numero de columnas del tablero')));
let htmlOutput = '<div class="board">';
for(let i=0; i<SIZE; i++){ // recorro SIZE veces para crear SIZE filas
    htmlOutput+='<div class="row">'; // creo una fila vacía
    for(let j=0; j<SIZE; j++){ // recorro SIZE veces para crear SIZE columnas dentro de una fila
        htmlOutput += '<div class="col"></div>';
    }
    htmlOutput+='</div>';
}
htmlOutput += '</div>'; // ciero el div del board

document.write(htmlOutput);

