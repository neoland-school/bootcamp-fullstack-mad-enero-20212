/* 
1. Preguntar al usuario por grados celsius. prompt
2. Procesar el tipo devuelto por el prompt
3. Aplicar la formula para convertir los celsius a farenheit
4. Mostrar por pantalla el resultado en el formato pedido
    XºC son YºF
*/

const CELSIUS_INPUT = prompt('Introduce tus grados celsius'); // paso 1 
//celsiusInput tiene un tipo de datos string
const CELSIUS = parseFloat(CELSIUS_INPUT); // number. paso 2
const FARENHEIT = (CELSIUS*9/5) + 32; // paso 3
document.write('<h1>' + CELSIUS + 'ºC son ' + FARENHEIT + 'ºF</h1>'); // paso 4