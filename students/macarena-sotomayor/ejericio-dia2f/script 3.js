

// 1.Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un value al localstorage y otro al session storage.

// let sub1= document.querySelector('#sub1');
// // console.log(sub1)
// let inp1= document.querySelector('#in1');
// let inp2= document.querySelector('#in2');




// // let valuein1 = document.getElementById('in1').value;
// // let valuein2 = document.getElementById('in2').value;
// // let valuesub1 = document.getElementById('sub1').value;


// sub1.addEventListener('click', e=> {
//     sessionStorage.setItem('saludos',inp1.value);
//     sessionStorage.setItem('saludos1',inp2.value);
//     // console.log(inp1.value)
// })

// 2.En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.

// const valuess = sessionStorage.getItem('saludos');
// const valuess2 = sessionStorage.getItem('saludos1')
// console.log(valuess, valuess2)

// let p1 = document.createElement('p')
// document.body.appendChild(p1)
// p1.textContent= valuess
// let p2 = document.createElement('p')
// document.body.appendChild(p2)
// p2.textContent= valuess2

// // 3.Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar en tu html   un enlace a googlemap que te lleve directo a tu posición actual.



// navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position.coords.latitude, position.coords.longitude)
// });


// let aCoords= document.createElement('a')
// document.body.appendChild(aCoords)
// aCoords.textContent= "No es mi casa pero bueno"
// aCoords.href= "https://www.google.es/maps/place/40%C2%B026'06.7%22N+3%C2%B040'52.8%22W/@40.4351996,-3.6835287,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x73b6fe967c892eb4?hl=es"
// aCoords.target= "_blank"





// 4.Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)

let inpN= document.querySelector('#inName');
let inpP= document.querySelector('#inPass');
let sub1= document.querySelector('#sub1');
console.log(inpN)


sub1.addEventListener('click', e=> {
    
    location.href="index2.html"
    localStorage.setItem('nombre',inpN.value);
    localStorage.setItem('contraseña',inpP.value);
    
    
})


let valueName = localStorage.getItem('nombre');
let p1 = document.createElement('p')
document.body.appendChild(p1)
p1.textContent= valueName

let bot= document.querySelector('#botC');

// bot.addEventListener(addEventListener() => any, options?: boolean | AddEventListenerOptions): void)