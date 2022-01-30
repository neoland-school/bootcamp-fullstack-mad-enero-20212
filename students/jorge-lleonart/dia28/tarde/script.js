// 1. Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy)

// let obj1 = {
//     cantidad: 15,
//     color: 'azul'
// };

// function contar(v){
//     let counter=0;
//     for (i =0 ;  i<= v; i++) {
//         document.write(counter)
//         counter++
//     }
// }

// let obj2 = {
//     cantidad: 12,
//     color: 'verde',
//     bool: 1===2,
//     nada: '',
//     nulo: 0,
//     arr: [1,2,3,4],
//     func: contar,
//     obo3: {
//         dia: 15,
//         edad: 25,
//     }
// }
// document.write(obj2.func(3))


// 2.Crea una función que dado un objeto y un string que represente el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto.(easy)

// let obj1 = {
//     edad: 25,
//     peso: 'mucho'
// };

// let prop ='edad';

// function elim(a,b){
//     delete a[b];
// }

// elim(obj1,prop);

// document.write(obj1.edad)

// 3. Crea una función que reciba por parámetro un objeto y una propiedad, y devuelva true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)

// let obj1 = {
//     edad: 25,
//     peso: 'mucho'
// };

// let prop ='edad';

// function existe(a,b){
//     document.write(a.hasOwnProperty(b));
// }

// existe(obj1,prop)

// 4. Crea una función que imprima por pantalla el 'nombre: valor' de cada objeto (buscar mertodos de objeto ejmp Object Keys).(easy)

// let obj1 = {
//     nombre: 'Jorge',
//     edad: 25,
//     peso: 'mucho'
// };

// // let obj2 = {
// //     nombre: 'juan',
// //     edad: 22,
// //     peso: 'medio'
// // };

// // let obj3 = {
// //     nombre: 'Jose',
// //     edad: 26,
// //     peso: 'poco'
// // };

// function nom(a) {
//     // document.write(`<p>${Object.keys(a)}+${Object.values(a)}</p>`)
//     document.write(`<p>${Object.entries(a)}</p>`)
// }
// nom(obj1)

// 5. Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)

// let str = '12:46:23';

// function hora(a) {
//     let strToArr = a.split(':')
//     let objHora = {
//         hora: strToArr[0],
//         minutos: strToArr[1],
//         segundos: strToArr[2]
//     }
//     document.write(Object.entries(objHora))
// }

// hora(str)

// 6. Crea una función que dado un array de objetos "producto" que contiene (id, nombre, tipo, precio) devuelva el precio total de todos los productos.(medium)

// let prod1 = {
//     id: 'peras',
//     nombre: 'perolas',
//     precio: 20
// };

// let prod2 = {
//     id: 'peros',
//     nombre: 'perolas',
//     precio: 25
// };

// let prod3 = {
//     id: 'peris',
//     nombre: 'perolas',
//     precio: 22
// };

// let arr=[prod1,prod2,prod3];

// function coste(a) {
//     let arrPrecio=[];
//     for (i=0; i < a.length; i++) {
//         arrPrecio=arrPrecio.push([a[i].precio])
//     }
//     document.write(`<p>${arrPrecio.reduce((acc,v) => acc+v, 0)}</p>`)
// }
// coste(arr)

// 7. Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, una imagen del coche, velocidad actual y algo que me indique si está encendido o apagado, luego Crea un array de objetos coche e imprime por pantalla   la velocidad del 4º coche.(medium)

let coche1 = {
    marca: 'bmw',
    modelo: '320',
    matricula: '1234bsj',
    velocidad: 200,
    encendido: true
}

let coche2 = {
    marca: 'bmw',
    modelo: '320',
    matricula: '1234bsj',
    velocidad: 220,
    encendido: true
}

let coche3 = {
    marca: 'bmw',
    modelo: '320',
    matricula: '1234bsj',
    velocidad: 300,
    encendido: true
}

let coche4 = {
    marca: 'bmw',
    modelo: '320',
    matricula: '1234bsj',
    velocidad: 240,
    encendido: true
}

let coche5 = {
    marca: 'bmw',
    modelo: '320',
    matricula: '1234bsj',
    velocidad: 250,
    encendido: true
}

// let arr = [coche1,coche2,coche3,coche4,coche5];

// document.write(arr[3].velocidad)

// 8. Hacer una función que devuelva un array con los coches de una marca que se le pasa por parametro.(medium)

// function marca(a) {
        

// }

// 9. Hacer una función que me indique si hay algún coche encendido.(medium)

function encendido(a) {
    
}
