//

let items=JSON.parse(localStorage.getItem('task')) ?? [];// esto signifca a que si es null eso pues que devuelva un array vacio.
// if (items === null){
  // items = [] 

//    }

function createTask (task){
    const item =document.createElement('li');
    item.textContent= e.target.add.value;
        item.classList.add('task_list');
        const itemsContainer = document.queryselector('task_list');
        itemsContainer.appendChild(item);

}

items.forEach(t => {createTask(t)   
});


document.querySelector('app_container').addEventListener('submit',e => {
    const inputValue =e.target.addEventListener.value;
    e.preventDefault();
    if(e.target.checkValidity()){
      
        const 
     
        items.push({
            description: e.target.add.value,
            completed: false

            
            
            
          });
        localStorage.setItem('task', JSON.stringify(items));

        e.target.reset();
    }else{

    }
});


document.querySelector('task__complete-check').addEventListener('change',e =>{
     const position= items.findIndex(t =t.description === e.target.nextElementSibling.textContent )
     items[position].completed = e.target.checked;
     localStorage.setItem('task',JSON.stringify(items));
});





