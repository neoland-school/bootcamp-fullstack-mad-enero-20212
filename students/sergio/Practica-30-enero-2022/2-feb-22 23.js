// EJERCICIO 1 //

const input_text_one = document.getElementById('input_text_one');
const input_text_two = document.getElementById('input_text_two')
const input_submit_one = document.getElementById('submit_one');

input_submit_one.addEventListener('click', e => {
    let value_one = input_text_one.value;
    let value_two = input_text_two.value;
    sessionStorage.setItem('Valor_1_Sesion', value_one);
    localStorage.setItem('Valor_2_Local', value_two)
});

// EJERCICIO 2 //

const input_submit_two = document.getElementById('submit_two');
const div_p = document.getElementById('ejercicio2');

const value_storage = sessionStorage.getItem('Valor_1_Sesion');

input_submit_two.addEventListener('click', e => {
    const p_value = document.createElement('p');
    p_value.textContent = JSON.stringify(value_storage);
    div_p.appendChild(p_value);
})

// EJERCICIO 3 //

const div_ej3 = document.getElementById('ejercicio3');

function exito(par) {
    let latitud = par.coords.latitude;
	let longitud = par.coords.longitude;
    let enlace = document.createElement('a');
    enlace.setAttribute('href', `https://www.google.es/maps/search/latitud+%3D+${latitud},+longitud+%3D+${longitud}`)
    enlace.textContent = 'Maps';
    div_ej3.appendChild(enlace);
}
/*
function exito1(par) {
    let position1 = par.coords.accuracy;
    let enlace = document.createElement('a');
    enlace.setAttribute('href', `https://www.google.es/maps/search/${position1}`)
    enlace.textContent = 'Maps';
    div_ej3.appendChild(enlace);
}
*/
let posicion = navigator.geolocation.getCurrentPosition(exito);
// let posicion1 = navigator.geolocation.getCurrentPosition(exito1);