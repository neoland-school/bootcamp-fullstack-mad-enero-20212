/*

1. Crear una función que devuelva la resta de dos números. Llamad a la función 3 veces con valores distintos y pintar los resultados en un p cada uno

*/


/*
// Con funciones tradicionales con nombre
function substract(a,b){
    return a-b;
 }

 // con arrow function
 const substract = (a,b) => a-b;
 
 document.write(`<p>${substract(3,4)}</p>`);
 document.write(`<p>${substract(6,1)}</p>`);
 document.write(`<p>${substract(88888,88888)}</p>`);
 
 */

/*
 Martes 25/01 Alex:

 1. (Easy) crear una función que dado un número del 1 al 100 indique el porcentaje de contaminación de Madrid.


*/
/* primera parte

 let dato = prompt("introduce el porcentaje de contaminacion");

 function nivcont (x) {

     if (x <=100){
     document.write (`Hoy en Madrid hay un nivel de contaminación del ${x}%`);
        }
     else { document.write ("Por favor indique un dato de contaminación entre 1 y 100");
        }
    }

 nivcont (dato)
 
 /* segunda parte :  Ayuso ha dicho en rueda de prensa esta mañana que cuando la contaminación supere el 40%, los coches no podrán superar los 90km/h. Si la contaminacion supera el 75% los coches no podrán superar los 70km/. La velocidad normal de una autopista es de 120km/h. Crear una función que dado un porcentaje de contaminación me indique la velocidad a la que puede ir un coche.



 let dato = prompt("introduce el porcentaje de contaminacion");


 function nivcont (x) {

    if (x >=0 && x <=40){
        document.write (`La velocida maxima permitida es de 120Km/h`);}   

    if (x >40 && x <=75){
        document.write (`La velocida maxima permitida es de 90Km/h`);}

    if (x >75 && x <=100){
            document.write (`La velocida maxima permitida es de 70Km/h`);}

    if (x >100){ document.write ("Por favor indique un nivel de contaminación entre 1 y 100");
        }

       }
    nivcont (dato)

    /*

    ------------------------------------------

    2.  (Easy) Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. Sacar la imagen de internet.
   

    let dato = prompt("introduce el porcentaje de contaminacion");

    function nivcont (x) {

    if (x >=0 && x <=40){
        document.write (`<img src="cientoveinte.jpg" alt="">`);}   

    if (x >40 && x <=75){
        document.write (`<img src="noventa.jpg" alt="">`);}

    if (x >75 && x <=100){
            document.write (`<img src="setenta.jpg" alt="">`);}

    if (x >100){ document.write ("Por favor indique un nivel de contaminación entre 1 y 100");
        }

       }
    nivcont (dato)


    ------------------------------------

    3. (Easy) Crear una función que dado un string me devuelva el caracter que hay en la mitad (o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o

  


    let dato = prompt("introduce una palabra");

    function nivcont (x) {

      let a= x.charAt(parseInt((x.length -1) / 2));
       document.write (a)
    }

        nivcont (dato)


  ------------------------


4. (Easy) Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. EJ: hola -> aloh



let dato = prompt("introduce una palabra");

function invertir (x) { 
    let reverse = "";
    for (let i = x.length ; i>=0 ; i--) {
        reverse += x.charAt (i) 
    }
    return reverse;
    
}

document.write (invertir(dato));


5. (Easy) Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel que se lee igual de izquierda a derecha como de derecha a izquierda. EJ: radar. Pista: Utilizar la función del ejercicio 4.
*/
/*
let dato = prompt("introduce una palabra");


function palin (x) {

    let norm = dato
    function invertir (j) { 
        let reverse = "";
        for (let i = j.length ; i>=0 ; i--)
            reverse += j.charAt (i);
            return reverse;
            }

    if ( invertir (dato) === norm ) { document.write("es un palindromo");    
        }
        
    else {document.write("no es un palindromo");
    }
  
}

palin (dato);


----------------------



7. (Medium) Escribir una funcion que recorra los enteros de un entero que solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares


let dato = parseInt (prompt("introduce el número"));

function entero (x) {

            for (let i = 0 ; i<=x ; i++) {
                if (i % 2 === 0) {
                            document.write(`<p>El número ${i} es par </p>`);}
                else {document.write(`<p>El número ${i} es impar </p>`);}
                        }
            
                    }
entero (dato)

----------------------------------------




8. (Medium) Escribir una función que dado un numero, devuelva el número al revés. Solicitar el número al usuario




let dato = parseInt(prompt("introduce una palabra"));

    function reves (x) { 
        let reverse = "";
        for (let i = x.length ; i>=0 ; i--) {
            reverse += x.charAt (i)
            return reverse;
                }
            }
    
            document.write (reves (dato));

----------------------------------------------

(Medium) 9. Escribir una función que dado un número, indique si este es capicua o no. Un numero es capicua si se lee igual de izquierda a derecha que de derecha a izquierda. EJ. 1221
*/
/*
let dato = parseInt(prompt("introduce un numero"));
*/

let dato = prompt("introduce un numero");


function palin (x) {

    let norm = dato
    function invertir (j) { 
        let reverse = "";
        for (let i = j.length ; i>=0 ; i--)
            reverse += j.charAt (i);
            return reverse;
            }

    if ( invertir (dato) === norm ) { document.write("es capicua");    
        }
        
    else {document.write("no es un capicua");
    }
  
}

palin (dato);

/*
