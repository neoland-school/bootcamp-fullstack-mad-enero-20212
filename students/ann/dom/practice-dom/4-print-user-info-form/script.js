const body = document.querySelector('body')
const submit = document.querySelector('#submitButton')
const name = document.querySelector('.name-user-input')
const email = document.querySelector('.email-user-input')
const number = document.querySelector('.number-user-input')

const showUserInfo = (e) => {
    const userName = document.querySelector('#userName').value
    const userEmail = document.querySelector('#userEmail').value
    const userNumber = document.querySelector('#userNumber').value
    name.textContent = `${userName}`
    email.textContent = `${userEmail}`
    number.textContent = `${userNumber}`
    e.preventDefault()
}; 

submit.addEventListener('click', showUserInfo)

