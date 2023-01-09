

const items = JSON.parse(localStorage.getItem('tasks')) ?? []; // Ahora mismo es un array de strings

function createTaskItem(task, position){
    const item = document.createElement('li');
    item.classList.add('tasks__list-item');

    // checkbox
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id='completed';
    input.classList.add('task__complete-check');
    input.setAttribute('data-item-position', position);
    input.checked = task.completed;
    input.addEventListener('change', e => {
        // items tiene el array con la lista de tareas
        const taskPosition = e.target.getAttribute('data-item-position');
        items[taskPosition].completed = e.target.checked;
        localStorage.setItem('tasks', JSON.stringify(items));
    });

    item.appendChild(input);

    // label
    const label = document.createElement('label');
    label.textContent = task.description;
    label.htmlFor = 'completed';

    item.appendChild(label);
    // paso 3
    const itemsContainer = document.querySelector('.tasks__list');
    itemsContainer.appendChild(item);
}

function createNewTask(description){
    const newTask = {
        description,
        completed: false
    };
    items.push(newTask); // lo añado a mis elementos
    createTaskItem(newTask, items.length-1 );
    
    localStorage.setItem('tasks', JSON.stringify(items)); 
}

items.forEach((t,i) => createTaskItem(t,i));

document.querySelector('.add__container').addEventListener('submit', e => {
    // ¿Que tengo que hacer cuando se pulse el botón de añadir?
    /*
        1. Recuperar el valor del input
        2. Si hay valor, crear un li con una nueva tarea
        3. añadir el li al ul del html
    */
   e.preventDefault();
   if(e.target.checkValidity()){
    createNewTask(e.target.add.value);
    // borramos el campo
    e.target.reset();  
   }else{
    // mostraríamos errores de formulario customizados
   }
});

document.querySelector('.add__voice-btn').addEventListener('click', e => {
    const SpeechRecognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
                
    // This runs when the speech recognition service starts
    recognition.onstart = () => console.log('listening..');
    recognition.onspeechend = () => recognition.stop();

    // This runs when the speech recognition service returns result
    recognition.onresult = e => {
        const transcript = e.results[0][0].transcript;
        console.log(transcript);
        createNewTask(transcript);
    };
                  
    // start recognition
    recognition.lang = 'es-ES';
    recognition.start();
});
