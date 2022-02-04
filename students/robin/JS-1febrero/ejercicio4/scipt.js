



const p2 = document.createElement("p");
const p3 = document.createElement("p");

const all = document.querySelector(".enviar")


all.addEventListener("click", e => {
    const p1 = document.createElement("p");
    const name = document.getElementById("in1") ;

    p1.textContent = name.value;
    document.body.appendChild(p1)
})

all.addEventListener("click", e => {
    const p2 = document.createElement("p");
    const email = document.getElementById("in2") ;
    p2.textContent = email.value ;
    document.body.appendChild(p2)
})

all.addEventListener("click", e => {
    const p3 = document.createElement("p");
    const number = document.getElementById("in3") ;
    p3.textContent = number.value ;
    e.preventDefault()
    document.body.appendChild(p3)
})





