//donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, 
//esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)

let nom =  localStorage.getItem('nom');
let parrafo = document.querySelector(".par");
parrafo.textContent ="Bienvenido "+nom;


const botV = document.getElementById("botV");

botV.addEventListener('click',e =>
{ e.preventDefault();
    localStorage.removeItem('nom');
    localStorage.removeItem('cont');
    window.history.back()
});
