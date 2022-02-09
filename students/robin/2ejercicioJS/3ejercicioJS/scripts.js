// EJERCICIO 1


let number1;
let number2;

 number1 = prompt("Primer numero");
 number2 = prompt("segundo numero");

 if (number1 >= number2) {
     document.write("El numero mayor es: " + number1  );
 }else{
     document.write("El numero mayor es: " + number2 )
};
document.write("<br>")
// EJERCICIO 2






let saludo;
let hello = "ingles"
let hola = "español"
let bonjour = "frances"


saludo = prompt("Elije entre frances ingles español")

switch (saludo){
    case hello : 
        document.write("hello traducido a ingles")
        break;
    case hola :
        document.write("hola traducido a español3")
        break;
    case bonjour:
        document.write("bonjour traducido a frances")
        break;
    default : 
        document.write("hello traducido")
}

document.write("<br>")

// EJERCICIO 3

let edad;
edad = prompt ("Tu edad")

if (edad >= 18) {
    document.write("Puedes salir de fiesta")
}else if (edad < 18) {
    document.write("No puedes salir de fiesta")
}else{

}

document.write("<br>")

// EJERCICIO 4
    
let año ;
año = prompt("Escribe un año")

if (año % 4 === 0){
    document.write("Es un año bisiesto")
}else if (año % 100 !== 0) {
    document.write("No es un año bisiesto")
}else if (año % 400 === 0) {
    document.write("Es un año bisiesto")
}
    
document.write("<br>")       


// EJERCICIO 5

  let color;
  let verde = "verde";
  let yellow = "intermitente";
  let naranja = "ambar";
  let rojo = "rojo";

  color = prompt("Elige entre verde,intermitente, ambar o rojo")

if (color === verde){
    document.write(`<div class ="verde"> PASA </div>`)
}else if (color === yellow) {
    document.write(`<div class ="ambar-inter"> Pasa rapido </div>`)
}else if (color === naranja){
    document.write(`<div class ="ambar"> Pasa rapido </div>`)
}else if (color === rojo){
    document.write(`<div class ="red"> QUIETO </div>`)
}

document.write("<br>")    

// EJERCICIO 7

let num1;
let num2;
let signo;

num1 = parseInt(prompt("Escribe primer numero"));
num2 = parseInt(prompt("Escribe segundo numero"));
signo = prompt("Elija entre : + - * /");

switch (signo){
    case "+": 
        document.write(num1 + num2)
    break;

    case "-":
        document.write(num1 - num2)
    break;

    case "*":
        document.write(num1 * num2)
    break;

    case "/":
        document.write(num1 / num2)
}

    
// EJERCICIO 6

let nota1 = parseFloat(prompt("primera nota"));
let nota2 = parseFloat(prompt("segunda nota"));
let nota3 = parseFloat(prompt("tercera nota"));
let nota4 = parseFloat(prompt("cuarta nota"));
let nota5 = parseFloat(prompt("quinta nota"));
let nota6 = parseFloat(prompt("sexta nota"));
let nota7 = parseFloat(prompt("septima nota"));

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7 ;

document.write("<br>");
document.write(media);

document.write("<br>");




if (media > 6) {
    document.write("Has superado la media")
}else{

}

