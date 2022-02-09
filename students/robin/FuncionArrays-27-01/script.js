

// EJERCICIO 1

/*

    let arr1 = ["hola"];
    let arr2 = ["mundo"];
    let arr3 = arr1.concat(arr2)

    document.write(arr3)
 
    */
    
// EJERCICIO 2


/*

function esArray(dato){
    return toString.call(dato) === '[object Array]'
}

document.write(esArray())


*/

// EJERCICIO 3

/*

function esArray(nums){
    return nums.every(v => v >10)
}

document.write(esArray([20,11,25,24,11,13,14,15,12]))

*/

// EJERCICIO 4

/*

function verificacion(word) {
    let arr = ["paco", "paca", "robin", "naranja"]
    return document.write(arr.includes(word))
}



verificacion("paco")

*/

// EJERCICIO 5

/*

let arr = [20,1,3,134,24,15];

function ordenar (a,b){
  
    return b - a ;
}

document.write(arr.sort(ordenar ))


*/

// EJERCICIO 6 

/*

function escojo (){
    let arr = [10,30,20,4,5,15];
    let newArr = arr.filter(v=> v > 10)
    
    return document.write(newArr)
}



escojo()
*/

// EJERCICIO 7

/*

function mayus(){
    let names = ["robin", "paco", "pepito"]
    let mayuscula = names.map(name => name.charAt(0).toUpperCase() + name.substring(1))
    return document.write(mayuscula)
}

mayus()

*/

// EJERCICIO 8 

/*

function devuelvo(num){
    let array = [1,2,3,4,5,7,13,19,100]
    return document.write(array.indexOf(num))
}

devuelvo(1)

*/

// EJERCICIO 9

/*

function alreves (){
    let array = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal','last']
    
    for ( let i= array.length; i>0 ; i--){
    array.pop();
    document.write(array+ " <br> ")
}

}



alreves()
*/


// EJERCICIO 11

arr = [[prompt("Pon frase")],[prompt("pon palabra")]];


function cuantosRepetidos(array, elemento) {//Aquí le llamo elemento
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        for(item of array[i]){/*Aquí le llamo item para no pisar la variable,
 además hago el loop sobre array[i]!*/
            if(item === elemento){
                contador++;
            }
        }
    }
    return contador;
}
document.write(cuantosRepetidos());






// EJERCICIO 12

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