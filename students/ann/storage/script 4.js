/* 1 */
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    localStorage.setItem('nombre', nombre.value)
    sessionStorage.setItem('apellido', apellido.value)
})

console.log(nombre.value);
console.log(apellido.value);

/* 2 */

const pSessionStorage = document.querySelector('#session-storage')
const userSessionStorage = sessionStorage.getItem('apellido')
console.log(userSessionStorage);
pSessionStorage.textContent += userSessionStorage


