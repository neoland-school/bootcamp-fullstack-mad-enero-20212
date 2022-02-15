/*
 * Solicitar al usuario un número. A continuación solicitar al usuario tantas palabras como haya indicado 
 * en el primer número y guardarlas en un array de palabras. Con ese array tenemos que:
 * 
            Ordenar las palabras de menor a mayor longitud.
            Imprimir con un P si hay alguna palabra con más de una letra 't'
            Imprimir con un p si todas las palabras contienen al menos una 'a'
            Imprimir con un p la primera palabra que empiece por 'h' o el mensaje "no hay palabras que empiecen por h"
            Generar un nuevo array con las palabras dadas la vuelta
            Imprimir con una p cuántas palabras son infinitivos (terminan en ar er o ir)
*/



let numPalabras = prompt('Escriba un numero:');
let lasPalabras = prompt(`Escriba ${numPalabras} palabras`);
let arr = [];
let arrLength = arr.push(`${numPalabras}`);

document.write(`${numPalabras} + ${arr}`);



// function names() {
//     var nombres = [];
//     var cont = "";
//     for (var i = 0; i <= 2; i++) {
//         var x = prompt("Ingresa tu nombre:");
//         nombres[i] = x;
//     }
//     for (var i = 0; i <= 2; i++) {
//         cont += nombres[i] + " ";
//     }
//     document.getElementById("here").innerHTML = cont;
// }

// names();

/** Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). 
 * Los valores serán 'hola' para demo y true para 'hello'
 */

// const objeto = {
//     demo: 'Hola',
//     hello: true
// }
// document.write(objeto.hello);


/**
 *  Cambiar el valor de 'hello' a false
 */
// const objeto = {
//     demo: 'Hola',
//     hello: true
// }
// objeto.hello = false;
// document.write(objeto.hello);
/**
 * Crear un objeto que represente el Pais España con las propiedades ( nombre, capital, continente y SMI 
 * (en $)). Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).
 * 
 *  Añadir los objetos a un array.
    Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
    Mostrar en una lista de HTML los países que pertenecen a europa (editado) 
 */

// const españa = {
//     nombre: 'España',
//     capital: 'Madrid',
//     continente: 'Europa',
//     smi: 1111
// }

// const eeuu = {
//     nombre: 'EEUU',
//     capital: 'washington',
//     continente: 'America',
//     smi: 2222
// }

// const china = {
//     nombre: 'china',
//     capital: 'hong kong',
//     continente: 'asia',
//     smi: 2190
// }

// const nz = {
//     nombre: 'nueva zelanda',
//     capital: 'wellington',
//     continente: 'Mordor',
//     smi: 2500
// }

// const andora = {
//     nombre: 'andora', // tp string
//     capital: 'andoracapital',
//     continente: 'Europa',
//     smi: 1250 // tp numero
// }


//--------------------------- SUSTITUIDO POR FUNCTION() QUE SERIA LO SUYO --------------------------
//  a. Añadir los objetos a un array.

// let arr = [españa, eeuu, china, nz, andora]; 


// Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
// const sueldoMayor = arr.filter(v => v.smi > 1500);



// let htm = `<ul>`
// for (let i = 0; i < sueldoMayor.length; i++) {
//     htm += `<li>${sueldoMayor[i].nombre} </li>`;

// }
// htm += `</ul>`
// document.write(htm);
//--------------------------- SUSTITUIDO POR FUNCTION() QUE SERIA LO SUYO --------------------------


//  a. Añadir los objetos a un array.

// let arr = [españa, eeuu, china, nz, andora];

// function htm(arrF) {
//     let smi = arr.filter(v => v.smi > 1500);
//     // Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$

//     document.write(`<ul>`);
//     for (i = 0; i < smi.length; i++) {
//         document.write(`<li>${smi[i].nombre}</li>`);
//     }
//     document.write(`</ul>`);
// }

// htm(arr)

/*
 * Dado el objeto que se encuentra en el siguiente JS, mostrar en el HTML la siguiente informacion:
¿Cuántos países empiezan por J?
¿Cual es el país cuyo código es 'MG'?
¿Cual es el país con más letras en su nombre?
Mostrar los países que terminan por s
 */

// const countryListAllIsoData = [
//         { "code": "AF", "code3": "AFG", "name": "Afghanistan", "number": "004" },
//         { "code": "AL", "code3": "ALB", "name": "Albania", "number": "008" },
//         { "code": "DZ", "code3": "DZA", "name": "Algeria", "number": "012" },
//         { "code": "AS", "code3": "ASM", "name": "American Samoa", "number": "016" },
//         { "code": "AD", "code3": "AND", "name": "Andorra", "number": "020" },
//         { "code": "AO", "code3": "AGO", "name": "Angola", "number": "024" },
//         { "code": "AI", "code3": "AIA", "name": "Anguilla", "number": "660" },
//         { "code": "AQ", "code3": "ATA", "name": "Antarctica", "number": "010" },
//         { "code": "AG", "code3": "ATG", "name": "Antigua and Barbuda", "number": "028" },
//         { "code": "AR", "code3": "ARG", "name": "Argentina", "number": "032" },
//         { "code": "AM", "code3": "ARM", "name": "Armenia", "number": "051" },
//         { "code": "AW", "code3": "ABW", "name": "Aruba", "number": "533" },
//         { "code": "AU", "code3": "AUS", "name": "Australia", "number": "036" },
//         { "code": "AT", "code3": "AUT", "name": "Austria", "number": "040" },
//         { "code": "AZ", "code3": "AZE", "name": "Azerbaijan", "number": "031" },
//         { "code": "BS", "code3": "BHS", "name": "Bahamas (the)", "number": "044" },
//         { "code": "BH", "code3": "BHR", "name": "Bahrain", "number": "048" },
//         { "code": "BD", "code3": "BGD", "name": "Bangladesh", "number": "050" },
//         { "code": "BB", "code3": "BRB", "name": "Barbados", "number": "052" },
//         { "code": "BY", "code3": "BLR", "name": "Belarus", "number": "112" },
//         { "code": "BE", "code3": "BEL", "name": "Belgium", "number": "056" },
//         { "code": "BZ", "code3": "BLZ", "name": "Belize", "number": "084" },
//         { "code": "BJ", "code3": "BEN", "name": "Benin", "number": "204" },
//         { "code": "BM", "code3": "BMU", "name": "Bermuda", "number": "060" },
//         { "code": "BT", "code3": "BTN", "name": "Bhutan", "number": "064" },
//         { "code": "BO", "code3": "BOL", "name": "Bolivia (Plurinational State of)", "number": "068" },
//         { "code": "BQ", "code3": "BES", "name": "Bonaire, Sint Eustatius and Saba", "number": "535" },
//         { "code": "BA", "code3": "BIH", "name": "Bosnia and Herzegovina", "number": "070" },
//         { "code": "BW", "code3": "BWA", "name": "Botswana", "number": "072" },
//         { "code": "BV", "code3": "BVT", "name": "Bouvet Island", "number": "074" },
//         { "code": "BR", "code3": "BRA", "name": "Brazil", "number": "076" },
//         { "code": "IO", "code3": "IOT", "name": "British Indian Ocean Territory (the)", "number": "086" },
//         { "code": "BN", "code3": "BRN", "name": "Brunei Darussalam", "number": "096" },
//         { "code": "BG", "code3": "BGR", "name": "Bulgaria", "number": "100" },
//         { "code": "BF", "code3": "BFA", "name": "Burkina Faso", "number": "854" },
//         { "code": "BI", "code3": "BDI", "name": "Burundi", "number": "108" },
//         { "code": "CV", "code3": "CPV", "name": "Cabo Verde", "number": "132" },
//         { "code": "KH", "code3": "KHM", "name": "Cambodia", "number": "116" },
//         { "code": "CM", "code3": "CMR", "name": "Cameroon", "number": "120" },
//         { "code": "CA", "code3": "CAN", "name": "Canada", "number": "124" },
//         { "code": "KY", "code3": "CYM", "name": "Cayman Islands (the)", "number": "136" },
//         { "code": "CF", "code3": "CAF", "name": "Central African Republic (the)", "number": "140" },
//         { "code": "TD", "code3": "TCD", "name": "Chad", "number": "148" },
//         { "code": "CL", "code3": "CHL", "name": "Chile", "number": "152" },
//         { "code": "CN", "code3": "CHN", "name": "China", "number": "156" },
//         { "code": "CX", "code3": "CXR", "name": "Christmas Island", "number": "162" },
//         { "code": "CC", "code3": "CCK", "name": "Cocos (Keeling) Islands (the)", "number": "166" },
//         { "code": "CO", "code3": "COL", "name": "Colombia", "number": "170" },
//         { "code": "KM", "code3": "COM", "name": "Comoros (the)", "number": "174" },
//         { "code": "CD", "code3": "COD", "name": "Congo (the Democratic Republic of the)", "number": "180" },
//         { "code": "CG", "code3": "COG", "name": "Congo (the)", "number": "178" },
//         { "code": "CK", "code3": "COK", "name": "Cook Islands (the)", "number": "184" },
//         { "code": "CR", "code3": "CRI", "name": "Costa Rica", "number": "188" },
//         { "code": "HR", "code3": "HRV", "name": "Croatia", "number": "191" },
//         { "code": "CU", "code3": "CUB", "name": "Cuba", "number": "192" },
//         { "code": "CW", "code3": "CUW", "name": "Curaçao", "number": "531" },
//         { "code": "CY", "code3": "CYP", "name": "Cyprus", "number": "196" },
//         { "code": "CZ", "code3": "CZE", "name": "Czechia", "number": "203" },
//         { "code": "CI", "code3": "CIV", "name": "Côte d'Ivoire", "number": "384" },
//         { "code": "DK", "code3": "DNK", "name": "Denmark", "number": "208" },
//         { "code": "DJ", "code3": "DJI", "name": "Djibouti", "number": "262" },
//         { "code": "DM", "code3": "DMA", "name": "Dominica", "number": "212" },
//         { "code": "DO", "code3": "DOM", "name": "Dominican Republic (the)", "number": "214" },
//         { "code": "EC", "code3": "ECU", "name": "Ecuador", "number": "218" },
//         { "code": "EG", "code3": "EGY", "name": "Egypt", "number": "818" },
//         { "code": "SV", "code3": "SLV", "name": "El Salvador", "number": "222" },
//         { "code": "GQ", "code3": "GNQ", "name": "Equatorial Guinea", "number": "226" },
//         { "code": "ER", "code3": "ERI", "name": "Eritrea", "number": "232" },
//         { "code": "EE", "code3": "EST", "name": "Estonia", "number": "233" },
//         { "code": "SZ", "code3": "SWZ", "name": "Eswatini", "number": "748" },
//         { "code": "ET", "code3": "ETH", "name": "Ethiopia", "number": "231" },
//         { "code": "FK", "code3": "FLK", "name": "Falkland Islands (the) [Malvinas]", "number": "238" },
//         { "code": "FO", "code3": "FRO", "name": "Faroe Islands (the)", "number": "234" },
//         { "code": "FJ", "code3": "FJI", "name": "Fiji", "number": "242" },
//         { "code": "FI", "code3": "FIN", "name": "Finland", "number": "246" },
//         { "code": "FR", "code3": "FRA", "name": "France", "number": "250" },
//         { "code": "GF", "code3": "GUF", "name": "French Guiana", "number": "254" },
//         { "code": "PF", "code3": "PYF", "name": "French Polynesia", "number": "258" },
//         { "code": "TF", "code3": "ATF", "name": "French Southern Territories (the)", "number": "260" },
//         { "code": "GA", "code3": "GAB", "name": "Gabon", "number": "266" },
//         { "code": "GM", "code3": "GMB", "name": "Gambia (the)", "number": "270" },
//         { "code": "GE", "code3": "GEO", "name": "Georgia", "number": "268" },
//         { "code": "DE", "code3": "DEU", "name": "Germany", "number": "276" }
/*¿Cuántos países empiezan por J?
¿Cual es el país cuyo código es 'MG'?
¿Cual es el país con más letras en su nombre?
Mostrar los países que terminan por s 
*/

// ejercicios Jose


/**
 * Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla 
 * el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero 
 * con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, 
 * objects.(easy)
 */

// const ej2 = {
//     prop1: 'Hola',
//     prop2: 22
// }
// document.write(`<p>${ej2.prop1}</p>`);
// document.write(`<p>${ej2.prop2}</p>`);
// document.write(`<p>${ej2.prop1} ${ej2.prop2}</p>`);

// const ej2B = {
//     prop1B: null,
//     prop2B: 34,
// }
// document.write(`<p>${ej2B.prop1B}</p>`);
// document.write(`<p>${ej2B.prop2B}</p>`);
// document.write(`<p>${ej2B.prop1B} ${ej2B.prop2B}</p>`);

// const sobreMi = {
//     stringg: [1, 3, 4, 6, 5]
// }

/**
 * Crea una función que dado un objeto y un string que represente el nombre de la propiedad de ese objeto, 
 * elimine esa propiedad del objeto.(easy object.entries)
 */

/* 1 crear object y un string con nombre
 * 
 */







// const yo = {
//     nombre: 'senay',
//     altura: 172
// }

// function estaONo(par1, par2) {
//     return par1.hasOwnProperty(par2);

// }
// document.write(estaONo(yo, 'nombre'));
// -----------------------------por fin me salio

// Crea una función que imprima por pantalla el 'nombre: valor' de cada propiedad del objeto  
// (buscar metodos de objeto ejmp Object Keys).(easy)

// const senay = {
//     nombre: 'Senay',
//     altura: 172,
//     nacionalidad: 'Bulagara'
// }

// function senayFunction(a) {  // creas function,nombre,.. (a) es su parametro
//     return Object.entries(a) // devuelves la formula obj,entr(a)
// }

// document.write(senayFunction(senay));

/*
Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, 
minutos y segundos e imprimelo por pantalla.(medium)
 */
// const partir = {
//     hora: '18:40:32'
// }


// function hourSlice(hora) {
//     return hora.slice(0, 2);
// }
// document.write(hourSlice);