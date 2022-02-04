
let prueba = document.getElementsByTagName("li")

console.log(prueba)

let items = document.getElementsByClassName("item")

console.log(items)

let cuarto = document.getElementById("cuartoElemento")

console.log(cuarto)


let prueba2 = document.querySelector("ul")
let prueba3 = prueba2.getAttribute("dom-demo")


console.log(prueba3)


let cambio = document.getElementsByClassName("special")
let cambioText= document.createTextNode("texto de la clase special cambiado")

cambio.appendChild(cambioText)
document.body.appendChild(cambio)
