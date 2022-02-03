const substractBtn = document.querySelector('.substract')
const addBtn = document.querySelector('.add')
const counter = document.querySelector('.counter')   

addBtn.addEventListener('click', e => {
    counter.textContent ++
})

substractBtn.addEventListener('click', e => {
    counter.textContent --
})
