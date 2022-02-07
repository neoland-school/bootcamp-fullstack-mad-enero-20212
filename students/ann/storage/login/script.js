const userName = document.querySelector('#userName')
const userPassword = document.querySelector('#userPw')
const sendButton = document.querySelector('#submitButton')

sendButton.addEventListener('click', e => {
    sessionStorage.setItem('nombre de usuario', userName.value)
    sessionStorage.setItem('contraseña', userPassword.value)
    e.preventDefault()
    location.href = 'user.html'
})

