const input_name = document.getElementById('input_name');
const input_pasword = document.getElementById('input_pasword');
const input_submit = document.getElementById('input_submit');


debugger;
input_submit.addEventListener('click', e => {
    e.preventDefault();
    let value_input_name = input_name.value;
    let value_input_pasword = input_pasword.value;
    localStorage.setItem('Name', value_input_name);
    localStorage.setItem('Pasword', value_input_pasword);
    location.href = "/Users/sergioylaura/Desktop/Bootcamp-Fullstack-work/bootcamp-fullstack-mad-enero-2022/students/sergio/Practica-30-enero-2022/contacto.html";
    
})