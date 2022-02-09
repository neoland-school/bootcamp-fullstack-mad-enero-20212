/*
// Ejercicio 1 - Mañana//
document.write('Ejercicio 1 - Mañana')

function resta(a,b) {
    return a-b
};

etiqHtmlOpen = '<p>'
etiqHtmlClose = '</p>'

document.write(etiqHtmlOpen , resta(3,4), etiqHtmlClose);

document.write(etiqHtmlOpen, resta(121,32), etiqHtmlClose);

let a = 10;
let b = 7;

document.write(etiqHtmlOpen, resta(a,b), etiqHtmlClose);

//Ejercicio 2 - M//
document.write('Ejercicio 2 - Mañana')
debugger;
function isLenghtEven(x) {
    return x.length % 2 === 0;
}

const userStrng = prompt('Escriba aqui su palabra');
document.write('<p>', isLenghtEven(userStrng), '</p>');

const userStrng1 = prompt('Escriba aqui su palabra');
document.write('<p>', isLenghtEven(userStrng1), '</p>')


//Ejercicio 3 - M//
document.write('Ejercicio 3 - Mañana')




function printOl(x) {
   let htmlResult = '<ol>'
   for(let i = 0; i<x; i++) {
       htmlResult+= '<li> Hola </li>';
   }
   htmlResult += '</ol>';
   return htmlResult
}

const numUser = parseInt(prompt('Escoja un número para la lista: '))
document.write(printOl(numUser));
document.write(printOl(numUser*2));
*/

/*
//Ejercicio 1 - T//
document.write('Ejercicio 1 - Tarde')


function typeEnt(x) {
    let type = typeof (x);
    return type;
}

const p = 8;
document.write('El dato dado es un ', typeEnt(p))

const p = 8;
const typeEnt = (x) => typeof(p);
document.write('<p> El dato dado es un ', typeEnt(p), '</p>');

//Ejercicio 2 - T//

document.write('Ejercicio 2 - Tarde')

function andPro(a,b) {
    let y = (a === 'true') // AL SER VALORES STRING, EL && NO HACE UNA BUENA COMPARACION, EVITAR LAS COMPARACIONES CON STRINGS, EN ESTE CASO COMPARAMOS EL VALOR CON UN STRING PARA QUE NOS DE UN BOOLEANO, Y COMPARE ESTOS BOOLEANOS.
    let z = (b === 'false')
    let x = y && z;
    return x;
}

let bolea1 = prompt('Introduzca un primer boleano: ')
let bolea2 = prompt('Introduzca un segundo bolenao: ')
document.write('<p>Son iguales los dos boleanos? ', andPro(bolea1,bolea2), '</p>')


// EJERCICIO 3//
// document.write('Ejercicio 3 - Tarde')
function reves(x) {
    let a = '';
    for (let i = x.length; i >= 0; i--) {
        a += x.charAt(i)
    };
    return a
}
FUNCION EXPRESION
const reves = function(x) {
    let a = '';
    for (let i = x.length; i >= 0; i--) {
        a += x.charAt(i)
    };
    return a
}


debugger;
let number = prompt('Escriba aquí un número para devolverlo al revés:')

document.write(parseInt(reves(number)));
*/
/*
// EJERCICIO 4//
document.write('Ejercicio 4 - Tarde')

function areaRect(l,a) {
    return l*a;
}

function areaCuad(l) {
    return l*l ;
}

function areaTri(b,h) {
    return b*h;
}

function areaCirc(d) {
    let r = (d/2);
    return r*(Math.PI)
}

let lado = parseInt(prompt('Escriba aquí el largo de sus figuras: '));
let altura = parseInt(prompt('Escriba aqui la altura de sus figuras:'));
let base = parseInt(prompt('Escriba aqui la base de sus figuras'));
let haltura = parseInt(prompt('Esciba aqui la altura de su triangulo'))
let diametro = parseInt(prompt('Esciba aqui el diametro de su circulo'))
debugger;
document.write('<p>', areaRect(lado,altura), ` base del rectangulo (Lado ${lado}, altura ${altura})</p>`);
document.write('<p>', areaCuad(lado), ` base del cuadrado (Lado ${lado})</p>`);
document.write('<p>', areaTri(base,haltura), ` base del triangulo (Base ${base}, altura ${haltura})</p>`);
document.write('<p>', areaCirc(diametro), ` base del circulo (Diametro ${diametro})</p>`);


// EJERCICIO 5//
document.write('Ejercicio 5 - Tarde')

function calculadora(a,c) {
    let b = prompt('¿Qúe operacion quiere realizar (+,-,*) ?')
    if (b === "+") {
        return a + c
    } else if (b === "-") {
        return a - c
    } else {
        return a * c
    }
}
debugger;
let op1 = parseInt(prompt('Escriba aqui su primer operador: '));
let op2 = parseInt(prompt('Escriba aqui su segundo operador: '));

document.write(calculadora(op1,op2));



// EJERCICIO 6//
document.write('Ejercicio 6 - Tarde')


let isDomGitHub = (a) => (a.substring(0,14) === "https://github" ? "Pertenece al dominio" : "No pertenece al dominio")

let webUser = prompt("Escriba aqui la pagina web que quiere comprobar, no olvide inlcuir https://")

document.write(isDomGitHub(webUser))


// EJERCICIO 7//
document.write('Ejercicio 7 - Tarde')

function cuentatras(num) {
    for (let x = num; x > 0; x=x-8 ) {
        document.write(x, '<br>')
    } 
}

let y = parseInt(prompt('Escriba aqui un numero'));


document.write(cuentatras(y))



// EJERCICIO 8//
//document.write('Ejercicio 8 - Tarde')

function mdc(a,b) {
    while(b>0) {
        const c = b;
        b = a % b;
        a = c; 
    }
    return a;
}

let n1 = parseInt(prompt('Indique un numero: '));
let n2 = parseInt(prompt('Indique un numero:'));

document.write(mdc(n1,n2))

// HAY QUE CAMBIARLO //
// EJERCICIO 9//
document.write('Ejercicio 9 - Tarde')


function dibRect(a,b) {
    let x = a;
    let y = b;
    document.write(`<div style="width:${x}px; height:${y}px; border: 1px solid"></div>`)
}

const base = parseInt(prompt('Decida la base del rectangulo:'));
const altura = parseInt(prompt('Decida la base del rectangulo:'));

dibRect(base,altura)
*/
debugger;
const n = parseInt(prompt('Introduzca aqui un numero: '))

// 1. pintar n filas, y que cada una tenga n columnas.
// 1.a si la fila es la primera o la ultima, el background sera rojo.
// 1.b si la columna es la primera o la ultima, el background sera rojo.

/* <div class="row">
        <div class="circle"></div>;
        <div class="circle"></div>;
        <div class="circle"></div>;
    </div>

function drawBoard(n){
    let htmlOutput = `<div>`;
    for(let i=0; i<n; i++){
       htmlOutput+=`<div class="row">`
       for(let j=0; j<n; j++){
           htmlOutput+=`<div class="circle"></div>`;
       }
       htmlOutput+=`</div>`
    }
    htmlOutput+='</div>';
    document.write(htmlOutput);
}

drawBoard(n);
*/

/*
// EJERCICIO 10//

function dniVerFal(dni) {
    let n = parseInt(dni.substring(0,8));
    let l = dni.charAt(8);
    if ((n % 23 === 0 && l === 'T' )||( n % 23 ===  1 && l === 'R') || (n % 23 ===  2 && l === 'W') || (n % 23 ===  3 && l === 'A') || (n % 23 ===  4 && l === 'G') || (n % 23 ===  5 && l === 'M') || (n % 23 ===  6 && l === 'Y') || (n % 23 ===  7 && l === 'F') || (n % 23 ===  8 && l === 'P') || (n % 23 ===  9 && l === 'D') || (n % 23 ===  10 && l ==='X') || (n % 23 ===  11 && l === 'B') || (n % 23 ===  12 && l === 'N') || (n % 23 ===  13 && l === 'J') || (n % 23 ===  14 && l === 'Z') || (n % 23 ===  15 && l === 'S') || (n % 23 ===  16 && l === 'Q') || (n % 23 ===  17 && l === 'V') || (n % 23 ===  18 && l === 'H') || (n % 23 ===  19 && l === 'L') || (n % 23 ===  20 && l === 'C') || (n % 23 ===  21 && l === 'K') || (n % 23 === 22 && l === 'E')) {
        return document.write('DNI VERDADERO')
    } else {
        return document.write('DNI FALSO')
    };
} 
debugger;
let dniUser = prompt('Escriba aqui su DNI (Letra en mayusculas):');
dniVerFal(dniUser);

*/
