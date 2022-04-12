



const div =document.querySelector(".container");
const clikmas =document.querySelector(".bmas");
const clikmenos =document.querySelector(".bmenos");





let contador = 0
const p = document.createElement("p");
div.appendChild(p);
clikmas.addEventListener('click',e =>{
    p.textContent = contador;
   contador ++
});


clikmenos.addEventListener('click',e =>{
    p.textContent = contador;
   contador --
});


