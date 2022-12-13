


const contenedor1 = document.querySelector("#card1")  // CREO LAS VARIABLES DE LOS DIVS DONDE VAN LOS ARTICULOS
const contenedor2 = document.querySelector("#card2")
const contenedor3 = document.querySelector("#card3")
let info = document.getElementsByClassName("card-info"); // LLamo a las clases que tienen card-info




contenedor1.addEventListener("dragover", e => permitisSoltar1(e))
contenedor1.addEventListener("drop", e => dropear1(e))




function elArrastre1(e){ 
    e.dataTransfer.setData("idInfo", e.target.id);  // establezco los datos de arrastre con el nombre "idInfo", esto me va a decir que elemento estoy arrastrnado
    console.log(e.target.id)
}


function permitisSoltar1(e){
    e.preventDefault()
    console.log("arrastro")
 }

function dropear1(e){
    
    let datos = e.dataTransfer.getData("idInfo");
    contenedor1.appendChild(document.getElementById(datos))
   
}



function elArrastre(e){
    e.dataTransfer.setData("idInfo", e.target.id);
    console.log(e.target.id)
}


contenedor2.addEventListener("dragover", e => permitisSoltar(e))
contenedor2.addEventListener("drop", e => dropear(e))

function permitisSoltar(e){
    e.preventDefault()
    console.log("arrastro")
 }

function dropear(e){
    
    let datos = e.dataTransfer.getData("idInfo");
    contenedor2.appendChild(document.getElementById(datos))
    
    
   
}




contenedor3.addEventListener("dragover", e => permitisSoltar3(e))
contenedor3.addEventListener("drop", e => dropear3(e))




function elArrastre3(e){
    e.dataTransfer.setData("idInfo", e.target.id);
    console.log(e.target.id)
}


function permitisSoltar3(e){
    e.preventDefault()
    console.log("arrastro")
 }

function dropear3(e){
    
    let datos = e.dataTransfer.getData("idInfo");
    contenedor3.appendChild(document.getElementById(datos))
   
}


const btnAdd = document.querySelector("#btnAdd")
const input = document.querySelector("input")


btnAdd.addEventListener("click", e => {
  

   
    const contenedor1 = document.querySelector("#card1")
    e.preventDefault()
    const article = document.createElement("article")
    article.setAttribute("class", "card-info")
    article.setAttribute("draggable", "true")
   
    
    
    
   
    const p = document.createElement("p");
    
    const text = document.querySelector("#tarea-text");
    p.textContent = text.value;

    

    article.appendChild(p)
    contenedor1.appendChild(article)
    
    for (let i = 0; i < info.length;i++ ){          // Hago un bucle dandome los valores con la clase card-info 
        info[i].setAttribute("draggable","true");    // Ha cada uno de los card-info les pongo un atributo "draggable" y su valor "true" esto me deja arrastrar el div
        info[i].setAttribute("id", "informacion"+i) // Les creo un id que se va a llamar informacion y le sumo I para que vaya de 0 hata el numero de clases card-info
        info[i].addEventListener("dragstart", e => elArrastre(e)) // Creo la funcion que indica cuando arrastro el div

        
    }



    
})

   









