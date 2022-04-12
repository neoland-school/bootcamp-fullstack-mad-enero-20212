// EJERCICIO 1

/*

const objeto = {
    numero : 2,
    palabra : "pescao",
    verif : true,
    nada : null,
    und : undefined,
    lista : ["manzanas", "peras","aguacate"],
    suma: function sumar(a,b){
        return a+b;
    },


}

document.write(objeto.suma(3,3))

*/


// EJERCICIO 2

/*

let objeto = {
    nombre : "robin",
    apellido: "bucad",
};

let funado = "apellido"

 function borrado (a,b){
    
    delete a[b];
}

borrado(objeto,funado)

document.write(objeto.apellido)

*/


// EJERCICIO 3

/*

let lista = {
    comida: "macarrones",
    verdura: "brocoli",
}

function prop(a,b){
    
document.write(a.hasOwnProperty(b))
}

prop(lista,"verdura")


*/

// EJERCICIO 4

/*

lista = {
    nombre: "robin",
    apellido: "bucad",
    edad : 10,
    pais: "españa"

}

lista2 = {
    nombre: "paco",
    apellido: "rodriguez",
    edad : 14,
    pais: "africa"

}

function verif (obj){
    
    document.write(`<p>${Object.keys(obj)}</p>`)
    document.write(`<p>${Object.values(obj)}</p>`)
}


verif(lista)


*/

// EJERCICIO 5

/*


function reloj(x){
    let separado = x.split(":");
    let horas = {
        hora: separado[0],
        minutos: separado[1],
        segundos: separado[2]
    }
    document.write(Object.entries(horas))
    
    
}

reloj("14:36:57")

*/





// EJERCICIO 6

/*

let productos = {
    id: 3134,
    nombre: "fairy",
    tipo:"limpieza",
    precio:2,
}

let productos2 = {
    id: 31434,
    nombre: "detergente",
    tipo:"limpieza",
    precio:4,
}

let productos3 = {
    id: 31334,
    nombre: "lavavajillas",
    tipo:"limpieza",
    precio:20,
}

let array = [productos,productos2,productos3]

function suma (){
    
    document.write(array.reduce(array => productos.precio + productos2.precio + productos3.precio))

}

suma()

*/

// EJERCICIO 7



let coche1 = {
    marca: "ford",
    modelo: "fiesta",
    matricula: "3242htl",
    foto : `<div><img src="./img/fordfi.jpg"></div>`,
    velocidad: 120,
    encendido: false,
            
}

let coche2 = {
    marca: "renault",
    modelo: "clio",
    matricula: "4253qwf",
    foto : `<div><img src="./img/renault.jpg"></div>`,
    velocidad: 0,
    encendido: false,
            
}

let coche3 = {
    marca: "ferrari",
    modelo: "n340",
    matricula: "9582jhg",
    foto : `<div><img src="./img/ferrari.jpg"></div>`,
    velocidad: 150,
    encendido: false,
            
}

let coche4 = {
    marca: "ferrari",
    modelo: "rapido",
    matricula: "2425gnl",
    foto : `<div><img src="./img/fer.jpg"></div>`,
    velocidad: 130,
    encendido: false,
            
}

let coche5 = {
    marca: "ford",
    modelo: "fiesta",
    matricula: "0987jhk",
    foto : `<div><img src="./img/fiesta3.jpg"></div>`,
    velocidad: 0,
    encendido: true,
            
}


conjunto = [coche1, coche2, coche3, coche4, coche5];

/*

document.write(`<p>${coche4["velocidad"]}kmh es la velocidad</p>` )

*/

// EJERCICIO 8

function filterByBrand(cars, brand){
    return conjunto.filter(c => c.marca.toLowerCase() === brand.marca)
}


function pintar(cars){
    let htmlOutput = '<div class ="containter">';
    cars.forEach( c => {
        htmlOutput += `<div class ="car">
                <h2>${c.marca}${c.modelo}</h2>
                <img src = "${c.foto} /> 
            </div>` 
    })
    htmlOutput += '</div>';
    document.write(htmlOutput)
}

pintar(conjunto["ford"])


// EJERCICIO 9

/*

function encendidos(){
    prueba = conjunto.find( v => v.encendido ===  true )
    document.write(`<p>Hay algun coche encendido : ${prueba.encendido}</p>`)
}

encendidos()
*/

// EJERCICIO 10

/*

function velocidadMedia(){
    vel = conjunto.reduce(v => (coche1.velocidad + coche2.velocidad + coche3.velocidad + coche3.velocidad + coche4.velocidad + coche5.velocidad) / 5 )
    document.write(vel)
}


velocidadMedia()

*/

// EJERCICIO 11

/*

let marca = prompt("Que quieres ver : ford,renault, ferrari o porsche")


function mostrar (){
    switch (marca){
        case "ford":
            document.write(`<p>${coche5.foto}</p>`)
            document.write(`<p>${coche1.foto}</p>`)
        break;

        case "renault":
            document.write(`<p>${coche2.foto}</p>`)
        break;

        case "ferrari":
            document.write(`<p>${coche3.foto}</p>`)
            document.write(`<p>${coche4.foto}</p>`)
        break;

        case "porsche":
            document.write(`<p>${coche4.foto}</p>`)
        break;

        default : document.write("Tienes que poner una marca que te indico")
    }
}

mostrar()


*/