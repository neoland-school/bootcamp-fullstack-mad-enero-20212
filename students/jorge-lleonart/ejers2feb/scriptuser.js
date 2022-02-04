function success (position){
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    let enlace = document.createElement('a');
    enlace.textContent = 'Mi posicion';
    enlace.href =`https://www.google.es/maps/place/40%C2%B035'32.6%22N+4%C2%B008'52.6%22W/@${latitud},${longitud},17z/data=!3m1!4b1!4m2!3m1!1s0x0:0xe166d65ee281a964`;
    console.log(latitud)
    console.log(longitud)
    document.body.appendChild(enlace);
}
navigator.geolocation.getCurrentPosition(success, function(msg){
console.error('acepta');});

let titulo = document.getElementById('titulo1');
let contenidoTitulo = localStorage.getItem('nom');
titulo.textContent = `Hola ${contenidoTitulo}`;

const button= document.getElementById('boton_enviar')

button.addEventListener('click', e =>{
    e.preventDefault()
    // localStorage.removeItem('nom');
    // localStorage.removeItem('cont');
    // location.href = "./index.html";
    window.history.back()
})