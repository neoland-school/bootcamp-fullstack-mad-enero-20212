// 1.Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)
// let arr1= [1,3,4,6,2,2,4]
// let arr2= [1,1,1,1,1,1,1]


// const concatarr= arr1.concat(arr2);
// document.write(concatarr)  ;

2//Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato, ver metodos de array!.(easy)

// const arrpru= [1,3,5,6,3]

// const arrayono= Array.isArray(arrpru)

// document.write(arrayono)

// 3.Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario (hay un metodo de array para esto empieza por E...).(easy)

// const array1= [1,4,6,2,7,44,22,5,33,26]
// const array2= [33,11,66,55,22,88,45,25,85,24]

// const mayorque10=array2.every(v=> v>10)
// document.write(mayorque10)

// 4.Crea una función que reciba un array y una palabra e imprima true o false si palabra existe o no dentro del array (ver metodo empieza por i).(easy)

// const arrpalabra= ["hola", "adios", "popeye", "jorgepesao"]

// const incluido= arrpalabra.includes("jorgepesao");

// document.write(incluido);

// 5.Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)

// const arrdes= [1,4,3,7,3,9,3,66,,2,222,112]

// const ordenar=arrdes.sort(function(a, b){return a - b})

// document.write(ordenar)

// 6.Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)


// const arranum= [1,5,88,3,13,46,2,5,3]

// const newArr= arranum.filter(v=> v>10);
// document.write(newArr);

// 7.Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

// let nombrecitos= ["paula", "vega", "elena", "bea", "cristina", "maria"];

// nombrecitos.forEach((v,i,array) => {
//     array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1,array[i].length);})

//     document.write(nombrecitos);


// 8.Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)
// const numericos= [2,6,3,83,2,7,74,4,2466,342]
// let n= 74



// const foundvalue = numericos.findIndex(v => v===n)
// document.write(foundvalue)

// 9.Crear una función que reciba un array,  deberá mostrar en el navegador el array tantas veces como elementos contiene  y en cada una de ellas eliminará el último elemento: El output visualizado debe ser el siguiente:   // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'                                                                                              // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'                                                                                                                                                                                  // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'                                                                                                                                                                                         // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript',    etc..(medium)

// let pregunta= ["perdona","me","dejarias","fuego?"]

// const tartajatimido= pregunta.forEach((v,i,array) => {
    
//     document.write(`<p>${tartajatimido}</p>`)
//     array.pop()
// })


// function tartajaTimido (a){

//     let tamaño= a.length
//     for(i=0;i<=tamaño; i++){
//         document.write(`<p>${a}</p>`)
//         a.pop()
//     }
    
    
    
// }


// tartajaTimido(pregunta);

// 10. Crea una función que dado un número te imprima por pantalla la cantidad de bucles que tiene, un número tiene un bucle cuando tiene un circulo cerrado cuando lo dibujas, ejemp el 6 tiene 1 bucle y el 8 tiene dos bucles, si pasamos a la función el número (897) esta debe arrojar "3 bucles".

// let numero= prompt('introduce un numero')
// let numerito= Array.from(numero);
// function circulitos (a){
//     let contador= 0
//     a.forEach(v=> {
//         switch (v) {
//             case '0':
//                 contador=contador+1;
//                 break;
//             case '6':
//                 contador=contador+1;
//                 break;
//             case '8': 
//                 contador= contador+2;
//                 break;
//             case '9':
//                 contador=contador+1;
//                 break;
//             default: contador=contador;
//                 break;
//         }  
//     });
//     document.write(contador)
// }
// circulitos(numerito)


// 11.Crea una función que dada una palabra y una oración por prompt, la busque en la oración  e imprima por pantalla cuantas veces aparece esa palabra en la oración, la palabra y la oración deben ser parámetros de una función, ejemplo: oración: "Hola, como estas? ", palabra: hola, output: "la palabra hola aparece 1 vez en la oración".(hard)

let oracion =prompt('introduce una oracon').toLocaleLowerCase();
let palabra = prompt('introduce una palabra').toLocaleLowerCase();

let arror= oracion.split(' ')

function buscarpalabra




let frase = prompt('introduzca una frase').toLocaleLowerCase();
let palabra= prompt('introduzca la palabra a buscar').toLocaleLowerCase();
let array = frase.split(' ');
function findpalabra(a,b){
    let counter=0;
    a.forEach(v => {
        if (v===b) {
           counter=counter+1          
        }
    });
    document.write(`<p>El numero de veces que aparece es ${counter}</p>`)
}
findpalabra(array,palabra);






























