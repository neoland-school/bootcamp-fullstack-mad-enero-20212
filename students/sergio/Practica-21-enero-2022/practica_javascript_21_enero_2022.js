
document.write('Ejercicio 1: 1º Parte ', '<br>')

for(let i=1; i<11; i++) {
    document.write( parseInt(i), '<br>')
}

document.write('<br>', 'Ejercicio 1: 2º Parte ', '<br>')

for(let i=1; i<101; i++) {
    document.write( parseInt(i), '<br>')
}

document.write('<br>', 'Ejercicio 1: 3º Parte ', '<br>')

let i1 = 1;
while(i1 < 101) {
    document.write( parseInt(i1), '<br>');
    i1++ ;
}
document.write('<br>');
document.write('<br>', 'Ejercicio 2: 1º Parte ', '<br>')

for (i2=1; i2<101; i2++) {
    document.write( `<div class="type_a"> ${i2} </div>`)
}

document.write('<br>', 'Ejercicio 2: 2º Parte ', '<br>')
document.write('<div class="container">')
for (i3=1; i3<101; i3++) {
    if (i3 % 2 === 0) { 
        document.write( `<div class="type_a"> ${i3} </div>`)}
    else if  (i3 % 2 != 0) {
        document.write( `<div class="type_b"> ${i3} </div>`)
    }

}
document.write(`</div>`)

document.write('<br>');
document.write('<br>', 'Ejercicio 3: 1º Parte ', '<br>')


for (let i=1; i< 2**100; i+=i) {
    document.write( i + ' ,',)
}
/* Solucion Alex:
for (let i=1; i< 2**100; i **= 2) {
    document.write( i + ' ,',)
}
*/
// i*=2 //

document.write('<br>');
document.write('<br>', 'Ejercicio 4: ', '<br>')

let palabra = prompt("Introduzca una palabra: ")
let contvoc = 0;
let LONGITUD = palabra.length ;
let a = 0;
while ( a < LONGITUD ) {
/* Aqui podriamos meter un charAt en vez de poner [a] en cada palabra, adeamas seria conveniente cambiar la palabra a minuscula y no poner tantas letras condicionales */

    if ( palabra[a] === 'a' || palabra[a] === 'A' || palabra[a] === 'e' || palabra[a] === 'E' || palabra[a] === 'i' || palabra[a] === 'I' || palabra[a] === 'o' || palabra[a] === 'O' || palabra[a] ==='u' || palabra[a] === 'U' ) {
        contvoc++;
    } a++;
}
// habria que mirar como soportar todos los caracteres especiales, hay que pensar en todas las posibilidades //

document.write(`La palabra ${palabra} tiene `, contvoc, ` vocales.` )




document.write('<br>');
document.write('<br>', 'Ejercicio 5: ', '<br>')

let N = parseInt(prompt('¿De cuantas columnas y filas quiere su tablero de ajedrez [Entre 1 y 8]?'));

document.write('<div class="container_a">');
for( let f = 0; f < N; f++) {
    document.write( `<div class="container_father">`);
    for ( let c= 0; c < N; c++) {
        if ( f % 2 != 0) {
            document.write( `<div class="type_c "> ${c} </div>`)
        } else {
            document.write( `<div class="type_d "> ${c} </div>`)
        }
        
    };
    document.write('</div>')
};
document.write("</div>")


document.write('<br>');
document.write('<br>', 'EJERCICIOS DE LA TARDE', '<br>');


document.write('<br>');
document.write('<br>', 'Ejercicio 1: ', '<br>')

let num = parseInt(prompt('Escriba un numero, para mostrar su tabla de multipliacion: '))

let ti = 1;
while (ti < 11) {
    document.write(`${num} x ${ti} = `, ti * num, `<br>`);
    ti++;
}

document.write('<br>');
document.write('<br>', 'Ejercicio 2: ', '<br>')

for ( let i= 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(`${i} - FIZZBUZZ <br>` )
    }
    else if (i % 3 === 0) {
        document.write( `${i} - FIZZ <br>`)
 
    } else if (i % 5 === 0) {
        document.write(`${i} - BUZZ <br> `)
    }
}

document.write('<br>');
document.write('<br>', 'Ejercicio 3: ', '<br>')

const fil = parseInt(prompt("¿Cuántas filas desea en la tabla [1-10]?"));
const col = parseInt(prompt("¿Cuántas columnas desea en la tabla [1-10]?"))

document.write(`<table>`)
for ( let i= 0; i < fil; i++) {
    document.write(`<tr>`);
    for ( let j= 0; j < col; j++) {
        document.write(`<td></td>`);
    };
    document.write(`</tr>`)
}
document.write(`</table>`)


document.write('<br>');
document.write('<br>', 'Ejercicio 4: ', '<br>');

const DIMENSION = parseFloat(prompt('Escoja un numero del 1 al 100;'));

for ( let i = 0; i < DIMENSION ; i++) {
    let asterisco = '*';
    for ( let j = 0; j<i ; j++) {
    asterisco+='*'};
    document.write(asterisco, '<br>')
 }

for ( let i = DIMENSION; i >= 0 ; i--) {
    let asterisco = '*';
    for ( let j = 0; j<i ; j++) {
    asterisco+='*'};
    document.write(asterisco, '<br>')
 }