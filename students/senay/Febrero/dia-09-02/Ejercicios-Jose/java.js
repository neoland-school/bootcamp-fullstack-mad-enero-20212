/**
 * Método GET:
Vamos a crear una app de Paises, para los ejercicios d nos traeremos de la siguiente url los datos de países 
usando la api  fetch,
'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'
 */

/**
 *  Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.
    Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
    Pinta en tu html los paises con el nombre en español, código país y prefijo.
    Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
    Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.
    Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.
 */

// FETCH PAISES +
// 1. Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.

async function getPaises() {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const paises = await r.json();
    console.log(paises.countries)
    return paises.countries

}


// 2.Crea una función que pinte en tu Html todos los países que el nombre en ingles sea mayor a 5 caracteres.
// 2a. Buscar en el Array de Objetos los paises que sean con 5 caracteres o mas
// 2b. Pintarlos en HTML

function pintaPaises(pais) {
    const parrafo = document.createElement('p');
    parrafo.classList.add('class_parrafo');
    parrafo.textContent = `${pais.name_en}`;
    document.body.appendChild(parrafo);
}


function findPais(arrPaises) {
    const paises5 = arrPaises.filter(e => e.name_en.length > 30)
    paises5.forEach(w => pintaPaises(w));
}
// si tengo un arrya y kiero una porcion de ella la paso por filter
// name_en su prop es un string
// async devuelve Promise
// target es el elemen del dom k aproduc ei evenko
// esta function esta copiada abajo pork se ejecuta asincro... 
// async function start() {
//     const pais = await getPaises();
//     findPais(pais)
// }
// start()
//-------------------------------------------

/**
 * 3.  Pinta en tu html los paises con el nombre en español, código país y prefijo.
 *      1a cambia al .name_es, añade .code y .dial_code.
 */


// function edit(editoParrafo) {
//     let beta = document.querySelectorAll('class_parrafo');
//     beta.textContent = `${editoParrafo.name_es}, ${editoParrafo.code}, ${editoParrafo.dial_code}`;
//     document.body.appendChild(beta);
//     console.log(beta)
// }

function pintaPaises(pais) {
    const parrafo = document.createElement('p');
    parrafo.classList.add('class_parrafo');
    parrafo.textContent = `${pais.name_es}, codigo del pais: ${pais.code}, prefijo: ${pais.dial_code}`;
    document.body.appendChild(parrafo);
}


async function start() {
    const pais = await getPaises();
    findPais(pais);


}
start()

// function findPais(arrPaises) {
//     const paises5 = arrPaises.filter(e => e.name_en.length > 5)
//     paises5.forEach(w => pintaPaises(w));
// }


// function pintaPaises(pais) {
//     const parrafo = document.createElement('p');
//     parrafo.classList.add('class_parrafo');
//     parrafo.textContent = `${pais.name_en}`;
//     document.body.appendChild(parrafo);
// }


/**
 *  4. Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises 
 *      a su versión en inglés.
 */



// añadir boton
const button = document.createElement('button');
button.textContent = 'EN';
document.body.appendChild(button);