//1. Crea un programa que dado un numero mediante promt y usando el bucle WHILE, te impirma por pantalla su tabla de multiplicar de la siguiente forma:

// let numero=prompt('Introducir numero');

// // for(i=0; i<=10; i++){
// //     document.write(`<p>${numero}x${i}=${numero*i}</p>`)
// // }
// let i=0;

// while(i<=10){
    
//     document.write(`<p>${numero}x${i}=${numero*i}</p>`);
//     i++
// }


// 2.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
//         Fizz, si es multiplo de 3.
//          Buzz, si es múltiplo de 5.   
//           FizzBuzz, si es múltiplo de 3 y 5 a la vez.

// for(let i=0; i<=100; i++){
//     if(i%3===0){
//         if (i%5===0) {document.write(`<p>${i} ${'FizzBuzz'}</p>`);
            
//         } else {document.write(`<p>${i} ${'Fizz'}</p>`);
            
//         }
//     }else if (i%5===0) {
//         document.write(`<p>${i} ${'Buzz'}</p>`);
//     }else{
//         document.write(`<p>${i}</p>`)
//     }
// }


// 3. Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."


// let filas= parseInt(prompt('Introduzca el numero de filas'));
// let columnas= parseInt(prompt('Introduzca el numero columnas'));

// document.write("<table border>")

// for (let i=0; i<filas; i++){
//     document.write("<tr>");
//     for(let j=0; j<columnas ; j++){
//         document.write("<td>")
//         document.write(`${i}${j}`);
//         document.write("</td>")
//     }
//     document.write("</tr>")
// }

// document.write("</table>");

// 4. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).

let numero=parseInt(prompt('Inserte numero'));
let i=0
while (i<=numero){

    document.write(`<div style="display: flex; flex-direction: row; background-color: grey; height: 20px; margin: 1px;">`);
    let j=0;
    while(j<=i){
        document.write(`<div style="background-color: green; width: 10px; height: 20px;"> 1`);
        document.write(`<div/>`);
        j++;
    };
    // for(let j=0; j<=i; j++){
    //     document.write('<div style="background-color: green; width: 10px; height: 20px;"> 1');
    //     document.write('<div/>');

    // };
    i++

    document.write(`</div>`)
};

