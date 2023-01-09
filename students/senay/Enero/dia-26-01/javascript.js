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
// document.write(suma(a, b));

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
let y = ['hola ', 'Mundo']
let n = 123;

function prueba(aray) {

    return typeof aray === 'object'

}

document.write(prueba(n));

// Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10
// o false en caso contrario.(easy)   ej5

// let diesNuemros = [22, 3, 6, 7, 8, 9, 0, 7, 4, 6];
// let diesNuemrosMenor = [1, 34, 64, 74, 84, 94, 44, 74, 44, 46];
// let diesNuemrosMayor = [33, 34, 64, 74, 84, 94, 44, 74, 44, 46];
// let see = [40, 50, 80, 80, 66, 30, 30, 50, 70, 80];

// function n10(parametro) {

//     for (let i = 0; i < 10; i++) {
//         if (parametro[i] <= 10) {
//             return false; // si alguno es menor o igual se parara y devolvera false
//         }
//     }
//     return true; // continuo de arriba... si no seguira hasta el final y si todos so mayores devuelve true
// }
// document.write(n10(see));

/**
 * Crea una función que reciba un array y una palabra y devuelva true o false 
 * si palabra existe o 
 * no dentro del array.(easy)
 */

let a = ['elAray'];
let b = 'laPalabra';

function funky(parametro1, parametro2) {

    for (let i = 0; i < parametro1.length; i++) {
        if (parametro1[i] === word)
            return true
    }

}