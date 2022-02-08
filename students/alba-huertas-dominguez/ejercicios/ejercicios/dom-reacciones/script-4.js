

const nombre = document.querySelector(".p-nombre");
const telefono = document.querySelector(".p-telefono");
const email = document.querySelector(".p-email");
const boton = document.querySelector(".boton");


console.log(boton)


boton.addEventListener('click',e =>{
    e.preventDefault();
    nombre.textContent = document.querySelector('.combo1').value;
    email.textContent = document.querySelector('.combo2').value;
    telefono.textContent = document.querySelector('.combo3').value;
    
}
)



