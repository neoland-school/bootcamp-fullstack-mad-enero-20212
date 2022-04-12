

// EJERCICIO 1

/*

let numeros = [prompt(),prompt(),prompt()];
document.write(numeros);

// EJERCICIO 2




let a = ["hola"];
let b = ["mundo"];
let arrJunt = a.concat(b)

document.write(arrJunt)



// EJERCICIO 3

let arr1 = ["punk", "metal", "hardcore"];
let arr2 = [arr1, "pop", "country"];
let arr3 = ["metallica", arr2]

document.write(`${arr3[0]},  ${arr1[1]}` )



//EJERCICIO 4



let result = typeof [] === typeof "hola"
document.write(result)

*/


// EJERCICIO 5

/*

let arr = [11, 12, 13, 14, 15, 16, 17, 18 ,19, 40];

function menor(a) {
  
    let contador = 0;
    for(i=0;i<10;i++){
        if (a[i]>10){
            contador = contador+1;
        }else{
            contador = contador
        }
    }
    document.write(contador===10)    
}

menor(arr)

*/

// EJERCICIO 6 

/*

function verificacion(word) {
    let arr = ["paco", "paca", "robin", "naranja"]
    return document.write(arr.includes(word))
}

verificacion("paco")

*/

// EJERCICIO 7

/*

let arr = [11, 12, 13, 14, 15, 16, 17, 18 ,19, 40, 100, 8];

function mayor(a) {
    for(i=0;i<arr.length;i++)
        if(a[i]>10){
            document.write(` ${a[i]}`)
        }
}

mayor(arr)

*/


// EJERCICIO 8

/*

let arr = ["robin", "bucad", "villanueva"]

function mayus(a) {
    for(i=0; i< arr.length;i++)
    document.write(a[i].charAt(0).toUpperCase() + a[i].substring(1,) +" " )
}

mayus(arr)


*/


// EJERCICIO 9

/*

function prueba(a) {

    let arr = [1, 2, 3, 4, 5, 6];
    let encuentra = arr.indexOf(a)
    document.write(encuentra)
}

prueba()

*/



// EJERCICIO 10
/*
    Esta funcion recibe un array y un number y 
    debe devolver un array de arrays cuya longitud sea igual a n
    arr = [1,3,4,5,7,12] n=3
    subArr = [];
    i=0 -> subArr = [1]
    i = 1 -> subArr = [1,3]
    i = 2 -> subArr =[1,3,4]
    subArr = [] --> ¿Cuando tengo que hacer este cambio?
        Op1: Si la length del subArr === n
        Op2: Si (i+1)% n === 0 o i%n === n-1
    i=3 -> subArr = [5]
    i=4 -> subArr[5,7]
    i=5 -> subArr [5,7,12]


    1. Crear un array general y un subArray para los grupos
    2. Recorro el array de entrada añadiendo al subArray el elemento i
    3. Si el grupo esta lleno (Op1 u Op2) -> el subArray lo almaceno en el resultado
       y reinicioi el subArray
    4. Devuelvo el array resultado



*/


/*

function splitArrays(arr, n) {
    const resultArr = [];
    let subArray = [];

    for(let i=0; i<arr.length; i++){
        subArray[subArray.length] = arr[i];
        if(i%n === n-1){
            resultArr[resultArr.length]= subArray;
            subArray = [];
        }
    }
    return resultArr;
}



*/



// EJERCICIO 11 



function sortDesc(arr) {
    for (let i= 1 ; i<arr.length;i++){
        for(let j=0; j< arr.length-i;j++ ){
            if(arr[j]< arr[j+1]){
                const aux = arr [j];
                arr[j]=arr[j+1];
                arr [j+1]= aux
            }
        }
    }
    return arr
}



  



