


// EJERICCIO 1

let buton = document.querySelector(".enviar")
let names = document.querySelector(".name")
let email = document.querySelector(".email")


buton.addEventListener("click", e => {
    const nombreIn = sessionStorage.setItem('name', names.value)

})

buton.addEventListener("click", e => {
    localStorage.setItem("email", email.value)
})


// EJERCICIO 2


let frase = document.querySelector("p")
const valor = sessionStorage.getItem("name");
frase.textContent = valor;






  // EJERCICIO 3

  

  const succesCallback = (position) => {
      console.log(position)
  }




  const posicionId = navigator.geolocation.getCurrentPosition(succesCallback)


  // EJECICIO 4






