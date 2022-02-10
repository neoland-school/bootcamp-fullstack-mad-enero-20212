const lista1 = {
    description: 'uno',
    votes: 1
}
const lista2 = {
    description: 'dos',
    votes: 2
}

const arr = [];
arr.push(lista1, lista2);

/**
 * 
 *  Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML} arr 
 */

function creador(arr) {
    arr.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('class_div');

        const ul = document.createElement('ul');
        ul.classList.add('class_ul');
        div.appendChild(ul)

        const li = document.createElement('li');
        li.classList.add('class_li');
        ul.appendChild(li);
        li.textContent = element.description;

        const btn = document.createElement('button');
        btn.classList.add('class_btn');
        btn.textContent = '0'
        ul.appendChild(btn);

        const i = document.createElement('i')
        i.innerHTML = '<i class="far fa-thumbs-up"></i>'
        btn.appendChild(i);
        document.body.appendChild(div);

        btn.addEventListener('click', () => {
            btn.textContent++;
        })
    });
}

creador(arr)

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