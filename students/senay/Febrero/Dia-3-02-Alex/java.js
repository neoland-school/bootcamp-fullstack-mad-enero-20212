/**
 * 
 *  1 Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos 
 *  inventemos) y votes: un number con el contador de votaciones.
 *  2 Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar 
 *      la descripción y un botón que tenga el icono de thumbs-up y dentro del botón también se 
 *      muestre el número de votos.
   3 Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML
   4 Añadir un input y un botón para poder crear un nuevo objeto para votar. En este punto podemos vaciar
   array de objetos inicial, ya que los temas de votación los introduciremos desde la interfaz
   5 Añadir la posibilidad de que la información quede guardada mientras no cierre la pestaña del 
   navegador.
   6 Añadir un select para poder filtrar por numero de votos de menor a mayor o de mayor a menor
   7 Poder añadir sistema de votaciones utilizando la voz en español.
   8 Modificar la app para que el detector de voz utilice el idioma que tiene el usuario configurado en 
   el navegador.
   9 Añadir la posibilidad de votar negativamente.
   10 Añadir un botón a cada elemento que permita eliminarlo definitivamente.
 */

/*
 * 1 Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos  
   inventemos) y votes: un number con el contador de votaciones.
 */

const lista1 = {
    description: 'uno',
    votes: 1
}
const lista2 = {
    description: 'dos',
    votes: 2
}

/**
 *   2 Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar 
 *      la descripción y un botón que tenga el el icono de thumbs-up y dentro del botón también se 
 *      muestre el número de votos.
 */

const arr = [];
arr.push(lista1, lista2);




function creador(arr) {
    arr.forEach(e => {
        const lista = document.createElement('ul');
        lista.classList.add('class-ul')

        const subListas = document.createElement('li')
        subListas.classList.add('class-lista')
        subListas.textContent = 'Pulasa el icono like:'
        lista.appendChild('subListas')
    });
}



// let acc = 0;
// const btn = document.querySelector('#boton');
// arrObject.forEach(boton => {
//     boton.addEventListener('click', function(e) {

//     });
// })