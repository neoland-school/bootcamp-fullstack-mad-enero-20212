/*

1. Crea un programa que dado un numero mediante promt y usando el bucle WHILE, te impirma por pantalla su tabla de multiplicar de la siguiente forma:
Tabla de multiplicar de 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

let i=0
while(i<101){
    document.write(`<p> ${i}</p>`)
    i++;
}

*/

let num = parseFloat (prompt ("inserte un número"));

 let i = 0;


    while(i<=10){ 
            document.write (`${num}x${i}=${num*i}`+"<br>");
            i++
    }
    


