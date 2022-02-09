// 1. Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos inventemos) y votes: un number con el contador de votaciones.

let object1 = {
    description: 'Objeto 1',
    votes: 0
};
let object2 = {
    description: 'Objeto 2',
    votes: 0
};
let object3 = {
    description: 'Objeto 3',
    votes: 0
};
let arr = [object1, object2, object3];

console.log(typeof (object1.votes))

// 2. Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar la descripción y un botón que tenga el tenga el icono de thumbs-up y dentro del botón también se muestre el número de votos.

// let unorderList = document.createElement('ul')
// document.body.appendChild(unorderList);


// arr.forEach(e => {
//     let itemLi = document.createElement('li');
//     unorderList.appendChild(itemLi);

//     let descriptionObject = document.createElement('p');
//     itemLi.appendChild(descriptionObject);
//     descriptionObject.textContent = e.description;

//     let numeroVotos_boton = document.createElement('button');
//     itemLi.appendChild(numeroVotos_boton);
//     numeroVotos_boton.textContent = 'numero votos 👍';

//     // let icono = document.createElement('i')
//     // numeroVotos_boton.appendChild(icono);
//     // icono.classList.add('fa-thumbs-up');

//     let numeroVotos_texto = document.createElement('p')
//     numeroVotos_boton.appendChild(numeroVotos_texto);
//     numeroVotos_texto.textContent = e.votes;
//     // 3.Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML
//     numeroVotos_boton.addEventListener('click', ()=> {
//         e.votes++
//         numeroVotos_texto.textContent =e.votes;

//     });

// });

// 4.Añadir un input y un botón para poder crear un nuevo objeto para votar. En este punto podemos vaciar el array de objetos inicial, ya que los temas de votación los introduciremos desde la interfaz

function createNewObject(array) {
    let inputAñadir = document.createElement('input');
    let buttonAñadir = document.createElement('button')
    inputAñadir.id='placeAñadir';

    document.body.appendChild(inputAñadir);
    document.body.appendChild(buttonAñadir);
    buttonAñadir.textContent = 'Añadir';

    buttonAñadir.addEventListener('click', a => {
        a.preventDefault()
        const nuevo = {
            description: inputAñadir.value,
            votes: 0
        }
        addObject(nuevo)
        // 5.Añadir la posibilidad de que la información quede guardada mientras no cierre la pestaña del navegador.
        sessionStorage.setItem('Objeto', nuevo);
        // inputAñadir.reset();
    })
}

let unorderList = document.createElement('ul')
document.body.appendChild(unorderList);

function addObject (e){
    let itemLi = document.createElement('li');
    unorderList.appendChild(itemLi);

    let descriptionObject = document.createElement('p');
    itemLi.appendChild(descriptionObject);
    descriptionObject.textContent = e.description;

    let numeroVotos_boton = document.createElement('button');
    itemLi.appendChild(numeroVotos_boton);
    numeroVotos_boton.textContent = 'Like 👍';

    // 9. Añadir la posibilidad de votar negativamente.

    let numeroVotos_boton_less = document.createElement('button');
    itemLi.appendChild(numeroVotos_boton_less);
    numeroVotos_boton_less.textContent = 'No like 👎';

    // let icono = document.createElement('i')
    // numeroVotos_boton.appendChild(icono);
    // icono.classList.add('fa-thumbs-up');

    let numeroVotos_texto = document.createElement('p')
    numeroVotos_boton.appendChild(numeroVotos_texto);
    numeroVotos_texto.textContent = e.votes;
    // 3.Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML
    numeroVotos_boton.addEventListener('click', () => {
        e.votes++
        numeroVotos_texto.textContent = e.votes;
        // sessionStorage.setItem('votos',numeroVotos_texto.textContent);
    });
    numeroVotos_boton_less.addEventListener('click', () => {
        e.votes--
        numeroVotos_texto.textContent = e.votes;
        // sessionStorage.setItem('votos',numeroVotos_texto.textContent);
    });
}

arr.forEach(e => {
    addObject(e);
});

createNewObject(arr)

// 6. Añadir un select para poder filtrar por numero de votos de menor a mayor o de mayor a menor.


// 7. Poder añadir sistema de votaciones utilizando la voz en español.

let butVoice = document.createElement('button')
document.body.appendChild(butVoice)
butVoice.textContent= "Hablar"
butVoice.classList.add('botonVoice');


document.querySelector('.botonVoice').addEventListener('click', e => {
    const SpeechRecognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    // This runs when the speech recognition service starts
    recognition.onstart = () => console.log('listening..');
    recognition.onspeechend = () => recognition.stop();
    // This runs when the speech recognition service returns result
    recognition.onresult = e => {
        const transcript = e.results[0][0].transcript;
        console.log(transcript);
        const nuevo = {
            description: transcript,
            votes: 0
        }
        addObject(nuevo)
    };
    // 8. Modificar la app para que el detector de voz utilice el idioma que tiene el usuario configurado en el navegador.
    // start recognition
    recognition.lang = 'es-ES';
    recognition.start();
});


// 10. Añadir un botón a cada elemento que permita eliminarlo definitivamente.


