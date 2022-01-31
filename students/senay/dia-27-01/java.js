// Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays 
//concatenados y los mostrará en el navegador.


// let a = ['hey'];
// let b = ['bien'];

// function arr(par1, par2) {
//     return `${par1} ${par2}`;
// }
// document.write(arr(a, b));

// let a = ['hola', 'mundo'];
// let b = [' ktal'];
// function merge(parametro1, parametro2) {
//     return `${parametro1} ${parametro2}`;
// }
// document.write(merge(a, b));

/**
 * Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro 
 * es un array y false si es otro tipo de dato, ver metodos de array!.(easy)
 */
const soya = ['papa'];


function trueOrFalse(a) {
    if (soya.isArray) {
        document.write('true');
    } else {
        document.write('false');
    }
    return a;
}
document.write(trueOrFalse(a));