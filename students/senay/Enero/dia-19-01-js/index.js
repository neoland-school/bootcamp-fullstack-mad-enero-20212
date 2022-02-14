// alert("hola mundo");
// document.write("<h2> Hola Mundo </h2>")
// let nombre = prompt("escriba algo aqui");
// document.write(5);
document.write("<h2>Primer Ejercicio</h2>");
let numeroPrimario = 20;
let numeroSecundario = 10;
let resultadoSumar = numeroPrimario + numeroSecundario;
let resultadoRestar = numeroPrimario - numeroSecundario;
let resultadoMultiplicar = numeroPrimario * numeroSecundario;
let resultadoDividir = numeroPrimario / numeroSecundario;


document.write('Sumar:' + " " + numeroPrimario + ' + ' + numeroSecundario + ' = ' + resultadoSumar);
document.write("<br>");
document.write('Restar:' + " " + numeroPrimario + ' - ' + numeroSecundario + ' = ' + resultadoRestar);
document.write("<br>");
document.write('Multiplicar:' + " " + numeroPrimario + ' * ' + numeroSecundario + ' = ' + resultadoMultiplicar);
document.write("<br>");
document.write('Dividir:' + " " + numeroPrimario + ' : ' + numeroSecundario + ' = ' + resultadoDividir);

document.write("<h2>Segundo Ejercicio</h2>");
let nombre = "Senay";
let apellido = "Osmanov";
let nombreCompleto = nombre + apellido;
document.write(`Mi Nombre es: ${nombre} ${apellido}`)


document.write("<h2>Tercer Ejercicio</h2>");
let longitudDeCaracteres = nombreCompleto.length;
document.write(`La longitud de los caracteres de mi Nombre y Apellido es de: ${longitudDeCaracteres} caracteres.`);


// document.write("<h2>Cuarto Ejercicio</h2>");
// let Celsius = prompt("Introduse los grados en Celsius");
// let Farenheit = (Celsius * 1.8) + 32;
// document.write(`${Celsius} Celsius son ${Farenheit}`);


// document.write("<h2>Quinto Ejercicio</h2>");
// let Farenheit2 = Celsius > 87;
// document.write(`Es mayor a 87F? <br> ${Farenheit2}`);


document.write("<h2>Sexto Ejercicio</h2>");
let string1 = 55;
let string2 = "55";
document.write(string1 == string2);
document.write("<br>");
document.write(string2 > string2);

document.write("<h2>Septimo Ejercicio</h2>");
let logico1 = 33;
let logico2 = 44;
document.write(logico1 == logico1, "<br>");