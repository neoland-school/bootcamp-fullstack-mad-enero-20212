//1 (Easy) crear una función que dado un número del 1 al 100 indique el porcentaje de contaminación de Madrid. Ayuso ha dicho en rueda de prensa esta mañana que cuando la contaminación supere el 40%, los coches no podrán superar los 90km/h. Si la contaminacion supera el 75% los coches no podrán superar los 70km/. La velocidad normal de una autopista es de 120km/h. Crear una función que dado un porcentaje de contaminación me indique la velocidad a la que puede ir un coche.


















// 2(Easy) Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. Sacar la imagen de internet.
// (Easy)




// 3. (Easy) Crear una función que dado un string me devuelva el caracter que hay en la mitad (o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o



// let str= prompt('introduce una palabra');
// function mitad (a){
    
//     return document.write( a.charAt((a.length-1)/2));
// }


// mitad(str);




// 4. (Easy) Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. EJ: hola -> aloh

// let srt = prompt('introduce string')


// function reves (a){
//     let b = '';
//     for (let i=a.length-1; i>=0; i--){
       
//         b=b+a.charAt(i);
//     }
//     return document.write(b);
// }

// reves(srt)


// 5.(Easy) Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel que se lee igual de izquierda a derecha como de derecha a izquierda. EJ: radar. Pista: Utilizar la función del ejercicio 4.

// let srt = prompt('introduce string')


// function reves (a){
//     let b = '';
//     for (let i=a.length-1; i>=0; i--){
       
//         b=b+a.charAt(i);
        
//     }
//     let compare = (a===b);
//     return document.write('es un palindromo?'+' '+compare);
// }

// reves(srt);



// 6.(Easy) crear una función que resuelva la ecuación de segundo grado Ax^2+Bx+C=0. El programa solicita A, B, C al usuario. La función devolverá el valor positivo de la raíz (de los dos posibles). EJ: A=2, B=1, C=4 --> la funcion debe devolver -0.2928

// let aeq= parseInt(prompt('introduce la variable a'));
// let beq= parseInt(prompt('introduce la variable b'));
// let ceq= parseInt(prompt('introduce la variable c'));


// function ecuacion (a, b, c){
//     let result= (-b+Math.sqrt(b**2-4*a*c))/2*a
//     return document.write(`<p> ${result }</p>`);


// }

// ecuacion(aeq, beq, ceq);

// 7. (Medium) Escribir una funcion que recorra los enteros de un entero que solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares


// let entero= parseInt(prompt('escribe tú número'))

// function escribir (n){
     
//     for (i= 0; i<= n ; i++){
//     document.write (`<p> ${i} es par? ${i%2 === 0}</p>`) }
// }


// escribir(entero);

// 8 y 9 . (Medium) Escribir una función que dado un numero, devuelva el número al revés. Solicitar el número al usuario // 9(Medium) Escribir una función que dado un número, indique si este es capicua o no. Un numero es capicua si se lee igual de izquierda a derecha que de derecha a izquierda


// let nums = (prompt('introduce numero'))


// function reves (a){
//     let b = ''; 
//     for (let i=a.length-1; i>=0; i--){
       
//         b=b+a.charAt(i);
//     }let compare = (a===b)
//     return document.write(b + compare);

    

// }
// reves(nums)

// 10. (Medium) Escribir una función que calcule dado un número n,  devuelva un string con  los números primos menores o iguales a n separados por , . Un número primo es aquel que solo se puede dividir por el mismo o por 1.  Por ejemplo si n=30, entonces la función devuelve 2, 3, 5, 7, 11, 13, 17, 19, 23, 29




// 12. (hard) Calculadorea de salario Neto simplificada. En España un empleado percibe un salario bruto anual, esto es lo que una empresa le paga antes de descontar impuestos. Hacienda (Que somos tod@s) aparece y de ese salario nos quita principalmente dos bloques de impuestos (el IRPF y la parte de la Seguridad Social). Vamos a suponer que la seguridad social son un 6,5% del salario bruto. El IRPF es un impuesto progresivo, es decir, que se aplica por tramos de sueldo. Construir una aplicación que solicite al usuario su salario bruto anual y muestre en HTML la siguiente información. Salario bruto, Cuota de la SSGG, Impuesto del IRPF, Salario Neto anual, Salario neto mensual (12 pagas), Salario Neto mensual (14 pagas)+cuantía de pagas extra. Para conocer como funcionan los tramos y como hacer el calculo, podéis leer el siguiente artículo que os enseña un ejemplo (https://www.bankinter.com/blog/finanzas-personales/como-calcular-irpf-caso-practico)



// salario bruto : N
// cuota de la ssgg; 6,5 % del salro bruto
// IRPF; Hasta 12.450 euros 19&
//     De 12.450 euros a 20.200 euros 24%
//     De 20.200 euros a 35.200 euros 30%
//     De 35.200 euros a 60.000 euros 37%
//     De 60.000 euros a 300.000 euros 45%
//     A partir de 300.000 euros 47%
// salario neto anual= neto x 12
// salario neto bruto - ssgg y irpf
// salario neto + paga extra


let precio = 8000;
let descu = 15;


let salario= parseInt(prompt('introduce tu salario bruto'))

function calcularsalario(s){
    if (s<= 12450) { document.write(`<p>el salario en 12 meses ${s*0.935*0.81/12} </p>`) 
                     document.write(`<p>el salario en 14 meses ${s*0.935*0.81/14} </p>`)
                    document.write(`<p>su cotizacion a ssgg es  ${s*0.065} su irpf ${s*0.19}</p>`) // esto habria que hacerlo igual en todos los casos y listo 
                    
        
    }else if (s<=20.200) {document.write(`<p>el salario en 12 meses ${s*0.935*0.76/12} </p>`) 
                          document.write(`<p>el salario en 14 meses ${s*0.935*0.76/14} </p>`)
        
    } else if (condition) {document.write(`<p>el salario en 12 meses ${s*0.935*0.70/12} </p>`) 
                          document.write(`<p>el salario en 14 meses ${s*0.935*0.70/14} </p>`)
        
    } else if (condition) {document.write(`<p>el salario en 12 meses ${s*0.935*0.63/12} </p>`) 
                           document.write(`<p>el salario en 14 meses ${s*0.935*0.63/14} </p>`)
        
    } else if (condition) {document.write(`<p>el salario en 12 meses ${s*0.935*0.55/12} </p>`) 
                           document.write(`<p>el salario en 14 meses ${s*0.935*0.55/14} </p>`)
        
    } else {document.write(`<p>el salario en 12 meses ${s*0.935*0.53/12} </p>`)
            document.write(`<p>el salario en 14 meses ${s*0.935*0.53/14} </p>`);
        
    }

    
}

calcularsalario(salario)























