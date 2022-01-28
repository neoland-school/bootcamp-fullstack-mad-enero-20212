document.write('<h2>Ejercicio-1</h2>');
document.write('<p style="font-weight:bold;">Crear una página web que imprima por pantalla los primeros 10 números, utilizando un bucle for. Modificarlo para que imprima los primeros 100. Crear una nueva versión utilizando un bucle while.</p>');
/*
document.write('<h2>Ejercicio-</h2>');
document.write('<p style="font-weight:bold;"></p>');
document.write(`<p class="sub";</p>`)
document.write(`<span></span>`);

. Crear una página web que imprima por pantalla los primeros 10 números, 
utilizando un bucle for. Modificarlo para que imprima los primeros 100. Crear una nueva versión utilizando un bucle while.
*/


// A for 10
document.write(`<p class="sub";>A-for(10): </p>`)
for (let i = 0; i < 10; i++) {

    document.write(`<span>${i}, </span>`)
}


// A for 100
document.write(`<p class="sub";>B-for(100): </p>`)
for (let c = 0; c < 100; c++) {
    document.write(`<span>${c}, </span>`)
}


// B while 10
document.write(`<p class="sub";>A-while(10): </p>`)

let b = 0;
while (b < 10) {
    document.write(`<span>${b}, </span>`);
    b++;
}

// B while 100
document.write(`<p class="sub";>B-while(100): </p>`)
let d = 0;
while (d < 100) {
    document.write(`<span>${d}, </span>`);
    d++;
}

/*
Crear una página web que cree 100 divs de color #F47732. Modificar el ejercicio para que los divs pares 
se sean de color #F47732 y los impares #1148F3. Modificar para que se muestren sobre un contenedor flex. 
Podéis utilizar cualquier tipo de bucle.
*/

document.write('<h2>Ejercicio-2</h2>');
document.write('<p style="font-weight:bold;">Crear una página web que cree 100 divs de color #F47732. Modificar el ejercicio para que los divs pares se sean de color #F47732 y los impares #1148F3. Modificar para que se muestren sobre un contenedor flex. Podéis utilizar cualquier tipo de bucle.</p>');

for (let box = 0; box < 100; box++) {
    if (box % 2 === 1) {
        document.write(`<div class="box-pares box"></div>`);
    } else {
        document.write(`<div class="box-impares box"></div>`);
    }
}

document.write('<h2>Ejercicio-3</h2>');
document.write('<p style="font-weight:bold;"> Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...</p>');

for (let potencia = 1; potencia <= 100; potencia++) {
    document.write(`${potencia ** 2}, `)
}

document.write('<h2>Ejercicio-4: Copiado (del profe Jose) e intentando entenderlo.</h2>');
document.write('<p style="font-weight:bold;">Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay.</p>');


let word = prompt('Introduzca una palabra para saber cuantas vocales contiene.');
let wordAcc = 0;

for (w = 0; w <= word.length; w++) {
    if (word.charAt(w) === 'a') {
        wordAcc++;
    } else if (word.charAt(w) === 'e') {
        wordAcc++;
    } else if (word.charAt(w) === 'o') {
        wordAcc++;
    } else if (word.charAt(w) === 'i') {
        wordAcc++;
    } else if (word.charAt(w) === 'u') {
        wordAcc++;
    }
}
document.write(`<p>El numero de vocales en la palabra <strong>${word}</strong> son ${wordAcc}</p>`);

document.write('<h2>Ejercicio-5: No se ni por donde empezar</h2>');