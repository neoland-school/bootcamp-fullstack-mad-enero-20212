//ejercicios de la mañana//

let a = prompt('escribe un número');
let b = parseInt(a);



if(b >= 1 && b <= 10 && b%2===1){
    
    document.write('<div style= "width: 100px; height: 100px; background-color: #8756F3";></div>');
    
    } else if(b >= 1 && b <= 10 && b%2===0){
        document.write('<div style= "width: 100px; height: 100px; background-color: #007743";></div>');
        
    } else{(b > 10 && b <= 50)
        
        document.write('<div style= "width: 100px; height: 100px; background-color: #12F467";></div>');
    }



//ejercicios de la tarde//

//ejercicio 1//

    let a = parseInt(prompt("escribe un número"));
    let b = parseInt(prompt("escribe otro número"));
    
    
    
    document.write(Math.max(a, b));


//ejercicio 2//

let idioma= prompt("saluda");

let a = 'español';
let b = 'ingles';
let c= 'frances';

if(idioma === a){
    document.write('<p>hola</p>');
}else if(idioma === c){
    document.write('<p>bonjour</p>');

}else {(idioma === b)
    document.write('<p>hello</p>');
}


//ejercicio 3//


let a= prompt("escribe tu edad");

b= (a > '18') ? document.write(`<p>si</p>`) : document.write(`<p>no</p>`);


//ejercicio 4//


let a= parseInt(prompt("introduce el año"));


b= (a%4 === 0 && a%100 !== 0 || a%400 === 0) ? document.write(`<p>bisiesto</p>`) : document.write(`<p>no bisiesto</p>`);


//ejercicio 5//

a= prompt('introduce el color')

let b = "verde";
let c = "ambar";
let d = "rojo";

if(a === b){
    document.write(`<div class='semaforo'><div class='verde colores'></div> <div class='apagados colores'></div> <div class='apagados colores'></div></div>`);
}else if(a === c){
    document.write(`<div class='semaforo'> <div class='apagados colores'></div><div class='ambar colores'></div> <div class='apagados colores'></div></div>`);
} else { (a === d)
    document.write(`<div class='semaforo'> <div class='apagados colores'></div> <div class='apagados colores'></div><div class='rojo colores'></div></div>`);

}
