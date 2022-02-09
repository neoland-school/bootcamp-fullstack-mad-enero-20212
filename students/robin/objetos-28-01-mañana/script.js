

// EJERCICIO 1 y 2

/*

let cosas = {
    demo: "hola",
    hello: false
};
console.log(cosas)

*/




//EJERCICIO 3

let españa = {
    nombre: "España",
    capital: "Madrid",
    continente: "europa",
    smi: 1252
}

let china = {
    nombre : "china",
    capital: "chinatown",
    continente: "asia",
    smi: 281
}

let NuevaZelanda = {
    nombre: "Nueva Zelanda",
    capital: "arañas",
    continente: "oceania",
    smi:2240,
}

let Andorra = {
    nombre:"andorra",
    capital:"andorra",
    continente:"europa",
    smi: 1288
}


let paises = [españa, china, NuevaZelanda, Andorra]

let superior = paises.filter(v => v.smi>1500)



let htmlOutput = `<ul>`;

for (i = 0; i<superior.length;i++){
    
    htmlOutput += `<li>${superior[i].nombre}</li>`
}

htmlOutput += `</ul>`

document.write(htmlOutput)

/*



let europeos = paises.filter(v=> v.continente === "europa")

document.write(`<ul><li>${JSON.stringify(europeos)}</li></ul>`)


*/

