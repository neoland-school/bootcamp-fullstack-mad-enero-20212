document.write('<h2>Ejercicio-6 de Jose</h2>');

// Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de 
// compracion pintar por pantalla true y luego false.
let a = "55";
let b = 55;

document.write(`<p>${a == b }</p>`);
document.write(`<p>${a === b }</p>`);

// Crea dos variables de tipo number distintas, ahora mediante uso de operadores de comparación y de 
// operadores lógicos debe arrojar en una linea true y luego false.

document.write('<h2>Ejercicio-7 de Jose</h2>');

let num1 = 33;
let num2 = 49;

document.write(`<p>${num1 < num2 && num2 > num1 }</p>`);
document.write(`<p>${num1 < num2 && num2 < num1 }</p>`);


document.write('<h2>Ejercicio-8 de Jose</h2>');

// Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla 
// si esa persona tiene "Obesidad de clase II" o no según la OMS.


let peso = prompt('Introduzca su peso en kg');
let altura = prompt('Introduzca su altura en cm');
let reglaObesidad = 60;
let reglaAltura = 70;
// let sobrePeso = peso >= 61;
// let menosPeso = peso <= 60


if (peso <= reglaObesidad, altura >= reglaAltura, peso > reglaObesidad, altura < reglaAltura) {
    document.write(`<p> Si tiene ${peso}kg y altura de ${altura}cm entonces Usted padece de obesidad de clase II segun la OMS </p>`);
} else
    document.write(`<p> Si tiene ${peso}kg y altura ${altura}cm entonces Usted NO padece de obesidad de clase II segun la OMS </p>`);


// document.write(`<p> Si tiene ${peso}kg entonces Usted padece de obesidad de clase II segun la OMS </p>`);
// document.write(`<p> Si tiene ${peso}kg entonces Usted NO padece de obesidad de clase II segun la OMS </p>`);


document.write('<h2>Ejercicio-9 de Jose</h2>');

// Crea  una variable mediante prompt y proporcionarle un valor numerico, 
// imprimir por pantalla si es par o impar.

let number = prompt('Introduzca un numero:');

if (number % 2 == 0) {
    document.write(`El numero introducido ${number} es Par `);
} else {
    document.write(`El numero introducido ${number} es Imparar `);
}