
const parrafo = document.querySelector('p');
const botonAdd = document.querySelector(".btnAdd");

let contador = 0;


botonAdd.addEventListener("click", () => {
    contador++;
    parrafo.textContent = contador;
})

const bottonDown = document.querySelector(".btnNoAdd");

bottonDown.addEventListener("click", () =>{
    contador--;
    parrafo.textContent = contador;
})



