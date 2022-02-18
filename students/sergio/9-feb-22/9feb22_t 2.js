/*
// ejercicios 09/02/2022
// Método GET:Vamos a crear una app de Paises, para los ejercicios d nos traeremos de la siguiente url los datos de países usando la api  fetch, 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'

async function getPaises() {
    const a = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const b = await a.json();
    let arrayAllCountries = b.countries;
    
    return arrayAllCountries
}
getPaises().then(e => console.log(e));

// 1. Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.
async function getAllCountries() {
    const a = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const arrayPaises = await a.json();
    console.log(arrayPaises)
}
// getAllCountries();
// 2. Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
function htmlOutputP(data) {
    const p_data = document.createElement('p');
    p_data.textContent = data;
    p_data.classList.add('p_paises')
    document.body.appendChild(p_data);
}

async function getCountriesFour() {
    const a = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const b = await a.json();
    const arrayCountries = b.countries
    arrayCountries.forEach(e => {
        if(e.name_en.length > 4){
            htmlOutputP(e.name_en);
        }   
    });
}

// getCountriesFour();

// 3. Pinta en tu html los paises con el nombre en español, código país y prefijo.
async function getAllCountriesEspañol() {
    const a = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const b = await a.json();
    const arrayCountries = b.countries
    arrayCountries.forEach(e => {
        htmlOutputP(`${e.name_es} - ${e.code} - ${e.name_es}`)
    })
}

getAllCountriesEspañol();




// 4. Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
async function getAllCountriesEnglish() {
    const a = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const b = await a.json();
    const arrayCountriesEng = b.countries
    arrayCountriesEng.forEach(e => {
        htmlOutputP(`${e.name_en} - ${e.code} - ${e.name_es}`)
    })
}


const button_change = document.getElementById('button_change');
let contador = 0;
button_change.addEventListener('click', e => {
    const p_paises = document.querySelectorAll('.p_paises');
   // console.log(p_paises)
    contador++;
    if(contador%2 != 0 || contador === 1) {
    p_paises.forEach(e => {
            e.remove()
    })
    getAllCountriesEnglish();
    } else {
    p_paises.forEach(e => {
            e.remove()
    })
    getAllCountriesEspañol()
    }
})


// 5. Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.


let input_busqueda = document.getElementById('busqueda_text');

const button_busqueda = document.getElementById('button_busqueda')

input_busqueda.addEventListener('keyup', event => {
    
    getPaises().then( c => {
        const p_paiseS = document.querySelectorAll('.p_paises');
        p_paiseS.forEach(e => {
            e.remove()
        })
        c.forEach( e => {
            if(input_busqueda.value === e.name_en.substring(0,input_busqueda.value.length)){
                htmlOutputP(`${e.name_en} - ${e.code} - ${e.name_es}`)
            }
        })
    })
})

// 6. Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.

getPaises().then(c => {
let contadorPrefijos = 0;
    c.forEach( e => {
        if(e.dial_code > 20 && e.dial_code <600){
            contadorPrefijos++;
            htmlOutputP(`${e.name_en} - ${e.dial_code} - ${e.name_es}`)
        }
       
    })
 htmlOutputP(`Total paises con estos prefijos = ${contadorPrefijos}`);
})

*/
// Vamos a crear una app de crypto monedas la cual debe lucir como el diseño de la imagen, usaremos la api https://www.coingecko.com/es

// 1. Para ver el precio de las cripto monedas,  lo primero sera obtener los datos ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"),

async function allCryptos(){
    const a = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    const arrayCryptos = await a.json();
    console.log(arrayCryptos);
    return arrayCryptos;
    
}
//allCryptos();

// 2. Muestra en un html la lista de todas las criptomonedas con su precio actual y el  price change.
const container_table = document.getElementById('container_table');

function htmlOutputTable(obj){
    // TR //
    const container_div = document.createElement('div');
    container_table.appendChild(container_div)
    container_div.classList.add('container_div')

    // TD1 COLUMNA 1//
    const div_name = document.createElement('div');
    container_div.appendChild(div_name);
    div_name.classList.add('title_Coin');
    div_name.classList.add('c1')

    // IMG CRYPTO //
    const img_crypto = document.createElement('img');
    div_name.appendChild(img_crypto);
    img_crypto.src = obj.image;
    img_crypto.classList.add('img_Crypto');

    // P CRYPTO //
    const p_crypto = document.createElement('p');
    div_name.appendChild(p_crypto);
    p_crypto.textContent = `${obj.name} ${obj.symbol.toUpperCase()}`;
    p_crypto.classList.add('name_Crypto');

    // TD2 COLUMNA 2//
    const div_price = document.createElement('div');
    container_div.appendChild(div_price);
    div_price.classList.add('title_Price')
    div_price.classList.add('c2')

    // P PRICE CRYPTO //
    const p_price = document.createElement('p');
    div_price.appendChild(p_price)
    p_price.textContent = `$ ${obj.current_price}`;
    p_price.classList.add('p_price')

    // TD3 COLUMNA 3//
    const div_change = document.createElement('div');
    container_div.appendChild(div_change);
    div_change.classList.add('title_PriceChange')
    div_change.classList.add('c3')

    // P PRICE CRYPTO //
    const p_price_changed = document.createElement('p');
    div_change.appendChild(p_price_changed)
    p_price_changed.textContent = obj.price_change_percentage_24h
    p_price_changed.classList.add('p_price_changed')
    if(obj.price_change_percentage_24h < 0){
        p_price_changed.classList.remove('green');
        p_price_changed.classList.remove('black');
        p_price_changed.classList.add('red')
    } else if(obj.price_change_percentage_24h = 0){
        p_price_changed.classList.remove('green');
        p_price_changed.classList.remove('red');
        p_price_changed.classList.add('black')
    } else {
        p_price_changed.classList.remove('black');
        p_price_changed.classList.remove('red');
        p_price_changed.classList.add('green')
    }
}

 allCryptos().then(array => {
    array.forEach(e => {
        htmlOutputTable(e);
        
    });
})


let input_busqueda = document.getElementById('busqueda_text');

const button_busqueda = document.getElementById('button_busqueda')

input_busqueda.addEventListener('keyup', event => {
    
    allCryptos().then( c => {
        const div_crytos = document.querySelectorAll('.container_div');
        div_crytos.forEach(e => {
            e.remove()
        })
        c.forEach( e => {
            if(input_busqueda.value.toUpperCase() === e.name.substring(0,input_busqueda.value.length).toUpperCase()){
                htmlOutputTable(e)
            }
        })
    })
})



