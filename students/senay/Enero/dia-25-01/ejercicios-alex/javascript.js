/*(Easy) crear una función que dado un número del 1 al 100 indique el porcentaje de contaminación de Madrid. 
 * Ayuso ha dicho en rueda de prensa esta mañana que cuando la contaminación supere el 40%, los coches no 
 * podrán superar los 90km/h. Si la contaminacion supera el 75% los coches no podrán superar los 70km/. 
 * La velocidad normal de una autopista es de 120km/h. Crear una función que dado un porcentaje de 
 * contaminación me indique la velocidad a la que puede ir un coche.
 */

/*
 * 1 crear function k indice el % de contamainacion
 * 2 crear comparador de contaminacion y el mnsj output de la velocidad permitida
 * 3 por default es 120km/h
 * 
 * -----------------------------------EJERCICIO 1-------------------------------------
 */

// function polutuion(polutionNumber) {
//     let vel = 0;
//     if (polutionNumber >= 45 && polutionNumber <= 75) {
//         vel = 90;
//     } else if (polutionNumber >= 75 && polutionNumber <= 100) {
//         vel = 70;
//     } else {
//         vel = 120;
//     }
//     return vel;
// }
// const resultado = polutuion(80);
// console.log(resultado);



/*
 *  Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. 
 * Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. 
 * Sacar la imagen de internet.
 */

/*
1 crear prompt
2 Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida.
3 imprimir con document     

-----------------------------------EJERCICIO 2-------------------------------------
 */

const polutionNumber = prompt('Cual es el porcentaje de contaminacion?');

function polution(polutionNumber) {
    let vel = '';

    if (polutionNumber >= 45 && polutionNumber <= 75) {
        vel = 90;
        vel = document.write('<img src="velocidad/90km.png" alt=""></img>')
    } else if (polutionNumber >= 75 && polutionNumber <= 100) {
        vel = 70;
        vel = document.write('<img src="velocidad/70km.jpg" alt=""></img>')
    } else {
        vel = 100;

        vel = document.write('<img src="velocidad/100km.png" alt=""></img>')
    }
    return vel;
}
const resultado = polution(55);
polution(polutionNumber);

/* Crear una función que dado un string me devuelva el caracter que hay en la mitad (o el anterior a la 
mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o

-----------------------------------EJERCICIO 3-------------------------------------
*/
// let word = prompt('Escriba radar o hola:');

// function wordWidth(half) {

//     if (half.legth % 2 === 0) {
//         document.write('half.charAt(half.length / 2) - 1');
//     } else {
//         document.write(half.charAt(half.length / 2));
//     }

// }

// let n = prompt('Escriba un palabra');
// wordWidth(n);

/**
 * Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. 
 * EJ: hola -> aloh
 */

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// document.write(reverseString('hello'));


/*
 *  Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel 
 * que se lee igual de izquierda a derecha como de derecha a izquierda. EJ: radar. Pista: Utilizar la 
 * función del ejercicio 4.
 */