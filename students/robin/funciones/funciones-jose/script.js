
//EJERCICIO 1

/*
const datos = (nombre, apellido) => {
    return `${nombre} ${apellido}`;

}

document.write(datos("Robin", "Bucad"))
*/


//EJERCICIO 2 

/*

let n1 = prompt("introduzca num");
let n2 = prompt("Introduce segundo numero");


function hola (n1,n2){
    let a = n1 === "true";
    let b = n2 === "true";
    return document.write(a && b);
}
  
hola(a,b);





// EJERCICIO 3
 
/*

function invertirNumero(numero){
    return Number(numero.toString().split('').reverse().join(''))
}

let num = prompt("pon un numero");

document.write(num)
document.write("<br>")
document.write(invertirNumero(num));

*/


// EJERCICIO 4 

/*

// RECTANGULO

let base = parseInt(prompt("Base del rectangulo"));
let altura = parseInt(prompt("altura del rectangulo"));
let area;
area = base * altura;
let perimetro;
perimetro = base + altura + base + altura;


const areaFigura = (base, altura) => `El area del rectangulo es ${area}`;
const perimetroFigura = (base, altura) => `El perimetro del rectangulo es ${perimetro}`;


document.write(areaFigura(area));
document.write(`<br>`);
document.write(perimetroFigura(perimetro));
document.write(`<br>`);

// CUADRADO

let baseCuadrado = parseInt(prompt("longitud de un lado del cuadrado"));
let areaCuadrado = baseCuadrado ** 2;
let perimetroCuadrado = 4 * baseCuadrado;

const areaFigura2 = (area) => `El area del cuadrado es ${area}`;
const perimetroFigura2 = (base, altura) => `El perimetro del cuadrado es ${perimetroCuadrado}`;

document.write(areaFigura2(areaCuadrado));
document.write(`<br>`);
document.write(perimetroFigura2(perimetroCuadrado));
document.write(`<br>`);


// CIRCULO

let radio = parseInt(prompt("Radio del circulo"));
let radioCirc;
radioCirc = 2* Math.PI * radio;
let radioArea = Math.PI * radio ** 2;

function  radiomedida (perimeter){
    return `El perimetro del circulo es ${radioCirc}`;
}

function radioarea(area){
    return `El area del circulo es ${radioArea}`
}

/*

document.write(radiomedida(radioCirc));
document.write(`<br>`);
document.write(radioarea(radioArea));
document.write(`<br>`);

// TRIANGULO 

let lado1 = parseInt(prompt("Longitud base del triangulo"));
let lado2 = parseInt(prompt("Longitud altura del triangulo"));


let triangArea;
triangArea = (lado1 * lado2) / 2;
let triangPerim;

triangPerim = lado1 + lado2 + lado2;

function trianguloArea (area){
    return `El area del triangulo es ${triangArea}`
}

function  trianguloPerim(perim){
    return `El perimetro del triangulo es ${triangPerim}`
}

document.write(trianguloArea(triangArea));
document.write(`<br>`);
document.write(trianguloPerim(triangPerim));
*/

// EJERCICIO 5

let numero1 = parseInt(prompt("Introduzca primer numero"));
let numero2 = parseInt(prompt("Introduzca el segundo numero"));
let operador = prompt("Elija entre : + -")

function calculadora(operadores) {
    
    
    switch(operador){
        case "+": 
        document.write(numero1 + numero2)
    break;

    case "-":
        document.write(numero1 - numero2)
    break;
    }
    return `El resultado es ${operador} `
    
}

document.write(calculadora(operador))