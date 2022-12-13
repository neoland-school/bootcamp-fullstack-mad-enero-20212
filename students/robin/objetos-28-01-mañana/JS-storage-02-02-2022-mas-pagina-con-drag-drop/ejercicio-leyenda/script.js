

const nombre = document.querySelector(".nombre");
const password = document.querySelector(".password");
const enviar = document.querySelector(".send");


enviar.addEventListener("click", e => {
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("password", password.value)
    e.preventDefault();
    location.href='http://127.0.0.1:5500/ejercicio-leyenda/name.html';
    
})


