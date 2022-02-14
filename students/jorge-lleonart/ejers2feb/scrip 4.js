// 1. Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un value al localstorage y otro al session storage.

// const boton = document.getElementById('boton');

// boton.addEventListener('click', e => {
//     e.preventDefault();
//     let texto1 = document.getElementById('texto1id').value;
//     let texto2 = document.getElementById('texto2id').value;
//     sessionStorage.setItem('text1', texto1);
//     localStorage.setItem('text2', texto2);
// });

//Solucion de sergio

// const input_text_one = document.getElementById('input_text_one');
// const input_text_two = document.getElementById('input_text_two')
// const input_submit_one = document.getElementById('submit_one');

// input_submit_one.addEventListener('click', e => {
//     let value_one = input_text_one.value;
//     let value_two = input_text_two.value;
//     sessionStorage.setItem('Valor_1_Sesion', value_one);
//     localStorage.setItem('Valor_2_Local', value_two)
// });


// 2. En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.

// const boton2 = document.getElementById('boton2');

// boton2.addEventListener('click', e => {
//     e.preventDefault();
//     const dato1 = sessionStorage.getItem('text1');
//     let p1 = document.createElement('p')
//     p1.textContent = dato1;
//     document.body.appendChild(p1);
// });

// 3. Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar en tu html   un enlace a googlemap que te lleve directo a tu posición actual.

// function success (position){
//     let latitud = position.coords.latitude;
//     let longitud = position.coords.longitude;
//     let enlace = document.createElement('a');
//     enlace.textContent = 'Mi posicion';
//     enlace.href =`https://www.google.es/maps/place/40%C2%B035'32.6%22N+4%C2%B008'52.6%22W/@${latitud},${longitud},17z/data=!3m1!4b1!4m2!3m1!1s0x0:0xe166d65ee281a964`;
//     console.log(latitud)
//     console.log(longitud)
//     document.body.appendChild(enlace);
// }
// navigator.geolocation.getCurrentPosition(success, function(msg){
// console.error('acepta');});


// 4 .Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)

// const button= document.querySelector('.boton_enviar')

// button.addEventListener('click', e =>{
//     e.preventDefault()
//     const nombre = document.getElementById('nombre').value;
//     const contraseña = document.getElementById('contraseña').value;

//     localStorage.setItem('nom', nombre);
//     localStorage.setItem('cont', contraseña);   
//     location.href = "./indexuser.html"
// })

// 5  Queremos construir una aplicación web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
// - Me debe permitir añadir nuevas tareas a la lista.
// - Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender.
// - Me debe permitir marcar una tarea como hecha (sin borrarla de la lista).
// - Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
// - Me debe permitir dictarle tareas por voz usando la Web Speech API.
// - El diseño es libre. Si no se os ocurre nada, pueden insiprarse en la imagen siguiente

const button= document.querySelector('.boton_guardar')

button.addEventListener('click', e =>{
    e.preventDefault()
    let tarea = document.getElementById('tareaAñadida').value;
    localStorage.setItem('tarea', tarea);  
})







