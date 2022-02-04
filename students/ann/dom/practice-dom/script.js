/* 1 */
const btn = document.querySelector('#btn')
const div = document.querySelector('.main-div')

btn.addEventListener('click', e => {
    const textDiv = document.createElement('p')
    textDiv.textContent = 'hola!'
    div.appendChild(textDiv)
})





