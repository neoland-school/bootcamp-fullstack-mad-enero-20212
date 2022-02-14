
// EJERCICIO 1

/*

const obj1 = {
    descipcion : "esto es el objeto1",
    value : 10,
}

const obj2 = {
    descipcion : "esto es el objeto2",
    value : 6,
}

let array = []
array.push(obj1, obj2)

const text1 = document.querySelector("#obj1")
const vot1 = document.querySelector("#voto1")
text1.textContent = obj1.descipcion
text1.appendChild(vot1)
vot1.textContent = obj1.value


const text2 = document.querySelector("#obj2")
const vot2 = document.querySelector("#voto2")
text2.textContent = obj2.descipcion;
text2.appendChild(vot2)
vot2.textContent = obj2.value

// EJERCICIO 2-3

let contador = obj1.value

vot1.addEventListener("click", e => {
    contador++;
    vot1.textContent = contador
} )

let contador2 = obj2.value

vot2.addEventListener("click", e => {
    contador2++;
    vot2.textContent = contador2
} )

*/

// EJERCICIO 4

let objetos = [] ;



const btnAdd = document.querySelector(".addBtn")

function añadirObj() {
    btnAdd.addEventListener("click", e => {
        e.preventDefault()
        const text = document.querySelector("input")
        const ul = document.querySelector(".lista-productos")
       
        const li = document.createElement("li")
        li.classList.add("obj1")

       
        li.textContent = text.value

     
       
        ul.appendChild(li);

        text.value = " "
        
        objetos.push(text.value)
        localStorage.setItem("objetos",JSON.stringify(objetos))

        let contador = []
        

        const btn = document.createElement("i")
        btn.textContent = []
        btn.setAttribute("class", "fa fa-thumbs-up voto")
        
        li.appendChild(btn)
        
        btn.addEventListener("click", e => {
            contador++;
            btn.textContent = contador
        } )
        
        
        
        
       

    })

}

añadirObj()







