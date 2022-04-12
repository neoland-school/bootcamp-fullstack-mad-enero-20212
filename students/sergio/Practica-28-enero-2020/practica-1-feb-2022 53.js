/*
// EJERCICIO 1 //
const p_submit = document.querySelector('.input_ej1');
const div_submit = document.querySelector('.container_ej1');

p_submit.addEventListener('click', e => {
    const p = document.createElement('p');
    p.textContent = "Ha dado click!";
    div_submit.appendChild(p);
});


// EJERCICIO 2 //

const button_ej2menos = document.querySelector('.button_menos');
const button_ej2mas = document.querySelector('.button_mas');

const div_ejer2 = document.querySelector('.container_ej2');

let contador = 0;

const p_ejer2 = document.createElement('p');
p_ejer2.textContent = contador;
div_ejer2.appendChild(p_ejer2);

button_ej2menos.addEventListener('click', e => {
    p_ejer2.textContent = contador --;
    return contador ;
});

// aqui cuidado con esta formula... 

button_ej2mas.addEventListener('click', e => {
    p_ejer2.textContent = contador ++;
    return contador;
})

// EJERCICIO 3 //
const div_ej3 = document.querySelector('.container_ej3');
const input_ej3 = document.querySelector('.input_ej3');

let p_ej3 = document.createElement('p');
div_ejer2.appendChild(p_ej3);

input_ej3.addEventListener('keydown', e => {
    console.log(e)
   if(e.code === "Backspace") {
    p_ej3.textContent = '';
    // llamar a la variable desde aqui 
    
                        // intento conseguir que borre //
} else {
    p_ej3.textContent += e.key;
 }
})
*/
// EJERCICIO 5 //

// buscamos todos los inputs de entrada de texto //
const input_name = document.getElementById('name');

const input_email = document.getElementById('email');

const input_pasword = document.getElementById('pasword');

// SUMBIT //
const input_submit = document.querySelector('.input_submit');

// donde va a ir la p //
const div_ParaP = document.querySelector('.ejercicio5');

input_submit.addEventListener('click', e => {
    e.preventDefault();
    const p1 = document.createElement('p');
    p1.textContent = input_name.value;
    document.body.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = input_email.value;
    document.body.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = input_pasword.value;
    document.body.appendChild(p3);
})

