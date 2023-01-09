/*
 * 1 Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un 
 *      value al localstorage y otro al session storage.
 * 2 En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.
 * 3 Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar en tu 
 *      html   un enlace a googlemap que te lleve directo a tu posición actual.
 */

const inputText = document.querySelector('#text');
const inputEmail = document.querySelector('#email');
const inputSubmit = document.querySelector('#submit');



inputSubmit.addEventListener('click', e => {
    localStorage.setItem('texto', inputText.value)
    sessionStorage.setItem('texto', inputEmail.value)
});
// .--------------------------- ej - 2 ------------------------

/**
 * 2 En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.
 */

let parrafo = document.createElement('p');
parrafo = sessionStorage.getItem('texto')
document.write(`${parrafo}`);
// document.body.appendChild(`${parrafo}`);

/*
 * Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar en tu 
 *   html un enlace a googlemap que te lleve directo a tu posición actual. 
 */
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude)
});
const aMap = document.createElement('a');
document.body.appendChild(aMap)
aMap.textContent = 'Mi localizacion'
aMap.href = 'https://www.google.es/search?q=41.6297459+25.3597148&source=hp&ei=p6H6YeD7MvyQxc8PodaryAE&iflsig=AHkkrS4AAAAAYfqvt8VsX7l7yd1_HQQlPMvduQ6avTt0&ved=0ahUKEwig66ypqeH1AhV8SPEDHSHrChkQ4dUDCAc&uact=5&oq=41.6297459+25.3597148&gs_lcp=Cgdnd3Mtd2l6EAM6FAgAEOoCELQCEIoDELcDENQDEOUCUMQFWLSIAWCZlAFoAXAAeACAAYgBiAHBApIBAzIuMZgBAKABAqABAbABCg&sclient=gws-wiz';
aMap.target = '_blank'