// 1. crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se debe añadir un p con el texto añadido desde JS dentro del div.

// const btn = document.querySelector('button');

// btn.addEventListener('click', e => {
//     const p = document.createElement('p');
//     p.textContent = 'Hola, este es el texto añadido';
//     document.body.appendChild(p);
// })

// 2. Contador: Crear un HTML con un botón  (-), un Parrafo y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el "+" se deberá sumar uno al valor del p. Cuando pulse en el "-" se deberá restar 1.

// const btnSuma = document.querySelector('.button_plus');
// const btnResta = document.querySelector('.button_less');
// const div = document.querySelector('.container');
// const p = document.createElement('p');
// div.appendChild(p);
// let counter = 0;
// p.textContent = counter;
// btnSuma.addEventListener('click', e =>{
//     p.textContent=counter;
//     counter ++
// });
// btnResta.addEventListener('click', e =>{
//     p.textContent=counter;
//     counter --
// });

// 3. Crea un input que capture el evento del teclado (buscar eventos del teclado, keyD...) y muestre en un P debajo del input  las teclas que estas escribiendo.

// const texto = document.createElement('input');
// document.body.appendChild(texto);
// let p = document.createElement('p')
// document.body.appendChild(p);
// texto.addEventListener('keydown', e =>{
//     p.textContent+= e.key; 
//     console.log(e.key)
// })

// 4. Crea el siguiente formulario ahora vamos a recuperar sus datos, cuando terminemos de llenar el formulario y le demos al boton de submit, se debe mostrar debajo en tres P, el nombre, el email y el número, para esto es necesario que cancelemos el evento en nuestra función (usar e.preventDefault() ). (editado) 

// const button= document.querySelector('.boton_enviar')

// button.addEventListener('click', e =>{
//     e.preventDefault()
//     const nombre = document.getElementById('nombre').value;
//     const email = document.getElementById('e-mail').value;
//     const telefono = document.getElementById('telefono').value;

//     let p1 = document.createElement('p')
//     let p2 = document.createElement('p')
//     let p3 = document.createElement('p')

//     p1.textContent= nombre;
//     p2.textContent= email;
//     p3.textContent= telefono;

//     document.body.appendChild(p1);
//     document.body.appendChild(p2);
//     document.body.appendChild(p3);
// })

// 5- Retomamos el ejercicio de ayer de las cards city, esta vez usaremos un input y un boton de submit como lo vemos en la imagen, nuestra tarea será capturar el valor de la ciudad que le pasemos en el input:
//- Si la ciudad existe en nuestro array de objetos nuestra función nos pintara la CARD y si no existe nos arrojara un alert diciendo que la ciudad no existe.
//- Ahora haremos un boton de limpiar al lado de nuestro  boton de buscar, este boton escuchara el evento click y deberá eliminar todas las cards que hayan en nuestro DOM, dejando nuestra pagina en blanco.

// Cards de Alex: 

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

// Ahora empieza el ejercicio 5 






