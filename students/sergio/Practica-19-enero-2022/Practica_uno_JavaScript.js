let a = 'Hola';
let b = 30;
let c = true;
let d 
let e = null;

document.write( '<br>' );
document.write( typeof a );
document.write( '<br>' );
document.write( typeof b );
document.write( '<br>' );
document.write( typeof c );
document.write( '<br>' );
document.write( typeof d );
document.write( '<br>' );
document.write( typeof e )

let num1 = 30;
let num2 = 5;

document.write( '<br>' );
document.write( '<br>' );
document.write('Variable numerica 1: ', num1 );
document.write( '<br>' );
document.write('Variable numerica 2: ', num2 );
document.write( '<br>' );
document.write( 'Suma: ', num1, ' + ', num2, ' = ', num1 + num2 );
document.write( '<br>' );
document.write( 'Resta: ', num1, ' - ', num2, ' = ',  num1 - num2 );
document.write( '<br>' );
document.write( 'Multiplicacion: ', num1, ' * ', num2, ' = ', num1 * num2);
document.write( '<br>' );
document.write( 'Division: ', num1, ' / ', num2, ' = ', num1 / num2 )

let st1 = "Buenas tardes"
let st2 = " Bootcamp"

document.write( '<br>' );document.write( '<br>' );

document.write( st1 + st2);
document.write( '<br>' );
document.write( `${st1} +${st2}`);
document.write( '<br>' );

document.write( '<br>' );

document.write( 'La primera variable tiene la siguiente longitud ', st1.length)

document.write( '<br>' );

let celsius = prompt('¿Cúantos grados Celsius hace?')
let farenheit = ( celsius * ( 9 / 5 ) ) + 32 ;
let farenheit2 = ( parseInt(celsius) * ( 9 / 5 ) ) + 32 ;
document.write( '<br>' );


document.write( celsius, 'º Celsius, son ', farenheit, '', farenheit2, 'º Farenheit');

document.write( '<br>' );document.write( '<br>' );

let torf = farenheit >= 87 ;
document.write('La temperatura es mayor que 87ºF: ', torf)

document.write( '<br>' );document.write( '<br>' );

let st55 = " 55";
let num55 = 55;
let var1 = (st55 < num55)
let var2 = (st55 >= num55)
document.write( var1 );
document.write( '<br>' );
document.write( var2 );

document.write( '<br>' );
document.write( '<br>' )

let num3 = 2;
let num4 = 4;
document.write(num3 >= num4 && num3 < num4)
document.write( '<br>' );
document.write(num3 >= num4 || num3 < num4)

document.write( '<br>' );
document.write( '<br>' )

let altura = prompt('¿Cuál es su peso actual?')
let peso = prompt('¿Cuál es su altura actual (metros ej: 1.78 m)?')
let imc =  peso / altura

let torf2 = imc > 35
let torf3 = imc < 39.9
let rfin = torf2 && torf3
document.write('¿Padece usted obesidad de Clase II, según la OMS: ', rfin)

document.write( '<br>' );
document.write( '<br>' );

let num6 = prompt('Escriba un número aqui:')
let fin = num6 % 2  === 0 
let fin1 = num6 % 2 != 0
document.write('Su numero es par: ', fin)
document.write( '<br>' );
document.write('Su numero es impar: ', fin1)

document.write( '<br>' );
document.write( '<br>' );

let hijos = prompt('¿Cúantos hijos tiene?')
let famnum = hijos >= 3;
document.write('Tiene usted una familia númerosa: ', famnum)

document.write( '<br>' );
document.write( '<br>' );

let saldo = prompt('¿Cuál es el saldo de su cuenta?');
let pescado = 13;
let tomate = 8;
let carne = 20;
let queso = 15;

let cesta = (pescado + tomate + carne + queso)
let monedero = cesta - saldo
let suf = monedero < 0;
document.write('Pescado: ', pescado, '€');
document.write( '<br>' );
document.write('Tomate: ', tomate, '€');
document.write( '<br>' );
document.write('Carne: ', carne, '€');
document.write( '<br>' );
document.write('Queso: ', queso, '€');
document.write( '<br>' );
document.write('Tiene usted suficiente para comprar la cesta: ', suf)

!alert('Gracias por contestar a todo')