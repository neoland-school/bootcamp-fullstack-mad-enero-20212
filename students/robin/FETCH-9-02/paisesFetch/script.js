
async function start(){
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
    const data = await r.json();
    
    //drawCountryEng(data)
    drawCountryEs(data)
    changeToEn(data)
    removeChild(data)
    //mostrar(data)
   
   
}

start()

const body = document.querySelector('body')
const container = document.querySelector('.container-es')


function drawCountryEng (pais){
    console.log(pais.countries)

    pais.countries.forEach( c => {
        const paisesEn = c.name_en
        if(paisesEn.length > 5){
            const containerEN = document.querySelector('.container-en')
            
            const parrafo = document.createElement('p')
            parrafo.textContent = paisesEn

            containerEN.appendChild(parrafo)
            body.appendChild(containerEN)
        }
    })
}







function drawCountryEs(pais){
   
    pais.countries.forEach(p => {
        const esp = p.name_es
        const code = p.code
        const prefix = p.dial_code
        
        const container = document.querySelector('.container-es')
        const parrafo = document.createElement('p')
        parrafo.textContent = `Nombre: ${esp} codigo: ${code} prefijo:${prefix}`

        container.appendChild(parrafo)

    })

}





const btnChange = document.getElementById('changeEn')

btnChange.addEventListener('click', e => {
    removeChild(container)
})





function changeToEn(pais){
    btnChange.addEventListener('click', () => {
        pais.countries.forEach(p => {
            const esp = p.name_en
            const code = p.code
            const prefix = p.dial_code
            
            const container = document.querySelector('.container-es')
            const parrafo = document.createElement('p')
            parrafo.textContent = `Nombre: ${esp} codigo: ${code} prefijo:${prefix}`
    
            container.appendChild(parrafo)
    })
})
}


function removeChild (parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}



/* FILTRO PAISES


document.addEventListener("keyup", e => {

if (e.target.matches("#search")){
        document.querySelectorAll("p").forEach(f => {
            f.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ?f.classList.remove("filter") 
            :f.classList.add("filter")
        })
    }
} )

*/

// Ultimo EJERCICIO

/* 

function mostrar(pais){
    pais.countries.forEach( p => {
        const country = p.name_es
        const code = p.code
        const prefijo = p.dial_code

        if(prefijo > 20 && prefijo < 600){
            const container = document.querySelector('.container-es')
            const parrafo = document.createElement('p');

            parrafo.textContent = `Nombre: ${country} codigo: ${code} prefijo:${prefijo}`

            container.appendChild(parrafo)

        }
    })
}

*/

