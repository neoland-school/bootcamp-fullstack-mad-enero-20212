/*
1. Solicitar un numero al usuario
2. Convertir el input a number
3. crear una variable booleana que verifique si es par o impar
4. mostrar el resultado

*/

// paso 1
let input = prompt('Introduzca un numero');
// paso 2
let n = parseInt(input);
// paso 3
let isEven = n%2 === 0;
// paso 4
document.write('Es par: ' + isEven);
