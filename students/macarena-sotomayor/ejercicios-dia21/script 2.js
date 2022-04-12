// 1. Crea un programa que dado un numero mediante promt y usando el bucle WHILE, te impirma por pantalla su tabla de multiplicar de la siguiente forma:
// Tabla de multiplicar de 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50



// let numero= prompt('introduzca un num')

// for( i=0; i<=10; i++){
//     document.write(`<p>${numero}x${i}=${numero*i}</p>`)

// }

// let i= 0;


// while(i<=10){
//     document.write(`<p>${numero}x${i}=${numero*i}</p>`);
//     i++
// }

//ejercicio2
// 2.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
//         Fizz, si es multiplo de 3.
//          Buzz, si es múltiplo de 5.   
//           FizzBuzz, si es múltiplo de 3 y 5 a la vez.


 
// for (let i=0; i<100; i++ ){
   
//     if(i%3===0){
//         if(i%5=== 0){
//             document.write(`<p> ${i} ${'fizzBuzz'}</p>`);
//         }else{document.write(`<p> ${i} ${'Fizz'}</p>`);}
        
//     }else if(i%5=== 0){
//         document.write(`<p>${i} ${'Buzz'}</p>`);
//     }else{ document.write(`<p>${i}</p>`)

//     }

// }



//ejericcio3 Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."



// let filas=parseInt(prompt('Introduce el numero de filas'));
// let columnas=parseInt(prompt('Introduce el numero de columnas'));

// let resultado= filas * columnas;
// document.write("<table border>");
// for( let i= 0; i<filas; i++){
//     document.write("<tr>");
//     for(let j= 0; j< columnas; j++){
//         document.write("<td>")
//         document.write(`${i}${j}`);

//         document.write("</td>")

//     }
//     document.write("</tr>");
// }document-write("</table>");


// //ejercicio Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita)

// +=*

let numero= parseInt(prompt('introduce numero'))

for( let i= 0 ; i< numero; i+=*){
    document.write('*<br></br>')
    // for (let )


 
}



