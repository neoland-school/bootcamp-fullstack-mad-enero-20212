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



cities.forEach(addCity); // Es lo mismo que esto cities.forEach(c => addCity(c));


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


