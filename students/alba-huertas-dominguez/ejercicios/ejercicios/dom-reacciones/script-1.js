
const div =document.querySelector(".container");
const clik =document.querySelector(".boton");
clik.addEventListener('click',e =>{
    const p = document.createElement("p");
    p.textContent = 'Parrafo nuevo al hacer clik';
    div.appendChild(p);
});

