

let arr=[];
arr.push( aguila= {
    description:"lager",
    votes:0
},
siesta= {
    description:"ipa",
    votes:0
},

guinnes= {
    description:"negra",
    votes: 0
},

);
const lista = document.createElement('ul');

document.body.appendChild(lista);
lista.id=('lista')

function pintar(obj){
    
        let elm = document. createElement('li');
        let boton = document.createElement('button');
        boton.textContent = obj.votes
        boton.id="enviar";
        boton.addEventListener('click',e =>{
            boton.textContent = `${obj.votes+1}☝`;
            obj.votes ++
        });
    
        elm.textContent =`tipo ${obj.description}`;
        elm.appendChild(boton);
        lista.appendChild(elm);
       
    }



    arr.forEach(objeto => { 
        pintar(objeto)

    }

);




 const nuevo = document.createElement('input');
 nuevo.classList.add('crear');
 nuevo.id=('añadirid')
 const btnew = document.createElement('button');
 btnew.id="nuevo";
 const btborrar = document.createElement('button');
 btborrar.id="borrar";
 const divn = document.createElement('div');
 document.body.appendChild(divn);
 divn.appendChild(nuevo);
 divn.appendChild(btnew);
 divn.appendChild(btborrar);
 

    let input = document.getElementById("añadirid");
      btnew.addEventListener('click',e =>{
         let valor= document.getElementById("añadirid").value;
         console.log(valor)
         let nobj = {
             description:valor,
             votes:0
         }
         arr.push({description:valor,votes:nobj.votes});
         pintar(nobj);
         document.getElementById("añadirid").value = "";
       
     }
     )
 


let borrar = document.getElementById("borrar");
 let listab = document.getElementById("lista")
borrar.addEventListener('click',e =>{
    arr.splice(0, arr.length);
    listab.textContent = arr
      

    }

);
//Añadir un select para poder filtrar por numero de votos de menor a mayor o de mayor a menor.

const selector = document.createElement('select');

divn.appendChild(selector);
const option1 = document.createElement('option');
const option2 = document.createElement('option');
option1.textContent="mayor";
option2.textContent="menor";
selector.appendChild(option1);
selector.appendChild(option2);



// hacer funcion, para ordenar de mas a menos y hacer de menos a mas.

const vot=arr.map(v =>v.votes)
 
 const sub =vot.sort((a,b) =>{
    return b-a;
});
const baj =vot.sort((a,b) =>{
    return a-b;
});
 

