document.write('<h2>Ejercicio-1</h1>')

//  Solicitar al usuario un numero. Si el numero está entre el 1 y el 10 mostrarle por pantalla
// un div de 100x100px de color #8756F3

let number = prompt('Escriba un numero entre 1 y 10 y siga los que digan los Ejercicios:');
// let numberOdd = number % 2 == 0;

if ((number >= 1) && (number <= 10) && (number % 2 == 0)) {
    document.write(`<div class="div-ej-3"></div>`)
} else if (number > 10, number <= 50) {
    document.write('<h2>Ejercicio-2</h1>')
    document.write(`<div class="div-ej-2"></div>`)
}
/*
else if ((number % 2 == 0) && (number >= 1 && number <= 10)) {
    document.write('<h2>Ejercicio-3</h1>')
    document.write(`<div class="div-ej-3"></div>`)
*/
/*
else if ((number % 2 == 0) && (number >= 1 && number <= 10)) {
    document.write('<h2>Ejercicio-3</h1>')
    document.write(`<div class="div-ej-3"></div>`)
  */

/*else if (number % 2 == 0 && number >= 1, number <= 10) { 
    document.write('<h2>Ejercicio-3</h1>')
    document.write(`<div class="div-ej-3"></div>`)
}
*/
//Modificar el ejercicio anterior para que si el numero está entre 10 (sin incluir) y 50 mostrarle
// por pantalla un div de 100x100px de color #12F467



// Modificar el ejercicio anterior si el numero está entre 1 y 10 y además es par,
// el cuadrado que se pinte en vez de ser #8756F3, sea #007743