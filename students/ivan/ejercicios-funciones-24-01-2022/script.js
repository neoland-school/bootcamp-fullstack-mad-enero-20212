/*
1. Crear una función que devuelva la resta de dos números.
 Llamad a la función 3 veces con valores distintos 
 y pintar los resultados en un p cada uno
*/

function resta (a,b){
    return a-b;
}

 let a = parseInt(prompt('Indique un número'));
 let b = parseInt(prompt('Indique un número'));

 c = resta(a,b);

 document.write(`<p>El resultado de restar ${a} y ${b} es ${c}</p>`);

 document.write(`<p>El resultado de restar ${a} y ${b} es ${resta(a,b)}</p>`);

 a = parseInt(prompt('Indique un número'));
 b = parseInt(prompt('Indique un número'));
 document.write(`<p>El resultado de restar ${a} y ${b} es ${resta(a,b)}</p>`);


 a = parseInt(prompt('Indique un número'));
 b = parseInt(prompt('Indique un número'));
 document.write(`<p>El resultado de restar ${a} y ${b} es ${resta(a,b)}</p>`);

/*
2. Crear una función que dado un string 
devuelva si el string tiene longitud 
par o impar. Solicitar 2 strings al 
usuario y pintar la longitud en p's
*/

a = prompt('escriba una palabra');
b = prompt('escriba otra palabra');

function longString (a){

    if(a.length%2===0){
        return `par`;
    }else{
        return `impar`;

    }
    
}
let c= longString(a);
let d= longString(b);
document.write(`<p>La longitud de la palabra ${a} es ${c}</p>`);
document.write(`<p>La longitud de la palabra ${b} es ${d}</p>`);

/*
3. Crear una función que dado un número 
x devuelva un string con la estructura 
HTML que cree una lista ordenada con x 
items diciendo `hola`. Modificar el 
programa anterior para pedir al usuario 
el número y pintar una lista con ese 
número y otra lista con el doble de 
items del número que indico el usuario. 
Por ejemplo si el usuario ha puesto 4. 
El programa deberá pintar dos `ol` 
uno con 4 `li` y otro con 8 `li`
*/

a = parseInt(prompt('Ingrese el valor de la extensión de la lista'));

function list(a){
    let htmlOutput ='<ol>';
    for(let i=0; i<a;i++){
        htmlOutput += `<li>${i}</li>`;

    }
    htmlOutput += '</ol>';


    return htmlOutput;

}
document.write(list(a));
document.write(list(a*2));