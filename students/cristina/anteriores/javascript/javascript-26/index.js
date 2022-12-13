//Ejercicio 1// Crea un array de números por prompt e imprimelo por pantalla.(easy).

/*
let arr = [];

for(let i=0; i<3; i++){
   const userNumber = parseFloat(prompt('Dame el siguiente número'));
   arr[i] = userNumber;
}

document.write(arr)*/

//Ejercicio 2// Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)

/*
let nombre = ['Cristina','Carlos']
let apellido = ['Romero', 'Perez']

function concatenar(a,b){
    return a + ' , ' + b
}

document.write(concatenar(nombre,apellido));*/


//Ejercicio 3// Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)

/*
let rock = ['punk', 'metal','hardcore']
let genero = [rock, 'pop', 'country']
let banda = ['metalica',genero]




document.write(`<p>${banda[0]} , ${banda[1][0][1]}</p>`);

*/

//Ejercicio 4 // Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)

/*
function esArr (n){
    let x = []

    if(typeof n === typeof x){
        document.write(`<p>true</p>`);
    }else{document.write(`<p>false</p>`);}
    
} 

let arr2 = ['dfs','sdgsdg']
let arr = [2,4,5]
let otro = 'Cristina'

esArr(arr2)

*/

//Ejercicio 5 // Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)

/*let arr = [20,12,11,6,34,17,34,24,25,26]

function mayorde (n){
 let contador =0  
    for(i=0; i<10; i++){

        if (n[i] > 10){
            contador = contador+1;
        }else{contador=contador}}

return document.write(contador===10)

} 


mayorde(arr);*/

//Ejercicio 6 // Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)

/*let arr = ['casa','gato','mesa','leon','perro'];
let pal = 'perro';

function igual(x,y){
    let contador = 0;
        for (i=0; i<x.length; i++){

        if (x[i]===y){
            contador = contador+1
        }else {contador =contador}}

        
return contador === 1
    }

document.write(igual(arr,pal));*/



//Ejercicio 7 // Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

/*
let arr = [4,20,7,4,34,74,11,5,78]

function mayores(x){
    let contador = []
        for (i=0; i<x.length; i++){
            if (x[i] > 10){
            contador[contador.length]=x[i]
            


        }}


return contador
    }


document.write(mayores(arr));
*/


//----------------------------------------------//

/* //Ejercicio 1// Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)

 */ /*
const arr1 = [0,1,2]
const arr2 = [3,4]

const result = arr1.concat(arr2)

document.write(result);*/


//Ejercicio 2// Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato, ver metodos de array!.(easy)


/*
const arr = [1,2.3];

const num = 234;


const result = Array.isArray(num)

document.write(result)

*/

//Ejercicio 3// Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario (hay un metodo de array para esto empieza por E...).(easy)

/*
const arr = [11,43,24,12,45,79,15,46,45,99]

const result = arr.every(v=> v>10)


document.write(result)
*/

//Ejercicio 4// Crea una función que reciba un array y una palabra e imprima true o false si palabra existe o no dentro del array (ver metodo empieza por i).(easy)

/*
const pal = 'ese';
const arr = ['oso','casa','moco','ese']

const result = (arr.includes(pal));


document.write(result)

*/

//Ejercicio 5// Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)

/*
const arr = [2,4,78,54,34,23,1]

result = arr.sort((a, b) => a - b)

document.write(result)

*/


//Ejercicio 6// Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

/*
const arr = [2,13,4,56,3,43];

result = arr.filter(v => v>10);

document.write(result)*/


//Ejercicio 7// Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

/* const arr = ['jose','maca','jorge']

arr.forEach((v,i, array) => {array[i] = array[i].charAt(0).toLocaleUpperCase()+array[i].substring(1,array[i].length);})

document.write(arr) */


//Ejercicio 8// Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)

/*
const arr = [2,4,7,5,8,6,1];
const num = 1;


const resultFound = arr.findIndex((v,i,array) => array[i] === num)


document.write(resultFound)

*/

//Ejercicio 9// Crear una función que reciba un array,  deberá mostrar en el navegador el array tantas veces como elementos contiene  y en cada una de ellas eliminará el último elemento: El output visualizado debe ser el siguiente:   // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'                                                                                              // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'                                                                                                                                                                                  // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'                                                                                                                                                                                         // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript',    etc..(medium)

/*
const arr = ['vaca','gato','perro','pato','rata','mosca']

function animales(x){
    let tamaño = x.length
    for(i=0;i<=tamaño; i++){
        document.write(`<p>${x}</p>`)
        x.pop()
    }


return tamaño}



animales(arr)

*/

/* 
- Solicitar al usuario un número. 
- A continuación solicitar al usuario tantas palabras como haya indicado en el primer número y guardarlas en un array de palabras. 
- Con ese array tenemos que:
    - Ordenar las palabras de menor a mayor longitud.
    - Imprimir con un P si hay alguna palabra con más de una letra 't'
    - Imprimir con un p si todas las palabras contienen al menos una 'a'
    - Imprimir con un p la primera palabra que empiece por 'h' o el mensaje "no hay palabras que empiecen por h"
    - Generar un nuevo array con las palabras dadas la vuelta
    - Imprimir con una p cuántas palabras son infinitivos (terminan en ar er o ir) */


const num = parseInt(prompt('Escribe un número'));


let arr = [];
for(let i=1; i<=num; i++){
   const pal = (prompt('Dame una palabra'));
   arr.push(pal)
}



result = arr.sort ((a,b) => a.length - b.length);

document.write(result);   



/*
const arr = [2,4,78,54,34,23,1]

result = arr.sort((a, b) => a - b)

document.write(result)

*/








