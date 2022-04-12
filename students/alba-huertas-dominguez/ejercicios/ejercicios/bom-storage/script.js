//Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un value al localstorage y otro al session storage.



const boton = document.querySelector(".boton")


boton.addEventListener('click',e =>
{ e.preventDefault();
let nombre = document.getElementById("name").value
let  apellido = document.getElementById("apellido").value
sessionStorage.setItem('name',nombre);
localStorage.setItem('surname',apellido);
});

//En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.


const valorN = sessionStorage.getItem('name');

let pintar =  document.querySelector(".parrafo");

pintar.textContent = valorN
;


//Obtener coordenadas mediante la api de  geolocalizacion, 
//con los datos de la geolocalizacion mostrar en tu html   un enlace a googlemap que te lleve directo a tu posición actual.



    success = function(position){
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    console.log(latitud)
    console.log(longitud)
    };



    let enlace = document.createElement('a');
    enlace.href = 'https://www.google.es/maps/@40.4837681,-3.7130504,15z?hl=es';
    enlace.textContent = "mi posicion";
    document.body.appendChild(enlace);


  


/* otra forma de hacerlo*/

    navigator.geolocation.getCurrentPosition(geolocation => {
    console.log(gelocation.coords);
    const maplink =document.createElement('a');
    maplink.href =`https://www.google.es/maps/"${geolocation.coords.latitude},${geolocation.coords.longitude}`;
    maplink.textContent="vamos a mi ubicacion"
    document.body.appendChild(maplink);

}
    
    
    )






//4 .Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  
//input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá 
//mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, 
//cuando le demos al boton de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)

  