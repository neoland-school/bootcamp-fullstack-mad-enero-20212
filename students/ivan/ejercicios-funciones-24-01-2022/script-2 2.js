/*
1. Crea una función que devuelva el tipo de parámetro de entrada y 
píntalo por pantalla , usar  arrow function function.
*/

let a='Hola';

const arrowFun = a =>  typeof a;

document.write(arrowFun(a));

document.write('<br>');

/*
2. Function que dado dos boleanos por prompt devuelva 
el AND de estos por pantalla, usar function declaration.
*/
a = prompt('diga true o false');
 let b = prompt('diga true o false');

function compare(a,b){
    if(a==='true' && b==='true'){
        return 'true'

    }else{
        return `false`
    }
}
document.write(compare(a,b));
document.write('<br>');


/*
3. Crea una función que dado un numero por 
prompt, devuelva el número al revés por pantalla, 
usar function expression.
*/
a = prompt('Ingrese un número');

const numberInvertido = function(a){
    
    let b= '';    
    for(let i=0; i<=a.length;i++){
        b += a.charAt((a.length)-i);
        
    }
    return parseInt(a);

}
document.write(numberInvertido(a));


/*

Resolución de clase. Trabajamos con numbres y no con strings
*/
const reverse = function(n){
    let currentNumber = n;
    let reverseNumber = 0;
    while(currentNumber>0){
        reverseNumber = reverseNumber*10 + (currentNumber%10);
        currentNumber = Math.floor(currentNumber/10);

    }
    return reverseNumber;
}



/*
4. Escribir varias funciones que dada las medidas
 por prompt(radio, lados, etc) que calculen área y 
 perímetro de diferentes figuras geométricas (Rectángulo, 
    Cuadrado, triángulo y Círculo), para el circulo usaremos 
    rectangulo y cuadrado usaremos arrow function.
*/

const areaSquare = a => `<p>El área del cuadrado de lado ${a} es ${a*a}</p>` ;

function areaTriangle(a,b){
    return `<p>El área del triángulo de lados ${a} y ${b} es ${0.5*a*b}</p>`;
}

const areaCircle = a => `<p>El área del círculo de radio ${a} es ${Math.PI*a*a}</p>`;

a = parseInt(prompt('indique el valor del lado del cuadrado'));
b = parseInt(prompt('indique el valor de la altura del triángulo'));
let c = parseInt(prompt('indique el valor de la base del triángulo'));
let d = parseInt(prompt('indique el valor del radio del círculo'));

document.write(areaSquare(a));
document.write(areaTriangle(b,c));
document.write(areaCircle(d));

/*
5. Crear una función calculadora que reciba como 
parámetros: Dos operandos y la función que se quiera 
utilizar para calcular(+,-,*) y devuelva el resultado, 
los números y la función se pasaran por pormpt, usar 
function expression.
*/

const calculator = function(a,b,c){
    if(a==='+'){
        return `El resultado de ${b} ${a} ${c} es ${b+c}`;
    }else if(a==='-'){
        return `El resultado de ${b} ${a} ${c} es ${b+c}`;
    }else if(a==='*'){
        return `El resultado de ${b} ${a} ${c} es ${b*c}`;
    }else if(a==='/'){
        return `El resultado de ${b} ${a} ${c} es ${b/c}`;
    }
}

a = prompt('Indique la operación que quiere realizar. +,-,*,/');
b = parseInt(prompt('Indique el valor del primer numero'));
c = parseInt(prompt('Indique el valor del segundo número'));

document.write(calculator(a,b,c));
document.write(domainGithub('<br>'));

/*
6. Crear una función que dado una URL
 (Se representa con un string) por prompt, 
 me diga o no si pertenece al dominio de github, 
 usar function declaration.
*/

function domainGithub (a){
    if(a.includes('github')===true){
        return '<p>La web contiene el dominio de github</p>'
    }else{
        return '<p>La web no contiene el dominio de github</p>'
    }
}
a = 'github parapa';


document.write(domainGithub(a));

/*
7. Crea una funcion que dado un número por prompt te pinte 
por pantalla todos los números desde ese numero  hasta el 
0, de 8 en 8 ejmp:
-- del nro 100 al nr 0 ---
nr 100
nr 92
nr 84
nr 76
nro 68...etc hasta el nr 0
*/

function resta8(a){
    let b ='';
    for(let i=a; i>=0;i=i-8){
        b += `<p>${i}</p>`;
    }
    return b;
}
a = parseInt(prompt('Ingrese un número'));
document.write(resta8(a));

/*
8. Crear una función que calcule el Maximo Comun 
Divisor (Hint: Utilizar el algoritmo de euclides) 
y lo imprima por pantalla.
*/
function maximoComunDivisor (a,b){
    let dividendo = Math.max(a,b);
    let divisor = Math.min(a,b);
    let resto = Math.floor(Math.max(a,b)%Math.min(a,b));
    if(Math.max(a,b)% Math.min(a,b)===0){
        return `El máximo comun divisor entre ${a} y ${b} es ${Math.min(a,b)}`;
    }else
     while(resto>0){
        if(Math.floor(dividendo%divisor)===0){
            return resto;
        }else{
            resto = Math.floor(dividendo%divisor);
            dividendo = divisor;
            divisor = resto;

        }  
              
     }
     return resto;

}
// function algoritmoEuclides(numero1, numero2) {
    //     let check = numero1 % numero2;
    //     while (check !== 0) {
    //         checkTemp = check;
    //         check = numero2 % checkTemp;
    //     }
    //     return checkTemp;
    // }

a = parseInt(prompt('Indique un número'));
b = parseInt(prompt('Indique un número'));

document.write(maximoComunDivisor(300,175));


/*
9. Crea una función que dado un número por prompt 
pinte el siguiente cuadro por pantalla acorde a las 
medidas del número dado. (editado) 
*/

function comprobarDNI (){

    for(let i=0; a%b>=22;i++){
        
    }
    
}