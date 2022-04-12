

const div =document.querySelector(".container");
const texto=document.querySelector(".texto");
const p=document.querySelector(".parrafo");




texto.addEventListener('keydown',e =>{
    p.textContent += e.key
});



