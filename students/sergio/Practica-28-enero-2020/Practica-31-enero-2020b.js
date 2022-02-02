/*
// EJERCICIO 2//
//El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)


const h2Html = document.createElement('h2');

h2Html.textContent = "hola";

document.body.appendChild(h2Html);

h2Html.classList.add("color_azul");

const divHtml = document.createElement('div');

document.body.appendChild(divHtml);

divHtml.appendChild(h2Html);

// EJERCICIO 3//
//En un documento html vacío, añadir un div el cual tendrá dentro un enlace a  Google, un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)


const divCoches = document.createElement('div');

document.body.appendChild(divCoches);

const enlaceCoches = document.createElement('a');

// enlaceCoches.innerHTML = `<a href="https://www.google.es/">Google</a>`;

enlaceCoches.href = "https://www.google.es/";
enlaceCoches.textContent = 'Google';

divCoches.appendChild(enlaceCoches);

const listOutside = document.createElement('ol');

divCoches.appendChild(listOutside);


const coche1 = document.createElement('li');

coche1.textContent = "SEAT";

const coche2 = document.createElement('li');

coche2.textContent = "FORD";

const coche3 = document.createElement('li');

coche3.textContent = "CITROEN";

listOutside.appendChild(coche1);
listOutside.appendChild(coche2);
listOutside.appendChild(coche3);

// EJERCICIO 4 //
//En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". El ejercicio será el siguiente, en tu pagina js:(medium)
//Recuperar todos los li de la página y muéstralos por consola.
//Recuperar todos los elementos con class "item" y muéstralos por consola.
//Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.
//Recuperar un elemento que tengan atributo  data-demo y muéstralo por consola (getAtribu....).
//Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".
//Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.
//Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

// Primer punto //
const lispag = document.querySelectorAll(`li`);
console.log(lispag);

const classitem = document.querySelectorAll(`.item`)
console.log(classitem);

const idcuartoelem = document.querySelectorAll('#cuarto_elemento');
console.log(idcuartoelem);

const ulpag = document.querySelector('ul');
let a = ulpag.getAttribute('dom-demo');
console.log(a);

const cambiocolorspecial = document.querySelectorAll('.special');

for(let i = 0; i<cambiocolorspecial.length; i++) {
    cambiocolorspecial[i].textContent = 'texto de la clase Special cambiado';
}

const cambiocolordata_demo = document.querySelectorAll('[dom-demo]');

for(let i = 0; i<cambiocolordata_demo.length; i++) {
    cambiocolordata_demo[i].style.fontSize = "25px"; // fonsize no vale, vale fontSize //
}
console.log(cambiocolordata_demo)

const nuevoLi = document.createElement('li');
nuevoLi.getAttribute('id');
nuevoLi.classList.id = 'CREADO_CUSTOM';
nuevoLi.textContent = "NUEVO LI"

// lis_dom.appendChild(nuevoLi);
// lis_dom.insertBefore(nuevoLi,)

// primero recuperar ul //

const ulnueva = document.querySelector('ul');
ulnueva.appendChild(nuevoLi);

// console.log(nuevoLi);
*/

// EJERCICIO 5 //
// Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city que contenga {imagen, nombre de la ciudad, descripción}, repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, ahora vamos a darle vida en nuestro html:(hard)
//Crea una función llamada addCity que reciba  una ciudad como parámetro y lo añada al DOM.
//Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.
//Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.
// Crea una función llamada changeButtonColor, la cual cambia el background color de todos los botones de las cards al #64DD17.



const city_mad = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/madrid.jpeg',
    nombre: 'Madrid',
    descripcion: '3.223 mil/pers',
}
const city_vlc = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/vlc.jpeg',
    'nombre': 'Valencia',
    descripcion: '791 mil/pers',
}
const city_bcn = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/bcn.jpeg',
    nombre: 'Barcelona',
    descripcion: '1.620 mil/pers',
}
const city_sev = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/sevilla.jpeg',
    nombre: 'Sevilla',
    descripcion: '680 mil/pers',
}
const city_carca = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/carca.jpeg',
    nombre: 'Carcaixent',
    descripcion: '20 mil/pers',
}
const city_alzira = {
    imagen: src='/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-28-enero-2020/carca.jpeg',
    nombre: 'Alzira',
    descripcion: '31 mil/pers',
}


const ciudades = [city_mad,city_vlc,city_bcn,city_sev,city_carca,city_alzira];

// PARTE 1 //

function addCity(arr,par) {
    const arrciudades = arr.filter(o => o.nombre === par);
    let city = arrciudades[0];
    if(city != undefined) {
       return city; 
    } else {
        window.alert("el valor es erroneo")
    }
    
} // en este caso solo te da una posicion del array //


//FUNCION PARA IMPRIMIR UNA CARTA -> htmlOutPut(addCity(ciudades,parametro1));
function htmlOutPut(par) {
    // creo el div de fuera //
    let divContainer = document.createElement('div');
    divContainer.classList.add("container_card");
    divContainer.setAttribute('data-city', par.nombre)
    // divContainer.classList.add(`${par.nombre}`) //para el ejercicio 5.2//mainCardContainer.setAttribute('data-city', city.name) // este atributo nos va a        
                                                                         // ayudar a eliminar una ciudad despues
    document.body.appendChild(divContainer);

    //meto dentro del div la imagen //
    let imagencard = document.createElement('div');
    imagencard.classList.add("imag_card");
    divContainer.appendChild(imagencard);

    let imagen_fondo = document.createElement('img');
    imagen_fondo.classList.add("img_fondo");
    imagen_fondo.getAttributeNames('src');
    imagen_fondo.src = `${par.imagen}`;
    imagen_fondo.getAttributeNames('height');
    imagen_fondo.height = "100";
    imagen_fondo.getAttributeNames('width');
    imagen_fondo.width = "200";
    imagencard.appendChild(imagen_fondo);


    let p_fecha = document.createElement('p');
    p_fecha.classList.add("fecha_card");
    divContainer.appendChild(p_fecha);
    p_fecha.textContent = '31 01 2022';

    let p_nombre = document.createElement('h2');
    p_nombre.classList.add("nombre_ciudad");
    divContainer.appendChild(p_nombre);
    p_nombre.textContent = `${par.nombre}`;

    let p_texto = document.createElement('p');
    p_texto.classList.add("text_card");
    divContainer.appendChild(p_texto);
    p_texto.textContent = `${par.descripcion}`;

    let bottom_submit = document.createElement('input');
    bottom_submit.classList.add("input_bottom");
    bottom_submit.getAttributeNames('type');
    bottom_submit.type = "submit";
    bottom_submit.getAttributeNames('value')
    bottom_submit.value = "Read More";
    divContainer.appendChild(bottom_submit);
    
    return ;
} 

/*
let parametro1 = "Valencia";
let parametro2 = "Madrid";
let parametro3 = "Barcelona";
let parametro4 = "Sevilla";
let parametro5 = "Carcaixent";
let parametro6 = "Alzira"


htmlOutPut(addCity(ciudades,parametro1));
htmlOutPut(addCity(ciudades,parametro2));
htmlOutPut(addCity(ciudades,parametro3));
htmlOutPut(addCity(ciudades,parametro4));
htmlOutPut(addCity(ciudades,parametro5));
htmlOutPut(addCity(ciudades,parametro6));
*/

const input_text_busq = document.getElementById('input_text_busq');

const bottom_buscar = document.getElementById('bottom_buscar');

const bottom_limpiar = document.getElementById('bottom_limpiar');

bottom_buscar.addEventListener('click', e => {
    let parametro = input_text_busq.value;
    htmlOutPut(addCity(ciudades,parametro));
});

//funcion que elimne los valores //
// 


function deleteAllCities() {
    const allCards = document.querySelectorAll('.container_card');

    allCards.forEach(d => d.remove());
}

bottom_limpiar.addEventListener('click', () => deleteAllCities());















// citis.forEach(c=> document.body.appendChild(creacteCityCard(c))) // FOR EACH PARA CUANDO SE TIENEN QUE HACER TODAS...


// PARTE DOS //

/**
 * Emilina la ciudad que viene dada por un parametro
 * @param {string} name la ciudad que hay que eliminar por nombre.
 */
function removeCity(name) {
    /**
     * FORMA 1:
     * 1. Localizar la ciudad a eliminar
     *  a. Obtener todos los ariculos (las citys del DOM) que haya => querySelectorAll
     * 2. forEach a ese selector y si el texto del titulo, coincide con el nombre --> remove()
     *  FORMA 2: (Mejor) ¿Cómo puedo hacer un selector CSS directo con el nombre de la ciudad?
     * 1. Busco por el selector unico que depende del nombre y si existe lo elimino
     */

    const cityContiner = document.querySelector(`.container_card[data-city="${city.nombre}"]`)
    
}

// ESTA EN LA CARPETA DE ALEX //


