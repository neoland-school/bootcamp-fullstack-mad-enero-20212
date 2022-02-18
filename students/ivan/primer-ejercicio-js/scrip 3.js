//alert('Hola mundo');

let a = 2;
let b = 5;
let c = a + b;

//document.write('<h2> Hola mundo</h2>' );
//let nombre = prompt('escribe algo aqui');
//document.write(nombre);

let prueba =2;
document.write( typeof prueba);
document.write( '<br/>');
let prueba_1 = 'Hola ';
document.write( typeof prueba_1);
document.write( '<br/>');
let prueba_2 = true;
document.write( typeof prueba_2);
document.write( '<br/>');
let prueba_3 ;
document.write( typeof prueba_3);
document.write( '<br/>');
let prueba_4 = null;
document.write( typeof prueba_4);
document.write( '<br/>');

//Crear dos variables numéricas y realizar su suma, resta multiplicación y división, imprimir por pantalla los dos números con la operación, el igual y el resultado
document.write( '<p>Empezamos el ejercicio</p>');
document.write( '<br/>');
let number_1 = 4;
let number_2 = 4;
let suma = number_1 + number_2;
let resta = number_1 - number_2;
let multiplica = number_1 * number_2;
let divide = number_1 / number_2;

document.write('Variable 1='+ ' '+number_1);
document.write( '<br/>');
document.write('Variable 2='+' '+number_2);
document.write( '<br/>');
document.write('la suma de' + ' '+ number_1 + ' y ' + ' '+ number_2+'  es:'+ ' '+ suma);
document.write( '<br/>');
document.write('la resta de' + ' '+ number_1 + ' y ' + ' '+ number_2+'  es:'+ ' '+ resta);
document.write( '<br/>');
document.write('la multiplicación de' + ' '+ number_1 + ' y ' + ' '+ number_2+'  es:'+ ' '+ multiplica);
document.write( '<br/>');
document.write('la división de' + ' '+ number_1 + ' y ' + ' '+ number_2+'  es:'+ ' '+ divide);
document.write( '<br/>');

//Crear dos variables string y concatenarlas con el operador y luego repetir la operación con plantillas literales, imprimir por pantalla el resultado.
let nombre = 'Iván';
let apellido = 'Sánchez' ;
let nombreApellido = nombre +' '+ apellido;
document.write('Mi nombre es'+ ' '+nombreApellido+'. En esta frase estoy usando el operador "+" para concatenar los strings.');
document.write( '<br/>');

 document.write(`Mi nombre es ${nombre} y mi apellido es ${apellido}. En esta frase estoy usando una plantilla literal para concatenar los strings.` );
document.write( '<br/>');


//Imprimir por pantalla la longitud del string resultante del ejercicio anterior.
let longitud_Cadena = `Mi nombre es ${nombre} y mi apellido es ${apellido}. En esta frase estoy usando una plantilla literal para concatenar los strings.`;


document.write(`La longitud de la cadena de caracteres anterior es de ${longitud_Cadena.length} .`);

document.write( '<br/>');

//Ejercicio que guarde en una variable mediante el uso de prompt,  los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".
let grados_Celsius = prompt('escribe aqui los grados celsius');
document.write(`El valor de grados celsius que has introducido es de ${grados_Celsius} º`);
document.write( '<br/>');
let grados_Fahrenheit = Number(grados_Celsius) + 32;
document.write(grados_Fahrenheit);
document.write( '<br/>');

document.write(`${grados_Celsius} º equivalen a ${grados_Fahrenheit} grados fahrenheit`);
document.write( '<br/>');


//Con el ejercicio de la calculadora de grados celsius, imprimir si una variable en ºC temperatura esta es mayor de 87 ºF.
let control = grados_Fahrenheit > 87;

document.write(`Equivalen los grados celsius introducidos a una temperatura en Fahrenheit mayor a 87? ${control}`);
document.write( '<br/>');

//Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 con el uso de operadores de compracion pintar por pantalla true y luego false.
let variable_1= '55';
let variable_2= 55;
let falso= variable_1 === variable_2;
document.write(falso);
document.write( '<br/>');

let verdadero= variable_1 == variable_2;
document.write(verdadero);
document.write( '<br/>');
// Crea dos variables de tipo number distintas, ahora mediante uso de operadores de comparación y de operadores lógicos debe arrojar en una linea true y luego false.
let x = 28;
let y = 10;
falso = x > 87;
document.write(falso);
document.write( '<br/>');
verdadero= x> y;
document.write(verdadero);
document.write( '<br/>');


//Mediante el uso de prompt, crea dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS.
let peso = prompt('Indique aquí el peso');
let altura = prompt('Indique aquí su altura en metros');
let altura2 = altura * altura;
let indice = peso / altura2;
document.write(`Su índice de masa corporal es de ${indice}.`);
document.write( '<br/>');
let indiceInferior = 35;
let indiceSuperior = 39.9;
let obesidad = indice >= 35 && indice <= 39;


document.write(`Tiene usted obesidad tipo II?  ${obesidad}.`);
document.write( '<br/>');

//Crea  una variable mediante prompt y proporcionarle un valor numerico,  imprimir por pantalla si es par o impar.
let p = prompt('Ingrese aqui un número');
Number(p);
let par = Number(p)%2 == 0;
document.write(`Esto es un número par? ${par}`);
document.write( '<br/>');


//Mediante prompt crear una variable que represente el numero de hijos e imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa)

let hijos = prompt('Ingresa el número de hijos que tiene');
let numerosa= Number(hijos) >= 5;
document.write(`Tiene usted familia numerosa? ${numerosa}`);
document.write( '<br/>');


//Mediante prompt crear Una variable que represente el saldo de tu cuenta, luego crea  4 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla si tienes saldo suficiente o no para pagar la compra.
let saldo = prompt('Ingrese su saldo');
let tomate= 4;
let pescado = 8;
let fruta= 5;
let carne= 10;
let compra = tomate + pescado + fruta + carne;
let suficiente = Number(saldo) > compra;
document.write(`Tiene usted dinero suficiente para comprar? ${suficiente}`);
