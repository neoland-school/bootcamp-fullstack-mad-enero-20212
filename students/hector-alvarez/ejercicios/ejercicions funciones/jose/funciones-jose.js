/*
1. Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function.


const hector = a => {document.write (a)};
hector(8);


----------------------------

2.Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, usar function declaration.

paso 1 - escribir dos prompt



let a = prompt ("introduce true or false");
let b = prompt ("introduce tue or false");

function identificacion (a,b){ 
    let n = a === 'true';
    let s = b === 'true';
    return document.write ( n && s );

}

identificacion (a,b)


-----------------------------------------


3. Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, usar function expression.

*/

let num = prompt("introduce un numero");

function b (a) { 
    let reverse = "";
    for (let i = a.length ; i>=0 ; i--) {
        reverse += a.charAt (i) 
    }
    return reverse;
    
}

document.write (b(num));









 