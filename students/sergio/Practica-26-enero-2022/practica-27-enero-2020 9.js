/*
// EJERCICIO 1 //
document.write(` <br> Ejercicio 1 - Tarde <br>` )

function concatenar(a,b) {
    let arr = a.concat(b);
    return document.write(arr);
}


const arr1 = ['Pepino, ', 'Tomate, ', 'Aguacates ']
const arr2 = ['Lista', 'de la compra:']
concatenar(arr2,arr1)


// Ejercicio 2 //
document.write(` <br> Ejercicio 2 - Tarde <br>` );
const x = 12;
const y = [[1, 2, 3, 4]];

document.write(Array.isArray(y));

// le he preguntado si hay una cadena dentro de otra //

// EJERCICIO 3 //
document.write(` <br> Ejercicio 3 - Tarde <br>` );

const arr01 = [11,22,33,41,52,63,72,81,19,110];
const numcomp = 10;

const may10 = (x) => x > numcomp;

document.write(arr01.every(v => v>numcomp))

document.write(arr01.every(may10));

// EJERCICIO 4 //
document.write(` <br> Ejercicio 4 - Tarde <br>` );

const arr02 = ['banana', 'aguacate', 'limon', 'sandia'];
const palabrabusqueda = 'sandia'

const condsome = (x) => x = palabrabusqueda;

document.write(arr02.some(condsome));

// EJERCICIO 5 //
document.write(` <br> Ejercicio 5 - Tarde <br>` );

const arr03 = [9991,2837,123,101927,183732,182736,22];

document.write(arr03.sort((a, b) => a - b));

// EJERCICIO 6 //
document.write(` <br> Ejercicio 6 - Tarde <br>` );

const arr06 = [10, 2, 4,22,34,1,55,6,21];

const filtered = arr06.filter(x => x<10);

document.write(filtered);

// EJERCICIO 7 //
document.write(` <br> Ejercicio 7 - Tarde <br>` );

let arr07 = ['jose', 'maca', 'jorge'];


const nombres1= arr07.map(a =>  a.charAt(0).toUpperCase() + a.substring(1,a.length));

document.write(nombres1)
/*
const nombres2 = arr07.forEach((v,i,array) => {
    array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1,array[i].length);})

document.write(nombres2);


// EJERCICIO 8 //
document.write(` <br> Ejercicio 8 - Tarde <br>` );

const arr08 = [9991,2837,123,101927,183732,182736,22];

const numposition = 0;

const position08 = (arr08.findIndex(x => x === numposition));

document.write(position08);

// EJERCICIO 9 //
document.write(` <br> Ejercicio 9 - Tarde <br>` );

let arr09 = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal'];
debugger;

function deletedContent(a) {
    document.write(a);
    for(let i = a.length; i>0; i--){
    a.pop();
    document.write(a, '<br>')
}
}
;

deletedContent(arr09)
*/

/*
function flecha(n) {
    let a = '';
for(let i = 0; i>n; i++){
    a.push('*');
    document.write(a);
}
for(let i = n; i>0; i--){
    a.pop();
    document.write(a);
}
return a}

flecha(10);


// EJERCICIO 10 //
document.write(` <br> Ejercicio 10 - Tarde <br>` );


    

function bucles(a) {
    a.toString().split('');
    let contador = 0;
    for(let i = 0; i< a.length; i++ ){
        if(a[i] === '6' || a[i] === '9' || a[1] === '0') {
            contador ++;
        } else if (a[i] === '8') {
            contador = contador + 2;
        } else {
            contador = contador;
        }
    }
    document.write( `hay ${contador} bucles`)
}
debugger;
bucles('1898');
*/
// EJERCICIO 11 //
document.write(` <br> Ejercicio 11 - Tarde <br>` );

let palabra11 = prompt('¿Que palabra quiere buscar?');
let oracion11 = prompt('Escriba aqui una oracion: ');
/*
debugger;
let arr11 = oracion11.split(" ");
let contador = 0;
const repeticion = arr11.forEach((v) => {v === palabra11 ? contador++ : ''});
*/


function repeticion(a,b) {
    let contador = 0;
    let c = a.split(' ');
    c.forEach((v) => {
        if(v === b) {
            contador ++
        } else {
            contador = contador
        }
    })
    document.write(`la palabra se repite ${contador} veces`);
}
repeticion(oracion11,palabra11);

