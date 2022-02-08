//Solicitar al usuario un número. A continuación solicitar al usuario tantas palabras como haya 
//indicado en el primer número y guardarlas en un array de palabras. Con ese array tenemos que:

let num = parseFloat(prompt("dime un numero"));
let arr = prompt(`dime ${num} palabras`).split(' ');
document.write(arr)


//Ordenar las palabras de menor a mayor longitud.

const orden = arr.sort((a,b)=>{
    return a.length-b.length
});

document.write(orden);