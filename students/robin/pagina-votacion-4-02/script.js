



const movil2 = {
    model : "samsung 10",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet, libero vel condimentum aliquam, risus enim sollicitudin lorem, vel congue velit massa ut ante. Ut suscipit ornare nibh, eu aliquet enim pretium ac. Aenean sed orci ac lectus commodo pretium. Proin auctor"
}


const movil3 = {
    model: "samsung doblao",
    description: "es el movil que se dobla"
}

const movil4 = {
    model: "iphone caro",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet, libero vel condimentum aliquam, risus enim sollicitudin lorem, vel congue velit massa ut ante. Ut suscipit ornare nibh, eu aliquet enim pretium a"
}



createCard(movil2.model,movil2.description)
createCard(movil3.model,movil3.description)
createCard(movil4.model,movil4.description)


 
let moviles = JSON.parse(localStorage.getItem('movil')) ?? []


/*TERMINAR MAÑANA

- Meter api reconocimiento de voz
- Intenar ordenar de mayor a menor con un select(ya lo he puesto)

*/




function createCard (model, description){  // ESTA FUNCION ME CREA UNA CARD

    const cardsContainer = document.querySelector(".cards")
    const cardBox = document.createElement("article");
    cardBox.classList.add("card")

    const card = document.createElement("div");

    const titleCard = document.createElement("h1")
    titleCard.textContent = model ;

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("info")

    const parrafo = document.createElement("p");
    parrafo.textContent = description;

    const footer = document.createElement("footer")
    footer.classList.add("footer")


    let contador = 0;
    
    const icon = document.createElement("i");  // ICONO "ME GUSTA" QUE SUMA DE 1 EN 1
    icon.setAttribute("class" ,"fas fa-thumbs-up")
    icon.textContent = contador
    icon.addEventListener("click" , e=> {
        contador ++;
        icon.textContent = contador;
    })

    let contadorDown = 0

    const down = document.createElement("i"); // // ICONO "NO ME GUSTA" QUE SUMA DE 1 EN 1
    down.setAttribute("class" ,"fas fa-thumbs-down")
    down.textContent = contadorDown
    down.addEventListener("click" , e=> {
        contadorDown++;
        down.textContent = contadorDown;
    })
    

    const borrar = document.createElement("i");
    borrar.setAttribute("class", "fas fa-times");
    borrar.addEventListener("click", e => {
        cardsContainer.removeChild(cardBox)
        localStorage.removeItem("movil")
    })

    /* HOY ACABAR ESTO PARA ACTIVAR EL RECONOCIMIENTO

const micro = document.getElementById('micro')

let reconocimiento = new webkitSpeechRecognition();
    reconocimiento.lang = 'es-ES';
    reconocimiento.continuous = true;
    reconocimiento.interimResults = false;
    reconocimiento.onresult = (e) => {
        const results = e.results
    }

    micro.addEventListener('click' , () => {
        reconocimiento.start();
    })

const microOff = document.getElementById('microOff');
    microOff.addEventListener('click', () => {
        reconocimiento.abort()
    })

    */


   
    
    cardBox.appendChild(card)
    card.appendChild(titleCard);
    cardBox.appendChild(bodyCard)
    bodyCard.appendChild(parrafo)
    cardsContainer.appendChild(cardBox)
    cardBox.appendChild(footer)
    footer.appendChild(icon)
    footer.appendChild(down)
    footer.appendChild(borrar)
    
}






function newMovil (model, description) {  // CREO EL OBJETO QUE EN ESTE CASO ES UN MOVIL CON SU MODELO Y DESCRIPCION
    
    const newMovil = {
        model: model,
        description:description
    };
   
    moviles.push(newMovil)  // RECORRO EL ARRAY PRINCIPAL DE MOVILES Y LE AÑADO EL NUEVO OBJETO
    createCard(newMovil.model,newMovil.description) // LLAMO A LA FUNCION QUE CREA  LA CARD Y LE DOY COMO PARAMETRO EL MODELO Y DESCRIPCION DEL OBJETO "NEWMOVIL"
    localStorage.setItem("movil", JSON.stringify(moviles))  // ALMACENO LOS OBJETOS EN UN LOCAL STORAGE
    
}   


moviles.forEach((m, d) => createCard((m.model),(d.description))); // RECORRO CADA OBJETO DEL ARRAY PRINCIPAL Y LE DIGO QUE HAGA LA FUNCION DE CREAR LA CARD(Se creeara la card creada en "newMovil")


document.querySelector("#btnAdd").addEventListener("click", e => { { // AÑADO UN LISTENER AL BOTON DE AÑADIR 
    
    e.preventDefault();
    
    let model = document.querySelector("#model").value; //AQUI HAGO DOS VARIABLES Y LLAMO A LOS DOS INPUTS DEL MODELO Y DESCRIPCION Y ME QUEDO CON SU VALOR QUE VA A SER LO QUE SE ESCRIBA EN EL IONPUT
    let description = document.querySelector("#description").value; 
        newMovil(model, description); // LLAMO A LA FUNCION QUE CREA EL OBJETO  
        
    
        
        const text = document.querySelector("input") //REINICIO EL TEXTO DEL INPUT PARA 
        text.value = " " 
        const info = document.querySelector("#description")
        info.value = " " 
     
    
}
}) ;





