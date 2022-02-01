/*
4. Crea el siguiente formulario ahora vamos a recuperar sus datos, 
cuando terminemos de llenar el formulario y le demos al boton de 
submit, se debe mostrar debajo en tres P, el nombre, el email y el 
número, para esto es necesario que cancelemos el evento en nuestra 
función (usar e.preventDefault() ). (editado) 
*/

const form = document.querySelector('.form');

const varNAme = document.querySelector('#name');
const varEmail =  document.querySelector('#email');
const varNumber = document.querySelector('#number');
const varSubmit = document.querySelector('#submit');

const showFormValues = (a) => {
    
    const div = document.createElement('div');
    div.classList.add('results_form');
    const p1 = document.createElement('p');
    p1.classList.add('data_submit');
    p1.textContent = varNAme.value;
    console.log(p1);
    div.appendChild(p1);
    const p2 = document.createElement('p');
    p2.classList.add('data_submit');
    p2.textContent = varEmail.value;
    div.appendChild(p2);
    const p3 = document.createElement('p');
    p3.classList.add('data_submit');
    p3.textContent = varNumber.value;
    div.appendChild(p3);

    document.body.appendChild(div);

    a.preventDefault();
}

varSubmit.addEventListener('click', showFormValues);