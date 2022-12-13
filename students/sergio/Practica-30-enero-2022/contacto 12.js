const div_contact = document.getElementById('div_contact');

let inf_local =localStorage.getItem('Name');

const p_nombre = document.createElement('p');

p_nombre.textContent = `Hola ${inf_local}`;

div_contact.appendChild(p_nombre);

// BOTON CERRAR SESION //

const input_submit = document.getElementById('close_sesion');

input_submit.addEventListener('click', e => {
    localStorage.removeItem('Name');
    localStorage.removeItem('Pasword');
    window.history.back();
})