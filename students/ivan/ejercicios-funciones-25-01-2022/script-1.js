/*
1. (Easy) crear una función que dado un número 
del 1 al 100 indique el porcentaje de contaminación 
de Madrid. Ayuso ha dicho en rueda de prensa esta mañana 
que cuando la contaminación supere el 40%, los coches
 no podrán superar los 90km/h. Si la contaminacion 
 supera el 75% los coches no podrán superar los 70km/.
  La velocidad normal de una autopista es de 120km/h. 
  Crear una función que dado un porcentaje de contaminación
   me indique la velocidad a la que puede ir un coche.
*/

const pullution = (a) => a;

function velocityPollution (a){

    if (a<=40){
        return 'Puede circular a 120km/h';
    
    }else if(a>40 && a<=75){
        return 'La velocidad máxima permitida es de 90km/h';

    }else if (a>75){
        return 'La velocidad máxima permitida es de 70km/h';
    }
}

document.write(velocityPollution(76));

/*
2. (Easy) Modificar el ejercicio anterior para que 
solicite al usuario el porcentaje de contaminación. 
Añadir una nueva función que pinte la imagen de la 
señal con la velocidad máxima permitida. Sacar la 
imagen de internet.
*/
function velocityPollutionImg (a){

    if (a<=40){
        return '<img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Limite_velocidad_120_autovia.png" alt="">';
    
    }else if(a>40 && a<=75){
        return '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Limite_velocidad_90_autovia.png/1200px-Limite_velocidad_90_autovia.png" alt="">';

    }else if (a>75){
        return '<img src="https://gorentalstore.com/uploads/admin/product_attachment/image/1173/Gomez-Oviedo-Alquiler-Se%C3%B1al-circular-prohibici%C3%B3n-velocidad-m%C3%A1x.-70-km/h-90-cm.R-301.jpg" alt="">';
    }
}
document.write('<br></br>');

//document.write(velocityPollutionImg(50));

/*
3. (Easy) Crear una función que dado un string me 
devuelva el caracter que hay en la mitad (o el 
    anterior a la mitad en caso de que sea par). 
    Solicitar el string al usuario. EJ: radar --> d;
     hola --> o
*/

function middlehCharString (a){
    if(a.length%2===0){
        return a.charAt(a.length/2-1);
    }else{
        return a.charAt(a.length/2);
    }
}

let randomWord = prompt('Indique una palabra');

document.write(middlehCharString(randomWord));
document.write('<br></br>');


/*
4. (Easy) Crear una función que dado un 
string me devuelva un string invertido. 
Solicitar el string al usuario. EJ: hola -> aloh
*/

randomWord = prompt('Ingrese una cadena de caracteres');

const numberInvertido = function(a){
    
    let b= '';    
    for(let i=0; i<=a.length;i++){
        b += a.charAt((a.length)-i);
        
    }
    return b;

}
document.write(numberInvertido(randomWord));
document.write('<br></br>');


/*
5. (Easy) Crear una funcion que dado un string 
me devuelva si es palíndromo o no. Un string 
palíndromo es aquel que se lee igual de izquierda a
 derecha como de derecha a izquierda. EJ: radar. 
 Pista: Utilizar la función del ejercicio 4.
*/

randomWord = prompt('Ingrese una cadena de caracteres');

const palindromo = function(a){
    
    let b= '';    
    for(let i=0; i<=a.length;i++){
        b += a.charAt((a.length)-i);
        
    }
    if(a===b){
        return 'Esto es un palíndromo'

    }else{
        return 'Esto no es un palíndromo'

    }

}
document.write(palindromo(randomWord));
document.write('<br></br>');

/*
6. (Easy) crear una función que resuelva la ecuación 
de segundo grado Ax^2+Bx+C=0. El programa 
solicita A, B, C al usuario. La función 
devolverá el valor positivo de la raíz 
(de los dos posibles). 
EJ: A=2, B=4, C=1 --> la funcion debe devolver -0.2928
*/

function sqrt (a,b,c){
    
    return (-b+Math.sqrt(b*b-4*a*c))/(2*a);
}

document.write(sqrt(2,4,1));
document.write('<br></br>');


/*
7. (Medium) Escribir una funcion que recorra 
los enteros de un entero que solicitemos al usuario
 y vaya imprimendo por pantalla si esos son pares o 
 impares
*/
function enteros(a){
    let c = '';
    for(let i = -a; i<=a;i++){
        if(i%2===0){
            c+= `${i} (Par), `;
        }else{
            c+= `${i} (Impar), `;
        }

    }
    return c;
}

document.write(enteros(5));
document.write('<br></br>');



/*
8. (Medium) Escribir una función que dado un numero, 
devuelva el número al revés. Solicitar el número al 
usuario
*/
randomNumber = prompt('Ingrese una numero');

const numberInvertido_2 = function(a){
    
    let b= '';    
    for(let i=0; i<=a.length;i++){
        b += a.charAt((a.length)-i);
        
    }
    return parseInt(b);

}
document.write(numberInvertido_2(randomNumber));
document.write('<br></br>');

/*
9. (Medium) Escribir una función que dado un 
número, indique si este es capicua o no. Un 
numero es capicua si se lee igual de izquierda 
a derecha que de derecha a izquierda. EJ. 1221
*/

const capicua = function(n){
    let currentNumber = n;
    let reverseNumber = 0;
    while(currentNumber>0){
        reverseNumber = reverseNumber*10 + (currentNumber%10);
        currentNumber = Math.floor(currentNumber/10);

    }
    if(reverseNumber===n){
        return 'El número es capicúa'
    }else{
        return 'El número no es capicúa';
}
    }
    
document.write(capicua(121));
document.write('<br></br>');

/*
10. un número n,  devuelva un string con  los 
números primos menores o iguales a n separados 
por , . Un número primo es aquel que solo se 
puede dividir por el mismo o por 1.  
Por ejemplo si n=30, entonces la función 
devuelve 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
*/

function primos(n){
    let numerosPrimos = '';
    let contador = 0;
    for(let i=n;i>=1;i--){
        contador = 0;
       for(let j=1; j<=i;j++){
        if(n%j===0){
            contador++;
        } 
       } 
       if(contador===2){
        numerosPrimos += `${n}, `;
        }
       n = n - 1;
    }
    return numerosPrimos;
}
document.write(primos(30));
document.write('<br></br>');

/*
11. (hard) La sucesión de fibonacci es una lista 
de números infinita muy presente en la vida real 
(https://www.neoteo.com/la-sucesion-de-fibonacci-en-la-naturaleza/).
 Esta sucesión probablemente nos suene de la 
 película "El código Da Vinci". Consiste en calcular
  el siguiente número teniendo en cuenta el valor 
  de los anteriores, siguiendo la siguiente 
  fórmula. fib(n) = fib(n-1) + fib(n-2). Es decir
   el fibonacci de 3 por ejemplo se calcula sumando 
   el fib(2) junto con el fib(1). Para los casos más 
   básicos tenemos que fib(0) = 0 y fib(1) = 1. 
   Construir una función que dado un numero entero
    devuelva su número de fibonacci. Solicitar el 
    entero al usuario. Pista: Se puede hacer con un 
    unico bucle.
*/

function fibonacciNumber(n){
    //let fibonaccilist = '';
    let previousNumber = 0;
    let currentNumber = 1;
    let nextNumber = 0;
    if(n===0){
        return n;
    }
    for(let i=1;i<=n;i++){
        nextNumber = previousNumber + currentNumber; 
        previousNumber = currentNumber;
        //fibonaccilist += `${currentNumber}, ` Para rear una lista que los almacene
        currentNumber = nextNumber
    }
    return currentNumber; //Pondriamos la variable fibonaccilist para crear una lista que almacene todos los fibonnaci. 
}

document.write(fibonacciNumber(5));
document.write('<br></br>');


/*
12. (hard) Calculadorea de salario Neto simplificada.
 En España un empleado percibe un salario bruto anual,
  esto es lo que una empresa le paga antes de descontar
   impuestos. Hacienda (Que somos tod@s) aparece y de 
   ese salario nos quita principalmente dos bloques de 
   impuestos (el IRPF y la parte de la Seguridad Social).
    Vamos a suponer que la seguridad social son un 6,5% 
    del salario bruto. El IRPF es un impuesto progresivo,
     es decir, que se aplica por tramos de sueldo. 
     Construir una aplicación que solicite al usuario 
     su salario bruto anual y muestre en HTML la siguiente
      información. Salario bruto, Cuota de la SSGG, 
      Impuesto del IRPF, Salario Neto anual, Salario 
      neto mensual (12 pagas), Salario Neto mensual 
      (14 pagas)+cuantía de pagas extra. Para conocer 
      como funcionan los tramos y como hacer el calculo, 
      podéis leer el siguiente artículo que os enseña un 
      ejemplo.
*/
