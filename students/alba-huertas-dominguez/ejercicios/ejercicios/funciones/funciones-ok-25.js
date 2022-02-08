
// NUMERO DEL 1 AL 100 PORCENTAJE DE CONTAMINACION  Y TE DIGA LA VELOCIDAD A LA QUE PUEDES IR 

const num= parseFloat(prompt("Indica la contaminacion utillizando un numero del 1 al 100"));

function pol(num){
    if( num >=75){return(' la velocidad a la que puedes ir es 70 km/h');
} else if(num>=40){return(' la velocidad a la que puedes ir es a 90 km/h');
}else{return('la velocidad a la que puedes ir es a 120km/h');
}
}
;
document.write(`${pol(num)}`)


// Modificar el ejercicio anterior para que solicite al usuario el 
//porcentaje de contaminación. Añadir 
//una nueva función que pinte la imagen de 
//la señal con la velocidad máxima permitida. 
//Sacar la imagen de internet.



const PORC= parseFloat(prompt("Indica el porcentaje de contaminacion"));

function pol(PORC){
    if( PORC >=75){return(`<img src="https://gorentalstore.com/uploads/admin/product_attachment/image/1173/Gomez-Oviedo-Alquiler-Se%C3%B1al-circular-prohibici%C3%B3n-velocidad-m%C3%A1x.-70-km/h-90-cm.R-301.jpg">`);
} else if(PORC >=40){return(' <img src="https://preventecsl.es/wp-content/uploads/2021/05/senal-de-trafico-prohibicion-90km.jpg">');
}else{return('<img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Limite_velocidad_120_autovia.png">');
}
}
;
document.write(`${pol(PORC)}`)


// como quitarle el signo del porcentaje?




let word = prompt("dime una palabra");
let cword= word.length;

// (Easy) Crear una función que dado un string me devuelva el caracter 
//que hay en la mitad (o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o

function Letter(nc){
    let character=((cword-1)/2)
    return document.write(word.charAt(character))
}

Letter(word)

//(Easy) Crear una función que dado un string me devuelva un string invertido. 
//Solicitar el string al usuario. EJ: hola -> aloh
// segundo ejemplo con un numero.

let word = (prompt("Dime una palabra"));
let cword=word.length

function reves (a){
    let reverse="";
    for( let i=cword;i>=0;i--){
        reverse+=a.charAt(i)

    } return reverse;

}


document.write (reves(word));


let num = prompt("introduce un numero");
function b (a) {
    let reverse = "";
    for (let i = a.length ; i>=0 ; i--) {
        reverse += a.charAt (i)
    }
    return reverse;
}
document.write (b(num));


//(Easy) Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel que se lee igual de izquierda a derecha 
//como de derecha a izquierda. EJ: radar. Pista: Utilizar la función del ejercicio 4.



let word = (prompt("Dime una palabra"));
let cword=word.length

function reves (a){
    let reverse="";
    for( let i=cword;i>=0;i--){
        reverse+=a.charAt(i)

    } return reverse === word

}

document.write (reves(word));

//(Easy) crear una función que resuelva la ecuación de segundo grado Ax^2+Bx+C=0. 
//El programa solicita A, B, C al usuario. 
//La función devolverá el valor positivo de la raíz (de los dos posibles). EJ: A=2, B=1, C=4 --> la funcion debe devolver -0.2928




function ecuación(a,b,c){
    let result =(-b+Math.sqrt(b*b-4*a*c))/2*a;
    return result
}
;

document.write (ecuación(100,500,100))


//(Medium) Escribir una funcion que recorra los enteros de un entero que 
//solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares


let n=parseInt(prompt("escribe un número entero"))

function num (n){
    for( let i=n; i>0;i--){
        if (i%2 ===0){ document.write(i+" Es par");
        }else{document.write(i+" Es impar");
        
    }}}

num(n);


//(Medium) Escribir una funcion que recorra los enteros de un entero que 
//solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares (segunda forma)


let n=parseInt(prompt("escribe un número entero"))

function num (n){
    for( let i=n; i>0;i--){
        if (i%2 ===0){ document.write(`<p> ${i} es par </p>`);
        }else{document.write(`<p> ${i} es impar </p>`);
    }
    } return i
}

num(n);



//(Medium) Escribir una función que dado un numero, devuelva el número al revés. Solicitar el número al usuario
 //  como lo he solicitado en string luego lo paso a numero con una variables

 let num = prompt("escribe un numero");

 function rev(a){
     let reverse=" ";
     for( let i= num.length; i>=0; i--){
         reverse +=a.charAt(i)
     } return reverse
 
 }
 
  let revNum =parseFloat (rev(num));
 document.write(revNum);
 document.write(typeof(revNum));
 
 