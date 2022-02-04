const input = document.querySelector('.my-input')
const body = document.querySelector('body')
let userString = document.querySelector('.user-string')
userString.textContent = ''

// let str = ''

let stringAccumulated = ''
let backspaceCounter = 0

input.addEventListener('keyup', e => {
    if (e.key !== 'Backspace') {
        stringAccumulated += e.key
        userString.textContent = stringAccumulated
    } else {
        backspaceCounter ++
        userString.textContent = stringAccumulated.slice(0, stringAccumulated.length - backspaceCounter)   
    }  
})
