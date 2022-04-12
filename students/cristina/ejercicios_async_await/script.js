'use.strict';


/* Método GET:
1. Vamos a crear una app de Paises, para los ejercicios nos traeremos de la siguiente url los datos de países usando la api  fetch, 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'

- Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.

 - Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.

 

    1. Traer info de URL con async/await y verificar que tipo de datos trae.
       - Estructura de la info que trae:

    Objeto{
        array[
            {objeto}
            {objeto}
            {objeto}
            {objeto}
            ...
        ]
    
    2. Pintar 1 pais?

    3. Hay muhos paises dentro del array. Recorrer array y pintar cada uno: pais_en y que cumpla < 5 --> Filter
    
  
*/


/* async function solicitarPaises() {
    const r = await fetch("https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json")
    const data = await r.json();
    console.log(data.countries);
    return data.countries;

}
solicitarPaises()


 function pintarPais(pais){
  const cPais = document.createElement('p');
  cPais.textContent = `${pais.name_en}`;
  document.body.appendChild(cPais)
}

function pintarMayorQue(arrayP) {
    const pMayor = arrayP.filter(v => v.name_en.length > 5)
    pMayor.forEach(e => pintarPais(e));

}

async function start() {
    const paises = await solicitarPaises();
    pintarMayorQue(paises)
    
}

start() */

/*
- Pinta en tu html los paises con el nombre en español, código país y prefijo.

- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.*/

//CORREGIDO DESPUÉS DE CLASE

//Boton


const botonEn = document.createElement('button')
botonEn.textContent = 'EN'
document.body.appendChild(botonEn);

let paises = []

async function solicitarPaises() {
    const r = await fetch("https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json")
    const data = await r.json();
    paises = data.countries;
    return data.countries;

}

function borrarPais() {
    const countriesDOM = document.querySelectorAll("p");
    countriesDOM.forEach((c) => c.remove());
  }


function pintarPais(pais) {
    const cPais = document.createElement('p');
    cPais.textContent = `- ${pais.name_es} /  ${pais.code} / ${pais.dial_code}`;
    document.body.appendChild(cPais)
}

function pintarPaisIngles(pais) {
    const cPais = document.createElement('p');
    cPais.textContent = `- ${pais.name_en} /  ${pais.code} / ${pais.dial_code}`;
    document.body.appendChild(cPais)
}
// Pintar todos los países
async function pintarTodos() {
    const paises = await solicitarPaises();
    paises.forEach(e => pintarPais(e));
}

pintarTodos()


botonEn.addEventListener('click', () => {   
    
    borrarPais() 

    paises.forEach((e) => pintarPaisIngles(e))
    
})



