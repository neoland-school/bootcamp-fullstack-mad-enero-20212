/*
(Easy) Ejercicio 1
- Crear una función que dado un número del 1 al 100 indique el porcentaje de contaminación de Madrid. 
Ayuso ha dicho en rueda de prensa esta mañana que cuando la contaminación supere el 40%, los coches no podrán superar los 90km/h. 
Si la contaminacion supera el 75% los coches no podrán superar los 70km/. 
La velocidad normal de una autopista es de 120km/h. 
- Crear una función que dado un porcentaje de contaminación me indique la velocidad a la que puede ir un coche.*/

/*
let cont = (prompt('escribe un número'));



function porcentaje(n){
    if(n<=100){
    return document.write(n + '%');
    }
    else { 
        document.write('<p>número no válido</p>');}
}

//porcentaje(cont);//



function velocidad(n){
    if(n >= 0 && n <= 40){

    document.write('Puedes ir a 120 km/h');
    }if (n >40 && n <=75){
    document.write (`Puedes ir a 90Km/h`);}
        if (n >75 && n <=100){
    document.write (`Puedes ir a 70Km/h`);}
        if (n >100){ 

    document.write ("Indica un númer entre 1 y 100");
    
}}

velocidad(cont);

*/


/*(Easy) Ejercicio 2

- Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. Sacar la imagen de internet.*/


/*(Easy) Ejercicio 3

- Crear una función que dado un string me devuelva el caracter que hay en la mitad (o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o*/

/*
let palabra = prompt('escribe una palabra');



function caract (n){
    document.write( n.charAt((n.length-1)/2));
}

caract(palabra);
*/

/*(Easy) Ejercicio 4

- Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. EJ: hola -> aloh
*/
/*

let palabra = prompt('Escribe una palabra');    

function inverse(n){
    let rev = "";
    for (let i=n.length; i>=0; i--){
        rev += n.charAt(i)

    }
    return rev;
}

/*

document.write(`<p>${inverse(palabra)}</p>`);
*/

/*(Easy) Ejercicio 5

- Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel que se lee igual de izquierda a derecha como de derecha a izquierda. EJ: radar. Pista: Utilizar la función del ejercicio 4.
*/



/*
function right (n){
    for (let i=1; i>= n.length; i++){
     n.charAt

    }
    return n;
}


function pali(n){
    if (inverse(n) === right(n)){

    
    return document.write ('<p> Sí es palíndromo</p>');

 } else {document.write('<p>no es palíndromo</p>')};
}

pali(palabra);

*/

/*(Easy) Ejercicio 6
 Crear una función que resuelva la ecuación de segundo grado Ax^2+Bx+C=0. El programa solicita A, B, C al usuario. La función devolverá el valor positivo de la raíz (de los dos posibles). EJ: A=2, B=1, C=4 --> la funcion debe devolver -0.2928
*/

/*
const A = parseFloat(prompt('Introduce un número'));
const B = parseFloat(prompt('Introduce un número'));
const C = parseFloat(prompt('Introduce un número'));

function equ (a, b, c){
    let x = (-b+Math.sqrt(b**2-4*a*c))/2*a;
  
return x;
}

document.write(`<p>${equ(A,B,C)}</p>`);
*/

/*(Medium) Ejercicio 7
Escribir una funcion que recorra los enteros de un entero que solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares
*/


const NUM = parseInt(prompt('escribe un número entero'));


function parOimpar(n){
    let que_es = ""
    
    for (i=0; i<=n.length; i++){
        n.chaCodeAt
    }if(n.charCodeAt%2 === 0){
            que_es = document.write(`<p>${n.charCodeAt} =PAR</p>`);
         }else {
            que_es = document.write(`<p>${n.charCodeAt} =PAR</p>`);

    }
return que_es;
}

parOimpar(NUM);


