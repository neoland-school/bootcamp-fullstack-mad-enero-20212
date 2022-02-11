// const madridCity = {
//     name: 'Madrid',
//     img: 'https://revistatraveling.com/wp-content/uploads/2020/11/gran-via-alcala.jpg',
//     description: 'Madrid es la capital central de España con elegantes bulevares y amplios parques muy cuidados, como el Buen Retiro. Es famosa por sus ricas colecciones de arte europeo, con obras de Goya, Velázquez y otros maestros españoles en el Museo del Prado.'
// }

// const kiotoCity = {
//     name: 'Kioto',
//     img: 'https://cdn.getyourguide.com/img/location/5d079d304c0d5.jpeg/88.jpg',
//     description: 'Kioto, que alguna vez fue la capital de Japón, es una ciudad de la isla de Honshu. Es famosa por sus numerosos templos budistas clásicos y sus jardines, palacios imperiales, santuarios Shinto y casas de madera tradicionales.'
// }

// const helsinkiCity = {
//     name: 'Helsinki',
//     img: 'https://spanishtourism.es/wp-content/uploads/2020/09/108_vida-nocturna-compras.jpg',
//     description: 'Helsinki, la capital de Finlandia en el sur del país, se ubica en una península del golfo de Finlandia. Su avenida central, Mannerheimintie, está bordeada de instituciones como el Museo Nacional, que recorre la historia de Finlandia desde la Edad de Piedra hasta la actualidad.'
// }

// const bergenCity = {
//     name: 'Bergen',
//     img: 'https://res.cloudinary.com/simpleview/image/upload/v1574085889/clients/norway/bryggen_wharf_bergen_hordaland_fjord_norway_photo_florian_olbrechts_34ad36ea-f7bc-4150-b48b-af2c2c14628f.jpg',
//     description: 'Bergen es una ciudad en la costa suroeste de Noruega. Está rodeada de montañas y fiordos, incluido el fiordo de Sogn, el más largo y profundo del país. Bryggen tiene casas de madera coloridas en el antiguo embarcadero. El funicular Fløibanen asciende a la montaña Fløyen, que tiene vistas panorámicas y senderos de excursionismo.'
// }

// const cities = [madridCity, kiotoCity, helsinkiCity, bergenCity];

const valencia = {
    img: 'https://planodemetro.com/wp-content/uploads/2020/04/valencia-venezuela.jpg',
    name: 'Valencia',
    description: 'Es conocida como La Capital industrial de Venezuela, debido a que alberga en ella una importante cantidad de zonas Industriales del país'
};

const caracas = {
    img: 'https://planodemetro.com/wp-content/uploads/2020/04/valencia-venezuela.jpg',
    name: 'Caracas',
    description: 'Capital'
};

const margarita = {
    img: 'https://planodemetro.com/wp-content/uploads/2020/04/valencia-venezuela.jpg',
    name: 'Margarita',
    description: 'Capital'
};

const maracaibo = {
    img: 'https://planodemetro.com/wp-content/uploads/2020/04/valencia-venezuela.jpg',
    name: 'Maracaibo',
    description: 'Capital'
};

const otra = {
    img: 'https://planodemetro.com/wp-content/uploads/2020/04/valencia-venezuela.jpg',
    name: 'otra',
    description: 'Capital'
};

const cities = [valencia, maracaibo, margarita, caracas, otra];


function createCardHeader(img) {
    const headerCardContainer = document.createElement('div');
    headerCardContainer.classList.add('city__header');

    const cardImg = document.createElement('img');
    cardImg.classList.add('city__img');
    cardImg.src = img;

    const cardSubheading = document.createElement('h2');
    cardSubheading.classList.add('city__subheading');
    cardSubheading.textContent = 'NEW';

    const shareIcon = document.createElement('i');
    shareIcon.classList.add('fas', 'fa-share-alt', 'city__share-icon');

    headerCardContainer.appendChild(cardImg);
    headerCardContainer.appendChild(cardSubheading);
    headerCardContainer.appendChild(shareIcon);

    return headerCardContainer;
}

function createCardBody(name, decription) {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('city__body');

    const date = document.createElement('p');
    date.textContent = '31 01 2022';

    const title = document.createElement('h1');
    title.textContent = name;

    const line = document.createElement('hr');

    const desc = document.createElement('p');
    desc.textContent = decription;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('city__button-container');

    const btn = document.createElement('button');
    btn.classList.add('city__action-button');
    btn.textContent = 'Read More';

    btnContainer.appendChild(btn);

    bodyContainer.appendChild(date);
    bodyContainer.appendChild(title);
    bodyContainer.appendChild(line);
    bodyContainer.appendChild(desc);
    bodyContainer.appendChild(btnContainer);

    return bodyContainer;
}

function createCityCard(city){
    console.log(city);
    const mainCardContainer = document.createElement('article');
    mainCardContainer.classList.add('city__container');
    // este atributo nos va a ayudar a eliminar una ciudad despues
    mainCardContainer.setAttribute('data-city', city.name); 
    mainCardContainer.appendChild(createCardHeader(city.img));
    mainCardContainer.appendChild(createCardBody(city.name, city.description));
    return mainCardContainer;
}


function addCity(city){
    document.body.appendChild(createCityCard(city));
}



//cities.forEach(addCity); // Es lo mismo que esto cities.forEach(c => addCity(c));


/**
 * Removes a given city from DOM
 * @param {string} name the city name to be removed
 */
function removeCity(name){
    /**
     * Forma fuerza bruta
     * 
     * 1. Localizar la ciudad a eliminar
     *  1.a Obtener todos los articles (las cities del DOM) que haya ==> querySelectorAll
     * 2. forEach a ese selector y si el texto del título coincide con el nombre --> remove del article
     * 
     * Mejor forma 
     *  ¿Como puedo hacer un selector CSS directo con el nombre de la ciudad? --> Custom data attributes
     * 1. Busco por el selector único que depende del nombre y si existe lo elimino
     */
     const cityContainer = document.querySelector(`.city__container[data-city="${name}"]`);
     if(cityContainer) cityContainer.remove();
}

/**
 * Removes all DOM cities 
 */
function removeAllCities(){
    // busco todos los contenedores de ciudad
    const cities = document.querySelectorAll('.city__container');
    // borro cada una de las ciudades existentes
    cities.forEach(c => c.remove());
}

/**
 * Changes all cities buttons background colors to #64DD17
 */
function changeButtonColor(){
    // seleccionar todos los botones de las cards
    const btns = document.querySelectorAll('.city__container .city__action-button, .city__container .city__share-icon');
    btns.forEach(b => b.style.backgroundColor='#64DD17');
}



//
const searchButton = document.querySelector('.search-button')
const clearButton = document.querySelector('.clear-button')
const input = document.querySelector('.search')


function searchCity() {
    const city = cities.find( c => c.name.toLowerCase() === input.value.toLowerCase())
    console.log(city);
    addCity(city)
}

function clearLastCity() {
    const body = document.querySelector('body')
    body.removeChild(body.lastChild)
}

searchButton.addEventListener('click', searchCity)

clearButton.addEventListener('click', clearLastCity)


