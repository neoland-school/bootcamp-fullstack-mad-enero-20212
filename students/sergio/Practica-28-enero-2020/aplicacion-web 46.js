const text_note = document.getElementById('text_note');
const sumar_tarea = document.getElementById('sumar_tarea');
const container_notas = document.getElementById('container_notas');

const ulCards = document.getElementById('listado_cards') ?? [];

function HtmlOutPut_card(parametro) {
    const nueva_nota = document.createElement('li');
    nueva_nota.setAttribute('class', 'card_container');
    ulCards.appendChild(nueva_nota);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    nueva_nota.appendChild(checkbox);

    const p_nota = document.createElement('p');
    p_nota.textContent = parametro;
    nueva_nota.appendChild(p_nota);

    const radios = document.createElement('div');
    nueva_nota.appendChild(radios);

  /*  const label1 = document.createElement('label');
    label1.setAttribute('for','iniciando');
    label1.textContent = 'Inicializando';
    const iniciando = document. createElement('input')
    iniciando.setAttribute('type', 'radio');
    iniciando.setAttribute('class', 'iniciando radio_inside');
    iniciando.setAttribute('name', 'estado');
    label1.appendChild(iniciando)
    radios.appendChild(label1);

    const label2 = document.createElement('label');
    label2.setAttribute('for','en_proceso');
    label2.textContent = 'En proceso';
    const en_proceso = document. createElement('input')
    en_proceso.setAttribute('type', 'radio');
    en_proceso.setAttribute('class', 'en_proceso radio_inside');
    en_proceso.setAttribute('name', 'estado');
    label2.appendChild(en_proceso);
    radios.appendChild(label2);

    const label3 = document.createElement('label');
    label3.setAttribute('for','finalizado');
    label3.textContent = 'Finalizado';
    const finalizado = document. createElement('input')
    finalizado.setAttribute('type', 'radio');
    finalizado.setAttribute('class', 'finalizado radio_inside');
    finalizado.setAttribute('name', 'estado');
    label3.appendChild(finalizado);
    radios.appendChild(label3);
*/
}
let item = [];

sumar_tarea.addEventListener('click', e => {
   
   // creacion de la carta por click //
    e.preventDefault();
    HtmlOutPut_card(text_note.value);

    // GUARDAR EN EL LOCAL //
    item.push({
        description: text_note.value,
        completed: false,
    }) //cuando nos genere un objeto, habra que generar uno nosotros para poder usarlo //
    localStorage.setItem('tasks', JSON.stringify(item));

})

const checkbox = document.getElementsByClassName



