

let h1 = document.querySelector("h1");
let nombreValue = localStorage.getItem("nombre")

h1.textContent = `hola "${nombreValue}"`


let btn = document.querySelector("button");

btn.addEventListener("click", e => {
    localStorage.removeItem("nombre")
    localStorage.removeItem("password")
    window.history.back()
})