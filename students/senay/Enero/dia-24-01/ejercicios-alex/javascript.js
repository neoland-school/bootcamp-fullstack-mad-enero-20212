/*1. Crear una función que devuelva la resta de dos números. Llamad a la función 3 veces con valores 
distintos y pintar los resultados en un p cada uno

document.write('<h2>Ejercicio-</h2>');
document.write('<p style="font-weight:bold;"></p>');
document.write(`<p class="sub";</p>`)
document.write(`<span></span>`);
*/
document.write('<h2>Ejercicio-1</h2>');

function resta(a, b) {
    return a - b;
}

document.write(`<p>${resta(10, 5)}</p>`);
document.write(`<p>${resta(3, 3)}</p>`);
document.write(`<p>${resta(66, 33)}</p>`);

//  fin ej1

document.write('<h2>Ejercicio-2</h2>');
document.write('<p style="font-weight:bold;">Crear una función que dado un string devuelva si el string tiene longitud par o impar. Solicitar 2 strings al usuario y pintar la longitud en p</p>');
// let word1 = prompt('Escriba una palabra');
// let word2 = prompt('Escriba otra palabra');

// function esLongitudPar(str) {
//     return str.lenght % 2 === 0;
// }

const isLengthEven = str => str.length % 2 === 0;

let userString = prompt('Introduzca una frase o palabra');
document.write(`<p>${isLengthEven(userString)}</p>`);
userString = prompt('Introduzca una frase o palabra');
document.write(`<p>${isLengthEven(userString)}</p>`);



// let userString = prompt('Introduzca una frase o palabra');
// document.write(`<p>${isLengthEven(userString)}</p>`);
// userString = prompt('Introduzca una frase o palabra');
// document.write(`<p>${isLengthEven(userString)}</p>`);