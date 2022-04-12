let arr=[];
arr.push( aguila= {
    description:"lager",
    votes:1
},
siesta= {
    description:"ipa",
    votes:1
},

guinnes= {
    description:"negra",
    votes: 1
},

);
const lista = document.createElement('ul');

document.body.appendChild(lista);
lista.id=('lista')

function pintar(obj){
    
        let elm = document. createElement('li');
        
        let boton = document.createElement('button');
        boton.id="enviar";
        boton.addEventListener('click',e =>{
            boton.textContent = `${obj.votes}☝`;
            obj.votes ++
        });
        boton.textContent = contador
        elm.textContent =`tipo ${obj.description}`;
        elm.appendChild(boton);
        lista.appendChild(elm);
       
    }



    arr.forEach(objeto => { 
        contador =0;
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
        votes:1
    }
    arr.push({description:valor,votes:1});
    pintar(nobj);
    document.getElementById("añadirid").value = "";
  
}
)




let arrv=[];
let borrar = document.getElementById("borrar");

 let listab = document.getElementById("lista")
borrar.addEventListener('click',e =>{
    document.body.removeChild(listab);
    const listan = document.createElement('ul');

document.body.appendChild(listan);
listan.id=('lista');
nueva(a)


});


