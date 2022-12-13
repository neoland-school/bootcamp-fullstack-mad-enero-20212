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
    votes:0
},

);
let contador =0

function pintar(obj){
   
        const div = document.createElement('div');
        div.classList.add('listado-beers');
        const lista = document.createElement('ul');
        document.body.appendChild(div);

        let elm = document. createElement('li');
        let boton = document.createElement('button');
        boton.id="enviar";
        boton.addEventListener('click',e =>{
            boton.textContent = `${contador}☝`;
            contador ++
        });
        boton.textContent = contador
        elm.textContent =`tipo ${obj.description}`;
        elm.appendChild(boton);
        lista.appendChild(elm);
        div.appendChild(lista);
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
 const divn = document.createElement('div');
 document.body.appendChild(divn);
 divn.appendChild(nuevo);
 divn.appendChild(btnew);


 //quiero añadir una opcion nueva al array, pero que no aparezca dos veces, si no una

 btnew.addEventListener('click',e =>{
    let valor= document.getElementById("añadirid").value;
    console.log(valor)
    let nobj = {
        description:valor,
        votes:0
    }
    arr.push({description:valor,votes:0});
    pintar(nobj);
    
}
)










     
     
    

   
