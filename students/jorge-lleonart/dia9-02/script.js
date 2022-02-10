// 1- Crear una función que realice una petición a nuestro backend (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) y pinte el resultado por pantalla. Realizar el ejercicio utilizando then. Responder a las siguientes preguntas:
// ¿Qué tipo de datos tiene la respuesta?
// El metodo JSON lo convierte en un objeto

// ¿Cuál es la ip y el puerto de la petición?
// IP Y PUERTO 52.85.187.103:443

// ¿Cuántos atributos tiene nuestra respuesta?
// 1

// ¿Qué tipo de datos tiene esos atributos?
// una propiedad tipo string

// ¿Qué código http de respuesta hemos recibido? 
// 200

// function getInfo(){
//     return fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
//         .then(r => r.json())
//         .then(p => console.log(p))
// }

// getInfo()

// 2 - Repetir la función del ejercicio 1 pero esta vez utilizando async/await


// async function getInfo(){
//     const r = await fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
//     const p = await r.json()
//     return console.log(p)
// }

// getInfo()

// 3- Imprimir 1 de los atributos de la respuesta en un p en el body
// let paragraph = document.createElement('p');
// document.body.appendChild(paragraph);

// async function getInfo(){
//     const r = await fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
//     const p = await r.json()
//     return paragraph.textContent = `${p.hola}`;
// }

// getInfo()


// Datos de frutas:
// 1- Crear una función que obtenga los datos de frutas en España. Esta función obtendrá los datos por GET de la siguiente URL (https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0 ). Construir una función usando async/await que pinte un listado de frutas en el HTML y que miestre la siguiente información de cada fruta (nombre, origen y su imagen). contestar a las siguientes preguntas:
// ¿Qué tipo de datos tiene la respuesta?
// ¿Cuál es la ip y el puerto de la petición?
// ¿Cuántos atributos tiene nuestra cada elemento de la fruta de la respuesta?
// ¿Qué tipo de datos tiene esos atributos?
// ¿Qué código http de respuesta hemos recibido?

// async function getFruits(){
//     const r = await fetch('https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0');
//     const fruits = await r.json();
//     return fruits;
// }

// function printFruit(fruit){
//     // pinta una fruta en el HTML
//     const container = document.createElement('div');

//     const img = document.createElement('img');
//     img.src = fruit.img;

//     const pName = document.createElement('p');
//     pName.textContent = fruit.name;

//     const pOrigin = document.createElement('p');
//     pOrigin.textContent = fruit.origin;

//     container.appendChild(pName);
//     container.appendChild(img);
//     container.appendChild(pOrigin);

//     document.body.appendChild(container);
// }

// function printFruits(fruitArr){
//     // pinte todas sus frutas en el HTML
//     fruitArr.forEach(f => printFruit(f));
// }


// async function startApp(){
//   const fruits = await getFruits();
//   printFruits(fruits);
// }

// startApp();

////////////////////////////////////////////////////
// EJERCICIOS DE POR LA TARDE


// Método GET:
// Vamos a crear una app de Paises, para los ejercicios d nos traeremos de la siguiente url los datos de países usando la api  fetch, 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'
// 1. Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.
//  2. Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
//  3. Pinta en tu html los paises con el nombre en español, código país y prefijo.
//  4. Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
// 5. Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.
// 6. Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.


async function getInfo(){
    const r = await fetch(`https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json`)
    const p = await r.json()
    // console.log(p)
    return p.countries
}

// getInfo()

// function printCountry(country){
//     const cName = document.createElement('p');
//     cName.textContent = `${country.name_en}, ${country.name_es}, ${country.dial_code}, ${country.code}`;
//     document.body.appendChild(cName);
// }

function printCountryEn(country){
    const cName = document.createElement('p');
    cName.classList.add('parrafo')
    cName.textContent = country.name_en;
    document.body.appendChild(cName);
}

let buttonChange = document.querySelector('#change__button');
buttonChange.addEventListener('click', async() => {
    let paises = await getInfo()
    document.querySelectorAll('.parrafo').forEach((a,i) => a.textContent = paises[i].name_es)
    // console.log(paises)
});

function printCountriesEn(countriesArr){
    countriesArr.forEach(a => printCountryEn(a))
    //FORMA 1
    // let countrisMoreThanFour= countriesArr.filter(e => e.name_en.length>10)
    // countrisMoreThanFour.forEach(a => printCountry(a));
    // FORMA 2
    // countriesArr.forEach(a =>{
    //     if(a.name_en.length>4){
    //         printCountryEn(a)
    //     }
    // })
}

async function startApp(){
    const countries = await getInfo();
    printCountriesEn(countries);
}

startApp()

// Ejercicio 5 
// sacar el valor del input para compararlo con las letras 
// filtro que identifieque las palabras que empizan por arg

let inputPaises = document.getElementById('searchInput');

let boton = document.getElementById("boton");

inputPaises.addEventListener("keyup", async ()=>{
    const p_paiseS = document.querySelectorAll('.parrafo');
    p_paiseS.forEach(e => {
        e.remove()
    })
    let paises = await getInfo()
    paises.forEach(element => {
        console.log(inputPaises.value)
        if(inputPaises.value === element.name_en.substring(0,inputPaises.value.length)){
            printCountryEn(element)
        }
    })
})

// async function compare(a){
//     let paises = await getInfo()
//     paises.forEach(element => {
//         if(a.value === element.name_en.substring(0,a.value.length)){
//             printCountryEn(element)
//         }
//     })
//     // console.log(paises)
// }

// compare()

// codigo de sergio

// let input_busqueda = document.getElementById('busqueda_text');

// const button_busqueda = document.getElementById('button_busqueda')

// input_busqueda.addEventListener('keyup', event => {
    
//     getPaises().then( c => {
//         const p_paiseS = document.querySelectorAll('.p_paises');
//         p_paiseS.forEach(e => {
//             e.remove()
//         })
//         c.forEach( e => {
//             if(input_busqueda.value === e.name_en.substring(0,input_busqueda.value.length)){
//                 htmlOutputP(`${e.name_en} - ${e.code} - ${e.name_es}`)
//             }
//         })
//     })
// })




// Vamos a crear una app de crypto monedas la cual debe lucir como el diseño de la imagen, usaremos la api https://www.coingecko.com/es
//  Para ver el precio de las cripto monedas,  lo primero sera obtener los datos ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"),
// Muestra en un html la lista de todas las criptomonedas con su precio actual y el  price change.
//  si el price change es  negativo deberá mostrarse en rojo, si es positivo en verde.
// Debera tener un filtro de búsqueda que filtre por nombre de la cripto, basar el diseño en la imagen siguiente.














