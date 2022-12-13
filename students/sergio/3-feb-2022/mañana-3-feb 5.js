// EJERCICIO 1 //
let array_ej1 = [];



// UL //
const ul_div = document.createElement('ul');
document.body.appendChild(ul_div);

const enviar = document.getElementById('submit_enviar');
sessionStorage.setItem('descripcion','');

// EVENTO para crear CARDS //
enviar.addEventListener('click', e => {
    e.preventDefault();
    let definicion = document.getElementById('submit_descripcion').value;
    array_ej1.push({
        'description': definicion,
        votes: 0,
    });
    for(let i=0; i<array_ej1.length; i++) {
        const descripcionSesion = array_ej1[i].description;
        sessionStorage.setItem('descripcion',descripcionSesion);
      }
    
    

    HtmlOutPut(array_ej1[array_ej1.length-1]);
});



function HtmlOutPut(e){ 
            // LI /
            const item = document.createElement('li');
            item.classList.add('tasks__list_item');
            ul_div.appendChild(item);
        
            // DESCRIPCION //   
            const p_item = document.createElement('p');
            p_item.classList.add('descripcion_item');
            console.log(e)
            p_item.textContent = `Descripcion: ${e.description}`; 
            item.appendChild(p_item);
           
        
            // BOTTOM //
            const buttom_item = document.createElement('button');
            buttom_item.classList.add('button_thumbsUp');
            item.appendChild(buttom_item);

        
            // Nº DE VOTOS //   
            const p_n_votos_item = document.createElement('p');
            p_n_votos_item.classList.add('votos_items');
            p_n_votos_item.textContent = e.votes;
            buttom_item.appendChild(p_n_votos_item);
         
         
            // aqui llamo al evento, e, porque es el e de la array, dejo el () vacio porque los eventos no escuchan objetos //
            buttom_item.addEventListener('click', () => {
                e.votes = e.votes + 1;
                p_n_votos_item.textContent = e.votes;
            });
}


