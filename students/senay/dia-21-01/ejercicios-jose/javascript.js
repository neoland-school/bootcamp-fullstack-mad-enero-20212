// document.write('<h2>Ejercicio-</h2>');
// document.write('<p style="font-weight:bold;"></p>');
// document.write(`<p class="sub";</p>`)
// document.write(`<span></span>`);
/*
la que hice con let 
let tabla = prompt('Escriba el numero 5');
for (let i = 1; i <= 10; i++) {
    document.write(`<p>${tabla} x ${i} = ${tabla * i} </p>`);}
*/


document.write('<h2>Ejercicio-1</h2>');
document.write('<p style="font-weight:bold;">Crea un programa que dado un numero mediante promt y usando el bucle WHILE, te impirma por pantalla su tabla de multiplicar de la siguiente forma: Tabla de multiplicar de 5</p>');

tab = prompt('Escriba el numero:');
let i = 1;
while (i <= 10) {
    document.write(`<p>${tab} x ${i} = ${tab * i}</p>`);
    i++;
}



// document.write('<h2>Ejercicio-2</h2>');
// document.write('<p style="font-weight:bold;">Crea un programa que recorra los números del 1-100 e imprima por pantalla :Fizz, si es multiplo de 3. Buzz, si es múltiplo de 5. FizzBuzz, si es múltiplo de 3 y 5 a la vez.</p>');

/*
.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
Fizz, si es multiplo de 3.
Buzz, si es múltiplo de 5.   
FizzBuzz, si es múltiplo de 3 y 5 a la vez.
*/

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write(`<p>${i} - FizzBuzz</p>`);
//     } else if (i % 3 === 0) {
//         document.write(`<p>${i} - Fizz</p>`);
//     } else if (i % 5 === 0) {
//         document.write(`<p>${i} - Buzz</p>`);
//     } else {
//         document.write(`<p>${i}</p>`);
//     }
// }


// document.write('<h2>Ejercicio-3</h2>');
// document.write('<p style="font-weight:bold;"> Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."</p>');

// let filas = prompt('Cuantas filas quere que contenga la tabla?');
// let columnas = prompt('Cuantas columnas quere que contenga la tabla?');

// for ()