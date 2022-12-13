// 1. Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function function.


// function dimetipo(parametro) {

// return document.write(typeof(parametro))};

// dimetipo (56);

// const dimetipo = (parametro) =>{document.write(typeof(parametro))};

// dimetipo('hola');

// 2.Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, usar function declaration.

// Esta resolucion no ha salido bien
// let para1=prompt('inserte palabra');
// let para2=prompt('inserte palabra');

// function and(para1,para2) {
//     let a= typeof(para1)===String? "verdadero" : "falso";
//     let b= typeof(para2)===String? "verdadero" : "falso";
// return document.write(a&&b)};

// and(para1,para2);

//Esta si

// let bol1 =prompt('true o false')
// let bol2 =prompt('true o false')
// function and (a,b){
//    let x =  a==='true' && b==='true';
//    return x;
// }
// document.write(and(bol1,bol2));


// 3. Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, usar function expression.


let num= prompt('introducir numero');

function volt(a) {
    let b='';
    for (let i = a.length-1; i >= 0 ; i--) {
        b+= a.charAt(i);
    };
return document.write(b)};

volt(num);

// 4.Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro de diferentes figuras geométricas (Rectángulo, Cuadrado, triángulo y Círculo), para el rectangulo y cuadrado usaremos arrow function.

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


// 5.Crear una función calculadora que reciba como parámetros: Dos operandos y la función que se quiera utilizar para calcular(+,-,*) y devuelva el resultado, los números y la función se pasaran por pormpt, usar function expression.


// let opera = prompt('indique tipo de operando: suma (+), resta (-), multiplicación (*)');

// switch (opera) {
//     case '+':
//         let op1= parseInt(prompt('introduzca el operando'));
//         let op2= parseInt(prompt('introduzca el operando'));
//         function sum(oper1,oper2) {
//             let a = oper1+oper2

//         return document.write(`<p> ${oper1}+${oper2}=${a} </p>`)};
//         sum(op1,op2);

//         break;
//     case '-':
//         let op3= parseInt(prompt('introduzca el operando'));
//         let op4= parseInt(prompt('introduzca el operando'));
//         function res(oper1,oper2) {
//             let a = oper1-oper2

//         return document.write(`<p> ${oper1}-${oper2}=${a} </p>`)};
//         res(op3,op4);
        
//         break;
//     case '*':
//         let op5= parseInt(prompt('introduzca el operando'));
//         let op6= parseInt(prompt('introduzca el operando'));
//         function mult(oper1,oper2) {
//             let a = oper1*oper2

//         return document.write(`<p> ${oper1}+${oper2}=${a} </p>`)};
//         mult(op5,op6);

//         break;
//     default:
//         document.write('No se reconoce la funcion');
//         break;
// }

// 6. Crear una función que dado una URL (Se representa con un string) por prompt, me diga o no si pertenece al dominio de github, usar function declaration.

// let urlp=prompt('introduzca url del sitio web');

// function comp(a) {
//     let b='';
//     for (let i = 8; i <= 13 ; i++) {
//         b+= a.charAt(i);
//     };
    
// return document.write(b===`github`)};

// comp(urlp);

//https://github.com/

// 7.Crea una funcion que dado un número por prompt te pinte por pantalla todos los números desde ese numero  hasta el 0, de 8 en 8 ejmp:
// -- del nro 100 al nr 0 ---
// nr 100
// nr 92
// nr 84
// nr 76
// nro 68...etc hasta el nr 0

// let num = prompt('inserte un numero');

// function descenso(param) {
//     for (let i = param; i >=0 ; i=i-8) {
//     document.write(`<p>${i}</p>`);
//     }   
// }
// descenso(num);

// 8. Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides) y lo imprima por pantalla.

// let num1=prompt('inserte un numero');
// let num2=prompt('inserte segundo numero');

// function GCD(a,b){
//     var result=0;
    
//     if(a % b > 0){
//      result = GCD( b, a % b );
//     }else{
//      result = b;
//     }
    
//     return result;
//    }

//    document.write(GCD(num1,num2));

// Resolucion de Jose :
// function algoritmoEuclides(numero1, numero2) {
//     let check = numero1 % numero2;
//     while (check !== 0) {
//         checkTemp = check;
//         check = numero2 % checkTemp;
//     }
//     return checkTemp;
// }
// console.log(algoritmoEuclides(225, 300));


// 9. Crea una función que dado un número por prompt pinte el siguiente cuadro por pantalla acorde a las medidas del número dado.



