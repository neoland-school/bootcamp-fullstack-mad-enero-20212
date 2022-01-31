/*
const h2Html = document.createElement('h2');

h2Html.textContent = "hola";

document.body.appendChild(h2Html);

h2Html.classList.add("color_azul");

const divHtml = document.createElement('div');

document.body.appendChild(divHtml);

divHtml.appendChild(h2Html);

// EJERCICIO 3//
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
const city_mad = {
    imagen: src='/madrid.jpeg',
    nombre: 'Madrid',
    descripcion: '3.223 mil/pers',
}
const city_vlc = {
    imagen: src='/vlc.jpeg',
    'nombre': 'Valencia',
    descripcion: '791 mil/pers',
}
const city_bcn = {
    imagen: src='/bcn.jpeg',
    nombre: 'Barcelona',
    descripcion: '1.620 mil/pers',
}
const city_sev = {
    imagen: src='/sevilla.jpeg',
    nombre: 'Sevilla',
    descripcion: '680 mil/pers',
}

const ciudades = [city_mad,city_vlc,city_bcn,city_sev];

function addCity(arr,par) {
    const arrciudades = arr.filter(o => o.nombre === par);
    let city = arrciudades[0];
    let htmlOutPut = '';
    htmlOutput += `<div class="container_card">  
    <div class="imag_card">
        IMAGEN
    </div>
    <div class="fecha_card"> 31 01 2022</div>
    <h2> ${city[0].nombre} </h2>
    <div class="text_card"> ${city[0].descripcion} </div>
    <imput type="bottom" class="imput_bottom">Read More</imput>
    </div>`
    document.write(htmlOutput);
}

function htmlAddCity(arr) {
    let htmlOutPut = '';
    htmlOutput += `<div class="container_card">`

}


let parametro = "Valencia";

addCity(ciudades,parametro);
