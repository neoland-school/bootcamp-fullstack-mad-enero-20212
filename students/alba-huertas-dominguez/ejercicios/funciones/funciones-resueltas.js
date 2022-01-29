function resta(a,b){
    return a-b;
};


 let r1= resta(10,4);


document.write(`<p>${r1}</p>
                <p>${resta(20,15)}</p>
                <p>${resta(10,7)}</p>

`);

 let palabra = 

function evaluar(palabra){
    return 
}


/*- pedir una palabra
- saber los caracteres de esa palabra.
- hacer un if para saber si el modulo es 0 o no. */

///2. Crear una función que dado un string devuelva si el string tiene longitud par o impar. Solicitar 2 strings al usuario y pintar la longitud en p's


function isLengthEven(str){
    return str.length%2 === 0;
 }

 // con arrow function
const isLengthEven= str => str.length%2 === 0;


let userString = prompt('Introduzca una frase o palabra');
document.write(`<p>${isLengthEven(userString)}</p>`);
userString = prompt('Introduzca una frase o palabra');
document.write(`<p>${isLengthEven(userString)}</p>`); 


let qs= 38

function parameter(qs){
return typeof qs;
};


let qs2=38

const parameter2=qs2 => typeof qs2;



document.write(`${parameter2(qs2)}`);

document.write(`${parameter(qs)}`)


//Escribir varias funciones que dada las medidas por prompt(radio, lados, etc) que calculen área y perímetro de diferentes figuras geométricas 
//(Rectángulo, Cuadrado, triángulo y Círculo), para el circulo usaremos rectangulo y cuadrado usaremos arrow function.


medida = parseFloat(prompt("indica las medidas del lado del cuadrado"))



function cuadrado(medida){
    return(medida)
};


document.write(`el area del cuadrado es ${cuadrado(medida*medida)} y el perimetro del cuadrado y ${cuadrado(medida*4)}`);

medida1 = parseFloat(prompt("indica las medidas de la base "))
medida2= parseFloat(prompt("indica las medidas de la altura "))

function rectangulo(medida1,medida2){
    return(medida1,medida2)
};

document.write(`el area del rectangulo ${rectangulo(medida1*medida2)} y el perimetro del rectangulo y ${rectangulo(medida1*2+medida2*2)}`);

document.write(`el area del triangulo ${rectangulo(medida1*medida2)} y el perimetro del triangulo y ${rectangulo((medida1+medida2*2)/2)}`);

radio = parseFloat(prompt("indica el radio del circulo"))

function circulo(radio){
    return(radio*radio*Math.PI)
};

document.write(`el area del CIRCULO ES ${circulo(radio)}`);

 let op1 = parseFloat(prompt("indica las medidas de la base "))
let op2= parseFloat(prompt("indica las medidas de la altura "))
let operacion=(prompt("indica las medidas de la altura "))



CALCULADORA:

function result(op1,op2,operacion){
    switch(operacion){
 case "+": return op1+op2;
 case "-": return op1-op2;
 case "*": return op1*op2;

    
}


}