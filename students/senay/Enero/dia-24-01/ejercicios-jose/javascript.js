/*Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , 
usar  arrow function function.

document.write('<h2>Ejercicio-</h2>');
document.write('<p style="font-weight:bold;"></p>');
document.write(`<p class="sub";</p>`)
document.write(`<span></span>`);
*/

// const arrFn = (_params_) => {/*CODIGO DE LA FUNCION*/};
document.write('<h2>Ejercicio-1</h2>');
document.write('<p style="font-weight:bold;">Crea una función que devuelva el tipo de parámetro de entrada y píntalo por pantalla , usar  arrow function function.</p>');


// let aa = 5;

// const tipoParametro = (aa) => typeof aa;

// document.write(`<p>${(typeof a)}</p>`);


document.write('<h2>Ejercicio-2</h2>');
document.write('<p style="font-weight:bold;">Function que dado dos boleanos por prompt devuelva el AND de estos por pantalla, usar function declaration.</p>');

// let a = prompt("Escriba otra vez true o false");
// let b = prompt("Escriba otra vez true o false");

// function queEs(a, b) {
//     let e = a === 'true';
//     let d = b === 'true';
//     return document.write(e && d);
// }
// queEs(a, b);

document.write('<h2>Ejercicio-3</h2>');
document.write('<p style="font-weight:bold;">Crea una función que dado un numero por prompt, devuelva el número al revés por pantalla, usar function express</p>');

let num = prompt('esriba un numero');


function b(a) {
    let reverse = "";
    for (let i = a.length; i >= 0; i--) {
        reverse += a.charAt(i)
    }

    return reverse
}

document.write(b(num));