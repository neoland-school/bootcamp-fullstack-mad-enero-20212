const heading = document.createElement('h2')
heading.textContent = 'Hola soy un heading'

const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)

div.appendChild(heading)

