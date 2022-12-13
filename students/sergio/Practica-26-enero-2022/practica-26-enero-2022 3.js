
// EJERCICIO 1 //
document.write(` <br> Ejercicio 1 - Tarde <br>` )

let a = [prompt('Escriba aqui una candera, separada de comas'), prompt('Escriba aqui una candera, separada de comas')];

document.write(`Array a: ${a}`)



/*
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

/* Esta array revibe un array y un numero, y debe hacer un array de arrays culla longitud sea igual a n.
arr = [1,3,4,6,2,3] n = 3
subArr = []
i = 0 -> subArr = [1]
i = 1 -> subArr = [1,3]
i = 2 -> subArr = [1,3,4]
subArr = [] -> ¿Cúando hacer este cambio? -> op1: Si la length del subArr === n
                                          -> op2: Si el (i+1) % n = 0 o i%n === n-1
i = 3 -> subArr = [6]
i = 4 -> subArr = [6,2]
i = 5 -> subArr = [6,2,3]

1. Creo un array y un subarray para los grupos.
2. Recorro el array de entrada añadiendo el subArray el elemento i.
3. Si el grupo esta lleno (op1 u op2) -> el subarray lo almaceno en el resutado y reinicio el subarray.
4. Devuelvo el array resultado.
*/


function separando(a,b) {
    const arrayA = []; //paso 1
    let subArray = []; // esta linea tiene que ser let, porque no se puede reasignar const

    for(let i = 0; i<a.length; i++) {
        subArray[subArray.length] = a[i]; // paso 2
        if(i%n === n-1 || i === arr.length-1) { //paso 3  // i === arr.length-1 es para la ultima vuelta, para cuando no conincida el numero de todos los arrays.
         arrayA[arrayA.length] = subArray; // añado al subarray en la ultima
         subArray = []; // lo inicializo para generar el siguiente grupo
        }
    }
    return arrayA; // paso 4. Array de arrays
}





    // IVAN PART //

function divideArray(arr,n){
    let long = arr.length;
    let arr2=[];
/* Creo mi array de arrays con 2 bucles anidados. En el primer bucle
   recorro las posiciones del primer array. En el segundo lleno las posiciones
   del segundo array.
*/
/*/Este primer bucle va desde 0 hasta el número entero que resulta de dividir la
 longitud del array de entrada entre el número de arrays que queremos. Este
   bucle se ejecuta tantas veces como posiciones tiene mi primer array. Si tengo
   un array de entrada de 9 posiciones y quiero agrupar en subarrays de 5 posiciones,
   este bucle se ejecuta 9/5= 1.8, que redondeando al superior, serían 2 veces.
   Dentro de este bucle tengo 2 condiciones.
   LA primera se ejecuta cuando un parámetro longitud sea inferior al número de entrada n.
   Esta variable se actualiza cada vez que entra en el if. Esto es, tantas veces como numeros
   enteros haya de la división de la longitud entre el parámetro n. Para el ejemplo anterior
   9/5= 1.8 se ejecutaría una sola vez. Ya que al principio long=9 pero despues de actualizarse
   long=9-5=4 y ya no entraría en el if.
   Es decir, ahora tengo que crear un array con tantas posiciones como resto tenga la división de
   9/5=4.
   Resumiendo, el primer subarray tendra n posiciones, las indicadas con el parámetro de entrada (5)
    y el segundo, para este caso concreto, las sobrantes, 4
*/
    for(let i=0;i<Math.ceil(arr.length/n);i++){
       if(long>=n){
           for(let j=0;j<n;j++){
               arr2[i]= Array(n);    
           }
           long = long - n;
       }else if(long>0){
           for(let k=arr.length%n; k>=arr.length%n;k--){
               arr2[i]=Array(arr.length%n)
           }
       }
    }
//El siguiente paso es recorrer ese array que acabo de crear asignandole los valores correspondientes.
//los bucles van a ser iguales, pero ahora modificaré los valores de las posiciones de mi nuevo array.
   long = arr.length; //inicializo el valor de la longitud de nuevo a la longitud de mi array de entrada
let counter = 0; //introduzco una variable counter que va a leer la posición de mi array de llamada a la función
    for(let h=0;h<Math.ceil(arr.length/n);h++){
       if(long>=n){
           for(let p=0;p<n;p++){
               arr2[h][p]= arr[counter];
               counter++
           }            
        }else if(long>0){
           for(let q=0; q<arr.length%n;q++){
               arr2[h][q]=arr[counter]
               counter++
           }
                    }
        long = long - n;
    }
       return arr2
}



// ULTIMO EJERCICIO //



function sortAsc(arr) {
    for( let i = 1; i<arr.length; i++){
        for(let j=0; j.arr.length-i; j++){
            if(arr[j]<arr[j+1]) {
                //si es menor, cambiamos para que los menosres se vaya al final
                const aux = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = aux
            }
        }
    }
    return arr;
}