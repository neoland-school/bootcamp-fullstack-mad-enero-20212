


// EJERCICIO 1

let number1 = 20;
let number2 = 40;

document.write("<h1>" + number1 + " + " + number2 +" = " + (number1 + number2) + " </h1>");
document.write("<br>")
document.write("<h2>" + number2 + " - " + number1 +" = " + (number2 - number1) + "</h2> ")
document.write("<br>")
document.write("<h3>" + number2 + " * " + number1 + "=" + (number2 * number1) + " </h2> ");
document.write("<br>")
document.write("<h3>" + number2 + " / " + number1 + "=" + (number2 / number1) + "</h3>");
document.write("<br>")


// EJERCICIO 2 

let word1 = "hola";
let word2 = "mundo";
let result = (word1+word2)

// EJERCICIO 3

document.write("<h1>"+ word1 + word2 + "</h1>");
document.write("<br>")
document.write(`${word1}, ${word2}`)
document.write("<br>")
document.write("<h1>Esta es la longitud del string anterior: " + result.length + "</h1>")
document.write("<br>")

// EJERCICIO 4 - 5

let celsius ;

celsius = prompt("Convertidor grados Celsium a Fahrenheit");
document.write(" Serían "+((celsius*1.8)+32 )+ "grados fahrenheit");
document.write("<br>")
document.write("Más de 87 grados celsius: " + (celsius > 31) );
document.write("<br>")

// EJERCICIO 7

let number3 = 4;
let number4 = 10;
 
document.write(number3 > number4);  
document.write("<br>")
document.write( number4 > number3);

// EJERCICIO 8

let peso;
let altura;
let obeso = 35;

peso = prompt("Tu peso")
altura = prompt("Tu altura")
document.write((peso/(altura*2)) > obeso );
document.write("<br>")

// EJERCICIO 9

let number5;
number5 = prompt("Ponga un numero");
document.write("<br>")
document.write(number5 % 2 == 0) 

// EJERCICIO EXTRA 1

let hijos;
hijos = prompt("introduce el numero de hijos")

document.write(hijos > 2)
document.write("<br>")

// EJERCICIO EXTRA 2

let saldo; 
saldo = prompt("saldo de cuenta")

let tomate = 1;
let pescado = 2;
let pasta = 3;
let verdura = 4;

document.write(saldo > (tomate + pescado + pasta + verdura))

