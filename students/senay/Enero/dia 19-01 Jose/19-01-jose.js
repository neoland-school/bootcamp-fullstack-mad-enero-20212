// Crear dos variables numéricas y realizar su suma, resta multiplicación y división, imprimir por pantalla los dos números con la operación, 
// el igual y el resultado.
document.write(`<h2>Ejercicio-1 de Jose  (19-01)</h2>`);
let a = 20;
let b = 10;

document.write(`<p>La suma es; ${a} + ${b} = ${a + b}`);
document.write(`<p>La resta es; ${a} - ${b} = ${a - b}`);
document.write(`<p>La suma es; ${a} * ${b} = ${a * b}`);
document.write(`<p>La suma es; ${a} / ${b} = ${a / b}`);

document.write(`<h2>Ejercicio-2 de Jose  (19-01)</h2>`);

// Crear dos variables string y concatenarlas con el operador y luego repetir la operación con 
// plantillas literales, imprimir por pantalla el resultado.ultado.
let nombre = "Senay";
let apellido = "Rafetov";

document.write(`Mi nombre es: ${nombre} ${apellido}`);


document.write(`<h2>Ejercicio-3 de Jose  (19-01)</h2>`);
//Imprimir por pantalla la longitud del string resultante del ejercicio anterior.

let result = "nombre" + "apellido";
document.write(`La longitud de mi nombre es: ${result.length} caracteres.`);


// Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por 
// pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".

document.write(`<h2>Ejercicio-4 de Jose  (19-01)</h2>`);

let celsius = prompt('Escriba los Celsius grados para convertir:');
let f = celsius * 1.8 + 32;

document.write(`${celsius}ºC son ${f}`);


document.write(`<h2>Ejercicio-5 de Jose  (19-01)</h2>`);
// Con el ejercicio de la calculadora de grados celsius, imprimir si una variable en ºC temperatura 
// esta es mayor de 87 ºF.

if (celsius > 87) {
    document.write(`Los ${f}ºF son mayor que los ${celsius}ºC`);
}
/* else if (celsius) {
document.write(`Los ${f}ºF son menor que los ${celsius}ºC`);
}
*/
document.write(`<h2>Ejercicio-6 de Jose  (19-01)</h2>`);

// Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de 
// operadores de compracion pintar por pantalla true y luego false.