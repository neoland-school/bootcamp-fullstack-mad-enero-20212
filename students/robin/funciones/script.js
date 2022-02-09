


// EJERCICIO 1
/*
let a = prompt("primer numero")
let b = prompt("segundo numero")
let c = prompt("primer numero")
let d = prompt("segundo numero")
let e = prompt("primer numero")
let f = prompt("segundo numero")


function resta (a,b){
    
    return a-b;
}
document.write(`<p> El resultado es ${resta(a,b)} </p>`)  ;
document.write(`<p> El resultado es ${resta(c,d)} </p>`)  ;
document.write(`<p> El resultado es ${resta(e,f)} </p>`)  ;

*/

//EJERCICIO 2
 
/*

let string1 = prompt("introduzca primer string");
let string2 = prompt("Introduzca segundo string");

function longitud (str){
    return str.length%2 === 0;
}

document.write(`<p> El resultado es ${longitud(string1)} </p>`);
document.write(`<p> El resultado es ${longitud(string2)} </p>`)

*/

// EJERCICIO 3

let number = prompt("introduzca un numero")

function orderedList (itemsCount){
     let htmloutput = `<ol>`;
    for(let i = 0; i<itemsCount; i++){
        htmloutput += `<li>Hola</li>`;
    }
    htmloutput += `</ol>`;
    return htmloutput;
}

document.write(orderedList(number));
document.write(orderedList(number * 2));