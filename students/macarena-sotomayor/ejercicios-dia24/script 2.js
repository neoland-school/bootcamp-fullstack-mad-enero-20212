
// Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function function.
// let parametro = 39
// function dimetipo(parametro){
//     return typeof(parametro);
// }
// document.write(dimetipo(45));

// const dimetipo = (parametro) => {document.write(typeof(parametro))};
// dimetipo('oool')




// 2. Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, usar function declaration.

// let bol1 =prompt('true o false')
// let bol2 =prompt('true o false')


// function and (a,b){


//    let x =  a==='true' && b==='true';


//    return x;

// }


// document.write(and(bol1,bol2));

// 3.Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, usar function expression.

// let num= prompt('introducir numero');


// function volt(a) {
//     let b='';
//     for (let i = a.length-1; i >= 0 ; i--) {
//         b+= a.charAt(i);
//     };
// return document.write(b)};
// volt(num);

//4.Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), para el rectangulo y cuadrado usaremos arrow function.

// area rectangulo = base x altura
// perimetro rectangulo= suma de todos los lados
// area cuadrado= base x altura
// perimetro cuadrado= suma de los lados
// area circulo= pi x radio al cuadrado
// perimetro circulo = 2 x pi x radio
// area triangulo= basex altura/2
// perimetro = suma de la longitud de sus lados


// let basec= prompt('escribe la logitud de la base  del cuadrilatero')
// let alturac= prompt ('escribe la longitud de la altura del cuadrilarero')

// function area (a,b){
//     return document.write(`<p> ${a*b}</p>`);
// }



// function perimetro (a,b){
//     return document.write(`<p> ${(2*a)+(2*b)}</p>`);
// }

// area(basec,alturac);
// perimetro(basec,alturac);

// ejercicio resuelto x koki 
// let fig = prompt('indique tipo de figura: circulo (c), triangulo (t), paralelogramo(p)');
// switch (fig) {
//     case 'c':
//         let rad= prompt('introduzca el radio');
//         function circ(ra) {
//             let a = ra**2*Math.PI
//             let b = 2*Math.PI*ra
//         return document.write(`<p> Area=${a} y perimetro= ${b}</p>`)};
//         circ(rad);
//         break;
//     case 'p':
//         let lado1=prompt('introduzca un lado');
//         let lado2=prompt('introduzca otro lado');
//         function para(l1,l2) {
//             let a = l1*l2;
//             let b = 2*l1+2*l2;
//         return document.write(`<p> Area=${a} y perimetro= ${b}</p>`)};
//         para(lado1,lado2);
//         break;
//     case 't':
//         let base=prompt('introduca la base');
//         let altura=prompt('introduzca la altura');
//         function tria(bas,alt) {
//             let a = bas*alt/2;
//             let b = bas+alt;
//         return document.write(`<p> Area=${a} y perimetro= ${b}</p>`)};
//         tria(base,altura);
//         break;
//     default:
//         document.write('No se reconoce la funcion');
//         break;
// }

// ejercicio 5 Crear una función calculadora que reciba como parámetros: Dos operandos y la función que se quiera utilizar para calcular(+,-,*) y devuelva el resultado, los números y la función se pasaran por pormpt, usar function expression.


// let n1 =prompt ('introduce primer numerando');
// let op= prompt ('introduce operacion  suma(+) resta(-) o multipplicación (*)');
// let n2= prompt ('introduce segundo numerando');



// switch (op) {
//     case '+': 
//     let n1 = parseInt(prompt ('introduce primer numerando'));
//     let n2= parseInt(prompt ('introduce segundo numerando'));
//     function suma(a,b) {
//         return document.write(`<p> ${a+b}</p>`)
//      }suma(n1,n2)
      
        
//         break;

//     case'-':
//     let n3 = parseInt(prompt ('introduce primer numerando'));
//     let n4= parseInt(prompt ('introduce segundo numerando'));
//     function resta(a,b) {
//         return document.write(`<p> ${a-b}</p>`)
//      }resta(n3,n4)
//         break;
//     case'x':
//     let n5 = parseInt(prompt ('introduce primer numerando'));
//     let n6= parseInt(prompt ('introduce segundo numerando'));
//     function multiplicar(a,b) {
//             return document.write(`<p> ${a*b}</p>`)
//          }multiplicar(n5,n6)
//             break;
        
// }

// ejerciio 6 Crear una función que dado una URL (Se representa con un string) por prompt, me diga o no si pertenece al dominio de github, usar function declaration.

// let urlp= prompt ('introduce url del sitio web');


// function gitcomp (a){
//     let b='';
//     for (let i=8; i<=13; i++){
//         b+= a.charAt(i);
//     }

//  return document.write(b=== `github`);
// }
// gitcomp(urlp);



// ejercicio 7 Crea una funcion que dado un número por prompt te pinte por pantalla todos los números desde ese numero  hasta el 0, de 8 en 8 ejmp:
// -- del nro 100 al nr 0 ---
// nr 100
// nr 92
// nr 84
// nr 76
// nro 68...etc hasta el nr 0



// let n= prompt('introduce un numero');

// function contador(a){
//     for (let i =a ; i>=0; i=i-8){
//         document.write(`<p>${i}</p>`);
//     }

// }
// contador(n);

// ejercicio8 8. Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides) y lo imprima por pantalla.


// //PASO



















