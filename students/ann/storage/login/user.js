const logOutBtn = document.querySelector('#log-out')

const userLogged = document.querySelector('#user-logged')

const nameStorage = sessionStorage.getItem('nombre de usuario')
userLogged.textContent = `Hola ${nameStorage}`
console.log(nameStorage);

logOutBtn.addEventListener('click', e => {
    sessionStorage.removeItem('nombre de usuario');
    sessionStorage.removeItem('contraseña');
    history.back()
})