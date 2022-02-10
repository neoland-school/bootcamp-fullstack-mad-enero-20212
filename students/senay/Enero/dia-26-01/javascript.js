// Crea un array de números por prompt e imprimelo por pantalla.(easy).
// let a = [parseFloat(prompt('Escriba numeros'))];

// document.write(`<p>${a}</p>`);


// let numeros = [];
// let n;
// for (let i = 0; i < 5; i++) {
//     n = parseFloat(prompt('escriba 5 numeros'))
//     numeros[i] = n;
// }
// document.write(`<p> ${numeros}</p>`);

/**Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays 
 * concatenados y los mostrará en el navegador.(easy) 
 */
// let a = ['hola', 'mundo'];
// let b = [' ktal'];

// function merge(parametro1, parametro2) {
//     return `${parametro1} ${parametro2}`;
// }


// document.write(merge(a, b));


// es es la suma
// let a = 5;
// let b = 7;

// function suma(c, d) {
//     return c + d;

// }
// document.write(suma(a, ));

// Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los 
// géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array 
// de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el 
// array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el 
// subgénero "metal".(easy)


// let generos = ["rock", "pop", "country"];
// let subGeneros = ["punk", "metal", "hardcore"];

// let banda = ["metalica", subGeneros[1]];
// document.write(banda);

/**
 * Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el 
 * parámetro es un array y false si es otro tipo de dato.(easy)
 */

// function prueba(aray) {

//     return typeof aray === 'object'

// }
// let y = ['hola ', 'Mundo']
// document.write(prueba(3));

// Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10
// o false en caso contrario.(easy)   ej5

// let see = [40, 50, 8, 80, 66, 30, 30, 50, 70, 80];

// function n10(parametro) {

//     let result = true;

//     for (let i = 0; i < 10; i++) {
//         if (parametro[i] < 10) {
//             result = false;
//         }
//     }
//     return result;
// }
// document.write(n10('result'));

/**
 * Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o 
 * no dentro del array.(easy)
 */

// let a = ['elAray'];
// let b = 'laPalabra';

function funky(parametro1, parametro2) {

    for (let i = 0; i < parametro1.length; i++) {
        if (parametro1[i] === word)
            return true
    }

}