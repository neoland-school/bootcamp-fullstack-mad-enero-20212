
// 1.Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos inventemos) y votes: un number con el contador de votaciones.


let obj1 = {
    description: 'objeto uno',
    votos: 0
}

let obj2 = {
    description: 'objeto dos',
    votos: 0
}

let obj3 = {
    description: 'objeto tres',
    votos: 0
}

let array1 = [obj1, obj2, obj3];
// console.log(array1)


// 2.Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar la descripción y un botón que tenga el tenga el icono de thumbs-up y dentro del botón también se muestre el número de votos.


let ulList = document.createElement('ul');
document.body.appendChild(ulList);


function mostrarObjetos(e) {

    let liUl = document.createElement('li');
    ulList.appendChild(liUl);

    let parDescript = document.createElement('p');
    liUl.appendChild(parDescript);
    parDescript.textContent = e.description

    let but = document.createElement('button')
    liUl.appendChild(but)
    but.textContent = "numero votos 👍"

    // 9.Añadir la posibilidad de votar negativamente.

    let butLess = document.createElement('button')
    liUl.appendChild(butLess)
    butLess.textContent = "numero votos 👎"

    


    let numVot = document.createElement('p');
    but.appendChild(numVot);

    // 3.Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML

    // 9.Añadir la posibilidad de votar negativamente.

    but.addEventListener('click', () => {
        e.votos++
        numVot.textContent = e.votos;
        sessionStorage.setItem('votos',numVot.textContent ) //para el ejericcio 6 hacemos que se guarden los datos de los votos en el sessionStorage
    })
    butLess.addEventListener('click', () => {
        e.votos--
        numVot.textContent = e.votos;
        sessionStorage.setItem('votos',numVot.textContent ) 
    })

}
// array1.forEach(e => {
//     mostrarObjetos(e)
// })

// 4.Añadir un input y un botón para poder crear un nuevo objeto para votar. En este punto podemos vaciar el array de objetos inicial, ya que los temas de votación los introduciremos desde la interfaz


function añadirObjeto(array) {
    let inp1 = document.createElement('input');
    document.body.appendChild(inp1)
    // inp1.id="input_ID"


    let but2 = document.createElement('button')
    document.body.appendChild(but2)
    but2.textContent = "añadir"

    let butVoice = document.createElement('button')
    document.body.appendChild(butVoice)
    butVoice.textContent= "🗣"
    butVoice.classList.add('botonVoice');

    

    but2.addEventListener('click', () => {
        const añadido={
            description: inp1.value,
            votos: 0
        }
        mostrarObjetos(añadido)
        // 5.Añadir la posibilidad de que la información quede guardada mientras no cierre la pestaña del navegador.
        sessionStorage.setItem('LastObjet',añadido)
        // inp1.textContent=' '         PREGUNTAR ALEX
    })
    
}
añadirObjeto(array1)


// 6.Añadir un select para poder filtrar por numero de votos de menor a mayor o de mayor a menor.


// 7.Poder añadir sistema de votaciones utilizando la voz en español.

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
        const añadido={
            description: transcript,
            votos: 0
        }
        mostrarObjetos(añadido);
    };
                  
    //Modificar la app para que el detector de voz utilice el idioma que tiene el usuario configurado en el navegador.
    recognition.lang = 'es-ES';
    recognition.start();
});
