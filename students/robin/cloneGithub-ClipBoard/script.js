


const copyBtn = document.getElementById('btn-copy');
const tickBtn = document.getElementById('tickBtn')
copyBtn.addEventListener('click', e => {
    const text = document.getElementById('copy').value
    navigator.clipboard.writeText(text)
    copyBtn.style.display = 'none'
    tickBtn.style.display = 'flex'

    setTimeout(function() {
        console.log('hola')
        tickBtn.style.display = 'none'
        copyBtn.style.display = 'flex'
    },1500)
})

const pasteBtn = document.getElementById('paste');
const textCopied = document.getElementById('article')


// ESTA FUNCION PEGA LO QUE TENGO SELECCICIONADO 'COPIADO'

pasteBtn.addEventListener('click', async e => { // ASYNC ME INDICA QUE HAY FUNCIONES ASINCRONAS
    textCopied.textContent = '';

    try{

        const data = navigator.clipboard.read()
        const content = data[0];
        const img = await content.getType('image/png')  // EL AWAIT ESPERA A QUE EL CODIGO DE ABAJO SE EJECUTE
        const url = window.URL.createObjectURL(img)

        const photo = document.createElement('img')

        photo.src = url;
        textCopied.appendChild(img)

    }catch(err){
        console.log('hola')
        const text = await navigator.clipboard.readText()
        textCopied.textContent= text
    }

})


