// 4

const body = document.querySelector('body')
const googleDiv = document.createElement('div')
body.appendChild(googleDiv)
const googleLink = document.createElement('a')
googleLink.textContent = 'Google'
googleLink.setAttribute('href', 'https://google.com')
googleLink.setAttribute('target', 'blank')
googleDiv.appendChild(googleLink)

const googleDivParagraph = document.createElement('p')
googleDivParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
googleDiv.appendChild(googleDivParagraph)


const carList = ['Seat', 'Mini', 'Tesla', 'Kia']

const googleDivCarList = document.createElement('ul')
googleDiv.appendChild(googleDivCarList)

carList.forEach(car => {
    const li = document.createElement('li')
    li.textContent = car
    googleDivCarList.appendChild(li)
})


//4

const domDemo = document.createElement('ul')
domDemo.setAttribute('dom-demo', 'dom-demo')

body.appendChild(domDemo)

let firstItem = document.createElement('li')
firstItem.classList.add('item')
firstItem.classList.add('dom-demo', 'dom-demo');
firstItem.textContent = 'dom demo!'
domDemo.appendChild(firstItem)

let secondItem = document.createElement('li')
secondItem.classList.add('special', 'item')
domDemo.appendChild(secondItem)

let thirdItem = document.createElement('li')
thirdItem.classList.add('special', 'item')
domDemo.appendChild(thirdItem)

let fourthItem = document.createElement('li')
fourthItem.classList.add('item')
fourthItem.setAttribute('id', 'cuarto_elemento')
domDemo.appendChild(fourthItem)


console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementById('cuarto_elemento'));
console.log(firstItem.getAttribute('dom-demo'));

const specials = document.querySelectorAll('.special')
console.log(specials);
specials.forEach(e => e.textContent = 'texto cambiado')

thirdItem.style = 'color: red;'


document.querySelector('.dom-demo').style = 'font-size: 40px;'

const customId = document.createElement('li')
customId.setAttribute('id')