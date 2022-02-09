
// EJERCICIO 1

/*
    1. Pedir numero de 1 al 100 que indique contaminacion
    2. Si supera el 40 los coches no podran pasar de 90kmh
    2. Si supera el 75 los cohes no podras pasar de 75kmh
    3. Velocidad  de la autopista 120kmh . Crear funcion que dado un % de contaminacion indique la velocidad que puede ir un coche.


*/

/*

let n = parseInt(prompt("introduzca la contaminacion"));
*/

/*
function contaminacion(n) {
    if (n < 40){
        
        return `Ve como maximo a 120`

    }else if (n < 75){
        return `Ve como maximo a 90 `
    }else if (n < 100){
        return `Ve como maximo a 75`
    }
}

document.write (contaminacion(n))

*/


//EJERCICIO 2
/*
    Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. 
    Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. Sacar la imagen de internet.
*/

/*

function contaminacion(n) {
    if (n < 40){
        return `<div>
        <img src="./img/120.jpg">
                </div>`;

    }else if (n < 75){
        return `<div>
        <img src="./img/90.png">
                </div>`;
    }else if (n < 100){
        return `<div>
        <img src="./img/75.jpg">
                </div>`;
    }
}

document.write (contaminacion(n))

*/

// EJERCICIO 3 

/*

let word = prompt("introduce palabra")

function devolver (palabra){
    return ` La letra es ${word.charAt(parseInt((word.length -1)/ 2))}`
 }

document.write(devolver(word));

*/

// EJERCICIO 4 
/*

let palabra = prompt("Introduzca una palabra");

function alreves(word){
    return String(word.toString().split("").reverse().join(""))
}

document.write(alreves(palabra))

// EJERCICIO 5

let palabra = prompt("Introduzca una palabra");

function alreves(word){
    if(palabra === String(word.toString().split("").reverse().join(""))){
        return `${palabra} es palindromo`
    }else if(palabra !== String(word.toString().split("").reverse().join(""))){
        return `${palabra} no es palindromo`
    }
}

document.write(alreves(palabra))

*/

// EJERCICIO 8 

/*

let numero = parseInt(prompt("Introduzca un numero"));

function numeroAlreves (number){
    return Number(number.toString().split("").reverse().join(""))
}

document.write(numeroAlreves(numero));

*/

// EJERCICIO 9 

/*

let numero = parseInt(prompt("Introduzca un numero"));

function numeroAlreves (number){
    if(numero === Number(number.toString().split("").reverse().join(""))){
        return `${numero} es capicuo`
    }else if(numero !== Number(number.toString().split("").reverse().join(""))){
        return `${numero} no es capicuo`
    }
}

document.write(numeroAlreves(numero));

*/

// EJERCICIO 10 

let numeroPrimo = prompt("escriba un numero");

let resultPrimo;
resultPrimo = numeroPrimo % 1 === 0;

let resultPrimo2;
resultPrimo2 = numeroPrimo % numeroPrimo === 0 ; 

function primos (n){
    
    for (i = 2 ; i < numeroPrimo ; i++){
        
    }
}

document.write(primos(numeroPrimo));

