

const copiando = document.querySelector("p")

document.addEventListener("keydown", logKey);

function logKey(e){
    copiando.textContent += `Estas pulsando : ${e.code} `
}

