//primeras pruebas

// alert("hola mundo");
// document.write("<h2>hola mundo</h2>");

// let nombre= prompt("escribe algo aqui");

// document.write(nombre);

// let nombre;

// document.write(typeof nombre);



// let numero = 20;
// let verdad = true;
// let nada;
// let cer = null;

// document.write(typeof numero);
// document.write(typeof verdad);
// document.write(nada);
// document.write(typeof cer)

//apartado 1

// let num1 = 15;
// let num2 = 16;

// document.write('<p>Este es el resultado ' + (num1+num2) + '</p>');

//apartado 2

// let var1 = "hola";
// let var2 = "mundo";

// document.write(var1 + var2);

// let cadena= var1+var2; //esto vale sin comillas y con comillas

//apartado 3

// document.write(cadena.length);

// document.write((var1+var2).length);

// document.write('     ');

//apartado 4 y 5

// let celsius= prompt ('grados C');

// let farenheit= (celsius*9/5)+32;

// document.write(farenheit);


// let f87 = 87;

// if (farenheit > 87) {
//     document.write('mayor')
// };

// if (farenheit < 87) {
//     document.write('menor')
// };

// let comparacion= 87-farenheit;

// document.write(farenheit>87);

//apartado 6

// document.write(true && false);
// document.write(' ');
// document.write(true && true);
// document.write(' ');

// let cinco1= '5';
// let cinco2= '5';

// document.write(cinco1+cinco2);

// document.write(' ');

// let cincuenta= 50;
// let cinco3=5;
// document.write(cincuenta+cinco3);


//apartado 7

// let numero1= 4;
// let numero2= 5;
// let verdadero=numero2>numero1;
// let falso=numero2<numero1;

// document.write(verdadero);
// document.write(falso);
// document.write(' ');
// document.write(verdadero||falso);
// document.write(verdadero&&falso);


// apartado 8

// let altura=prompt('altura');

// let peso=prompt('peso'); 
// let relacion= peso/(altura*altura);
// document.write(relacion>35);

//apartado 9

let numero=prompt('introduce numero');
let resto=numero%2;
let respuesta= 1>resto;
document.write('<p>es par?</p>' + respuesta);