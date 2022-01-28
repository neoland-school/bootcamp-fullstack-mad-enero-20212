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




------------- ARRAYS --------------------------



1.Crea un array de números por prompt e imprimelo por pantalla.(easy).





let arr = [prompt(),prompt(),prompt()];
document.write (arr[0]);


-------------------------


2. Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)



let arr1 = ["hola"];
let arr2 = ["people"];

function strin (x,y) {

    document.write(x + y);
}

strin(arr1,arr2);

--------------

3.Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)



let rock = ["punk" , "metal" , "hardcore"]

let generos = [ rock, "pop" , "country"]

let banda = ["metallica" , generos]


document.write (banda[0], rock[1]);



----------------------

4. Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)



let arr = 2;

function bol(x) {

const b = [];

if (typeof(x) === typeof(b))
{
   document.write ("true")
}else {
    document.write ("false")
}
}

bol(arr);

----------------------------

5. Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)



let arr = [11, 2, 13, 14, 15, 16, 17, 18, 19, 20]

function comp(x) {
    let counter = true;
    for (let i = 0; i <10; i++){
        if (x[i]<10){  
            counter=false;
        } 
    }
    document.write(counter);
}

comp(arr)


--------------------------------------

6.Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)




let arr = ["hola que tal", "otra vez"];



function comp(x,y) {
    let counter = false;
    for (let i = 0; i <arr.length; i++){
        if (x[i]===y){  
            counter=true;
        } 
    }
    document.write(counter);
}


comp(arr,"otra vez")

---------------

7. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)





let arr = [2, 4, 6, 81, 1, 6, 7, 3, 5, 9]

function maydiez(x) {

    for (let i = 0; i <x.length; i++){
        if (x[i]>10){  
            document.write(x[i]);}
    }
}

maydiez(arr)

-------------------

8. Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)




let bandas = ["punk" , "metal" , "hardcore"]


function mayus(x) {

    for (let i = 0; i <x.length; i++){  
            document.write(x[i]);}
}


maydiez(bandas)


--------------------------------

## METODOS ARRAY



1.Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)



// const array1 = ['hola', 'que', 'tal'];
// const array2 = ['y ', 'tu', 'que'];

// const array3 = array1.concat(array2);
// document.write(array3)



----------------------------

2.Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato, ver metodos de array!.(easy)


let array1 = 5;

document.write(Array.isArray(array1));

--------------------

3. Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario (hay un metodo de array para esto empieza por E...).(easy)

const array2 = [25 , 37, 14];

const allValues = array2.every(v => v>=10); // true. todos los elementos son mayor de diez.
document.write(allValues)


--------------------

4. Crea una función que reciba un array y una palabra e imprima true o false si palabra existe o no dentro del array (ver metodo empieza por i).(easy)


const array2 = ['hola', 'pepe'];

let ok = array2.includes( 'pepe' );
document.write(ok)

--------------------

5.Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)




var arr = [ 300, 1, 201, 200 ];

function comparar ( a, b )
    { return b - a; }

    document.write(arr.sort( comparar ));  // [ 1, 5, 40, 200 ]


    --------------------

6. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)


const arr= [ 7, 300, 1, 201, 200, 17, 25 ];

document.write(newArr = arr.filter(v => v>10)); 


--------------------

7. Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)



const arr = ['jose','maca','jorge'];

arr.forEach((v,i,array) => {
    array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1,array[i].length);
});
document.write(arr)



--------------------

8. Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)



var num = [ 5, 1, 3, 200 ];

function pos(x,y) { 
    const foundedIndex = x.findIndex((v) => y === v)
    document.write(foundedIndex)
}

 pos(num,17);

 ----------------------------

 9.Crear una función que reciba un array,  deberá mostrar en el navegador el array tantas veces como elementos contiene  y en cada una de ellas eliminará el último elemento: El output visualizado debe ser el siguiente:   // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'                                                                                              // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'                                                                                                                                                                                  // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'                                                                                                                                                                                         // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript',    etc..(medium)






/*viernes 28/01 por la mañana

. Solicitar al usuario un número. A continuación solicitar al usuario tantas palabras como haya indicado en el primer número y guardarlas en un array de palabras. Con ese array tenemos que:
Ordenar las palabras de menor a mayor longitud.
Imprimir con un P si hay alguna palabra con más de una letra 't'
Imprimir con un p si todas las palabras contienen al menos una 'a'
Imprimir con un p la primera palabra que empiece por 'h' o el mensaje "no hay palabras que empiecen por h"
Generar un nuevo array con las palabras dadas la vuelta
Imprimir con una p cuántas palabras son infinitivos (terminan en ar er o ir)




let num = parseInt(prompt("inserte un numero"));

const pal = [];

    for (let i = 0; i < num ; i++) {
       pal.push(prompt("inserte otra palabra");
  
  }



 
  1- Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'

    */

//   const person = { // esto es un objeto con una propiedad/característica
//     demo: 'hola',
//     hello : true,
// }


// // 2. Cambiar el valor de 'hello' a false 

// const person = { // esto es un objeto con una propiedad/característica
//     demo: 'hola',
//     hello : false,
// }

// 3. Crear un objeto que represente el Pais España con las propiedades ( nombre, capital, continente y SMI (en $)). Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).
//            Añadir los objetos a un array.
//            Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
//            Mostrar en una lista de HTML los países que pertenecen a europa (editado) 




    // const españa = {

    // nombre: 'españa',
    // capital: 'madrid',
    // continente: 'europa',
    // SMI: 1200,

    //     };

    // const eeuu = {

    // nombre: 'eeuu',
    // capital: 'washington',
    // continente: 'america',
    // SMI: 1800,

    //     };

    // const china = {

    // nombre: 'china',
    // capital: 'pekin',
    // continente: 'asia',
    // SMI: 1800,

    //     };

    // const nuevazelanda = {

    // nombre: 'nueva zelanda',
    // capital: 'wellington',
    // continente: 'oceania',
    // SMI: 2100,

    //     };

    // const andorra = {

    // nombre: 'andorra',
    // capital: 'andorra',
    // continente: 'europa',
    // SMI: 2000,

    //     };


//            Añadir los objetos a un array.

// const paises = [españa,eeuu,china,nuevazelanda,andorra];


//            Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$


// const smimay = paises.filter(npais => npais.SMI >= 1500);


//     let htmloutput = `<ul>`
//     for (let i = 0; i < smimay.length; i++) {
//         htmloutput +=`<li>${smimay[i].nombre} </li>`;
// }
// htmloutput += `</ul>`

// document.write(htmloutput);


//            Mostrar en una lista de HTML los países que pertenecen a europa (editado) 


// const smimay = paises.filter(npais => npais.continente === 'europa');


//     let htmloutput = `<ul>`
//     for (let i = 0; i < smimay.length; i++) {
//         htmloutput +=`<li>${smimay[i].nombre} </li>`;
// }
// htmloutput += `</ul>`

// document.write(htmloutput);



// --------------------------------------------------------

// 1.Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy)


// const miob = {

//     edad: 18,
//     genero: 'hombre',
//     casado: true,
//     profesion:["tecnico","administrativo"],

// }

// document.write (miob.profesion);

// --------------------------------

// 2.Crea una función que dado un objeto y un string que represente el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto.(easy)

// const ob = {

//     edad: 18,
// }

// let pal = 'peso'
// function eliminar (x,y) {
//     delete x[y];
// }

// eliminar (ob, pal);
// document.write (ob.edad);


// 2.Crea una función que reciba por parámetro un objeto y una propiedad, y devuelva true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)


// const ob = {

//         edad: 18,
//     }

// let pal = "eda";

//     function prop (x,y) {
//         document.write (x.hasOwnProperty(y));  
//     }

//    prop (ob, pal);

//    ---------------

//    4.Crea una función que imprima por pantalla el 'nombre: valor' de cada objeto (buscar mertodos de objeto ejmp Object Keys).(easy)


// const china = {

//     nombre: 'china',
//     capital: 'pekin',
//     continente: 'asia',

//         };

//     document.write (Object.entries(china));


// 5.Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)


let str = [prompt("escribe la hora")];

// const horatr = {

// hora:[],
// minutos:[],
// segundos:[]


function hora(a) {
    let arr = a.split(':')
    let objHora = {
        hora: arr[0],
        minutos: arr[1],
        segundos: arr[2],
    }
    document.write(Object.entries(objHora))
}

hora(str)


                

    

