/*
// EJERCICIO 1 //
document.write(` <br> Ejercicio 1 - Tarde <br>` )

let a = [prompt('Escriba aqui una candera, separada de comas'), prompt('Escriba aqui una candera, separada de comas')];

document.write(`Array a: ${a}`)


// EJERCICIO 2 //
document.write(` <br> Ejercicio 2 - Tarde <br>` )

let b = ['Hola ', 'buenos dias '];
let c = ['Bootcamp ', 'Neoland '];

function concatenacion(a,b) {
    document.write(a+b)
}

document.write(`Array 1: ${b} <br>`);
document.write(`Array 1: ${c} <br>`);
concatenacion(b,c);

// EJERCICIO 3 //
document.write(` <br> Ejercicio 3 - Tarde <br>` )

let subgenerosRock = ['punk', 'metal', 'hardcore'];
let generos = [subgenerosRock, 'pop', 'country'];

let banda = ['metallica', generos[0][1]]

document.write(`Banda: ${banda[0]} - Subgenero: ${banda[1]}`);

// EJERCICIO 4 //
document.write(`Ejercicio 4 - Tarde <br>`)

let x = [1, 2, 3]

function trueorfalse(a) {
    if (typeof a === 'object' ) {
        document.write('true')
    } else {
        document.write('false')
    }
}

trueorfalse(x);

// EJERCICIO 5 //
document.write(` <br> Ejercicio 5 - Tarde <br>`)

function arrayParImpar(a) {
    contador = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] > 10) {
            contador++
        } else {
            contador = contador
        }
    }
    if (contador >= 10) {
        document.write('true')
    } else {
        document.write('false')
    }
}

let cadena = [12, 13, 4, 15, 16, 17, 18, 19, 20, 21];
debugger;
arrayParImpar(cadena);

// EJERCICIO 6 //
document.write(` <br> Ejercicio 6 - Tarde <br>`)

function iguales(a,b) {
    contador = 0;

    for( let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            contador++
        } else {
            contador = contador;
        }
    }
    if(contador > 0) {
        document.write('true')
    } else {
        document.write('false')
    }
}

let cadenaA = ['Pedro', 'Pablo', 'Antonio'];
let palabraA = 'Antonio';

iguales(cadenaA,palabraA);

// EJERCICIO 7 //
document.write(` <br> Ejercicio 7 - Tarde <br>`)

let orden = [22, 46, 33, 11, 26];

document.write(orden.sort());

// EJERCICIO 8 //
document.write(`Ejercicio 8 - Tarde <br>`)

function mayores(a) {
    let altos = [];


    for( let i = 0; i < a.length; i++) {
        if (a[i] > 10) {
            altos[i] = a[i];
        } 
    }
    document.write(altos)
}

let cadenaMayor = [1, 12, 34, 9, 10, 23, 15];

mayores(cadenaMayor);

// EJERCICIO 9 //
document.write(` <br> Ejercicio 9 - Tarde <br>`)

function mayusPrimera(a) {
    let x = [];
    for(let i = 0; i < a.length; i++) {
        x[i]  = a[i].charAt(0).toUpperCase() + a[i].substring(1,a[i].length);
       
    }
    document.write(x)
}

let nombres = ['pedro', 'juan', 'antonio']
debugger;
mayusPrimera(nombres);

// EJERCICIO 10 //
document.write(` <br> Ejercicio 10 - Tarde <br>`)

function posicion(a,b) {
    let position = '';
    for(let i = 0; i < a.length; i++) {
        if( a[i] === b ) {
            position += `El numero esta en la posicion ${i+1} (${i})`;
        }
    }
    if (position === 0) {
        document.write( -1 )
    } else {
    document.write(position);
}}

let cadenanum = [1, 3, 5, 7, 8, 3, 2, 9, 0];
let number = 9;
debugger;
posicion(cadenanum,number);

*/
// EJERCICIO 11 //
document.write(` <br> Ejercicio 11 - Tarde <br>`)

function separando(a,b) {
    let arreglo = [];
    for(let value of a) {
        let ultimo = arreglo[arreglo.length -1]
        if(!ultimo || ultimo.length === number) {
            
        }
    }

}


