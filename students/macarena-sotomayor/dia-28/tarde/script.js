// 1.Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy)



// function suma(a,b){
//     return a+b
// }




// let obj= {
//     prop1: 'hello gentecilla',
//     prop2: 15,
//     propbool:('hola'==='hola'),
//     propnull: "",
//     proparr: ["ayer","pizza","portugal"],
//     propfunci: suma, 
//     propobj: {
//         coche:"megane",
//         caballos: 80,

//     },
   

// }



// document.write(obj.propfunci(2,5))

// 2.Crea una función que dado un objeto y un string que represente el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto.(easy)

// let kokito={
//     peso: "muchisimo",
//     belleza: "poca",
//     coeficiente: 2,
//     pesado: "a"==="a",

// }

// let coef = 'corficiente'




// function elimprop (a,b ){

//     delete a[b] ; 
   
//  document.write(`<p>${a[b]}</p>`)
// }

// elimprop(kokito, coef)


// 3.Crea una función que reciba por parámetro un objeto y una propiedad, y devuelva true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)



// let objpru={
//     colores: "blanco",
//     numero: 827,
//     igual: "3"==="3"
// }


// let pro= 'colores'


// function existe (a,b){
// //    let resultado = a.hasOwnProperty(b)
// //     document.write(resultado)
//     document.write(a.hasOwnProperty(b))
// }


// existe(objpru, pro)


// 4.Crea una función que imprima por pantalla el 'nombre: valor' de cada objeto (buscar mertodos de objeto ejmp Object Keys).(easy)

// let obj= {
//     nom1: "val1",
//     nom2: "val2",
//     nom3: "val3",
// }


// function escribirnv (a){
// //    document.write(Object.keys(a)+Object.values(a))
//     document.write(Object.entries(a))

// }  

// escribirnv(obj)

// 5.Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)


// let hora = "15:45:57"



// function obhora(a){
//     let strarr =a.split(':')
//     console.log(strarr)
//     let objHora={
//         horas: strarr[0],
//         minuutos: strarr[1],
//         segundos: strarr[2]
//     }
//     document.write(Object.entries(objHora))


// }
// obhora(hora)




// 6.Crea una función que dado un array de objetos "producto" que contiene (id, nombre, tipo, precio) devuelva el precio total de todos los productos.(medium)
// let arrpro= [ producto1={
//     nombre:"tomate",
//     tipo: "fruta",
//     precio: 1
//     },
//     producto2={
//     nombre:"piniemnto",
//     tipo: "verdura",
//     precio: 2
//     },
//     producto3={
//     nombre:"pollo",
//     tipo: "carne",
//     precio: 3
//     }

// ]


// function suma (a){
//     let precioTotal= 0
//     for(i=0; i<a.length; i++){
//         precioTotal=precioTotal+a[i].precio

//     }document.write(precioTotal)


// }
// suma(arrpro)

// esto no vale:
// function sumarr(a){
//     let contador= 0
//     a.forEach(v,i,a => {
//         contador=contador+a[i].precio
        
//     });

//     return document.write(contador)


// }

// // sumarr(arrpro);

// 7.Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, una imagen del coche, velocidad actual y algo que me indique si está encendido o apagado, luego Crea un array de objetos coche e imprime por pantalla   la velocidad del 4º coche.(medium)

let coche1={
    marca: "bmw",
    modelo: "ranchera",
    matricula: "6892 jhu",
    velocidad: 12,
    encendido: true
}

let coche2={
    marca: "bmw",
    modelo: "ranchera",
    matricula: "6892 jhu",
    velocidad: 120,
    encendido: false
}

let coche3={
    marca: "rover",
    modelo:"ranchera",
    matricula: "6892 jhu",
    velocidad: 110,
    encendido: true
}

let coche4={
    
    marca: "bmw",
    modelo:"ranchera",
    matricula: "6892 jhu",
    velocidad: 120,
    encendido: false
}




let arrcoches = [coche1, coche2, coche3,coche4];


// document.write(arrcoches)
// document.write(arrcoches[3].velocidad)


// 8. Hacer una función que devuelva un array con los coches de una marca que se le pasa por parametro.(medium


// function marcax(a,b){
//     for(i=0; i< a.length; i++){
//     }
// }






// 9.Hacer una función que me indique si hay algún coche encendido.(medium)
 
// function cochesEncendidos (a) {   
    
//     // const newArr = a.filter(v => v.encendido===true);
//     // const onn= newArr.length
//     document.write(a.filter(v => v.encendido===true).length>0)
// }

// cochesEncendidos(arrcoches)



// function isTurnOff(arr){
//     Object.keys(arr.filter(coche=> coche.encendido === true))
   
// }

// document.write (isTurnOff(arrcoches))

// isTurnOff(arrcoches)


// 10.Hacer una función que me devuelva la velocidad media de todos los coches.(medium)


// function veloc(a){
//     let veloci= 0
//     for(i=0; i<a.length; i++){
//         veloci+=a[i].velocidad;
//     }
//     document.write(veloci/a.length)
// }

// veloc(arrcoches)

// 11.Haz una función  que a través de una marca que le indique el usuario por prompt,, te imprima por pantalla  mediante Cards los coches de nuestro array de objetos coche que cumplen con esa marca.(medium)
