const backend = `https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`

function getInfoFetchWithPromise() {
    fetch(backend)
    .then( r => r.json())
    .then( data => {
        console.log(data);
    })
}

getInfoFetchWithPromise()

async function getInfo() {
    const result = await fetch(backend)
    console.log(result);
    const data = await result.json()
    console.log(data.hola);
    return data
} 

getInfo().then(i => {
    const p = document.createElement('p')
    p.textContent = `Printing one attribute with async/await: ${i.hola}`;
    document.body.appendChild(p)
})

/*
Tipo de datos del resultado: Objeton JSON
Ip y puerto de la petición: 127.0.0.1:5500
Atributos de nuestra respuesta: 1
Qué tipo de datos tiene esos atributos: string
Código de respuesta: 200

*/