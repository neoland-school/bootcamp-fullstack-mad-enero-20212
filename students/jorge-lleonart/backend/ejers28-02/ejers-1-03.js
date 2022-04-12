// 1. Describe los siguientes permisos

// 101 111 110 -> 576 El propietario lee y ejecuta, el grupo lee, ejecuta y edita, y el resto leer y escribir
// 001 010 110 -> 126 Propietario solo ejecuta, grupo solo escribe y cualquiera lee y escribe.
// 100 101 011 -> 453 
// 101 112 001 -> no existe


// 465 -> 100 110 101 -> el propietario lee, el grupo lee y escribe, cuaquiera lee y ejecuta.
// 666 -> 110 110 110 -> todos leen y escriben
// 755 -> 111 101 101 -> el propietario lee, escribe y ejecuta, el grupo cualquiera leen y ejecutan 
// 500 -> 011 000 000  -> el propietario escribe y ejecuta, el resto no hace nada.


// 2.  Crear un app en nodejs que realice las siguientes operaciones:
// Crear un archivo vacío con el nombre hello.json
import {writeFile,readFile,mkdir,appendFile,rm} from 'fs/promises';

// await writeFile('./hello.json', '');


// Leer el archivo package.json y pintar por consola el name

// const nameJson = await readFile('./package.json',{encoding: 'utf8'});
// console.log(JSON.parse(nameJson).name)

// Escribir en el archivo hello.json el siguiente objeto ({"name":"hello-world-nodejs","version":"1.0.0"} )

// const obj = {"name":"hello-world-nodejs","version":"1.0.0"};
writeFile('./hello.json', JSON.stringify(obj))

// Crear una carpeta con el nombre mi-primera-carpeta

// mkdir('mi-primera-carpeta');

// Añadir al archivo hello.json el texto "texto añadido a un JSON"

// appendFile('./hello.json',"texto añadido a un JSON")

// Borrar el archivo hello.json

// await rm('./hello.json')


// 3. Descargar con el navegador el siguiente archivo JSON (https://github.com/PeterNotenboom/SwiftCodes/blob/master/AllCountries/ES.json). Si estáis siguiendo las noticias estos días, veréis que se habla de desconectar a Rusia del sistema bancario Swift. Este sistema es una unión internacional de bancos que permite las transacciones entre países. El JSON descargado contiene la info de las entidades españolas para el sistema bancario SWIFT.
// Crear una app en NodeJS que lea el JSON y pinte por consola lo siguiente:
// Numero de entidades españolas en SWIFT.

// const Swift = await readFile('./ES.json',{encoding: 'utf8'});
// console.log(JSON.parse(Swift).list.length)

// Nombre + codigo swift de las entidades malagueñas.

// const findMalaga = JSON.parse(Swift).list.filter(e => e.city === 'MALAGA');
// console.log(findMalaga);

// Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.

// const findMoreThan = JSON.parse(Swift).list.filter(e => e.swift_code.length > 8);
// console.log(findMoreThan)

// Si hay alguna entidad onubense o no

// const findHuelva = JSON.parse(Swift).list.filter(e => e.city === 'HUELVA');
// console.log(findHuelva.length);

// 4. Existe un API que dada una IP nos permite saber mucha información de conexión de la misma. Ese API es https://ip-api.com/. Para llamar al API debemos hacer una petición HTTP GET a la siguiente url (http://ip-api.com/json/) y esto nos devolverá un JSON con la información de NUESTRA conexión. Como en NodeJS no tenemos fetch (está en camino) podemos instalarlo utilizando una librería npm llamada node-fetch
// Crear una aplicación en NodeJS que:
// Escriba en un archivo connection.json la información que devuelve el API.
// Contestar a las siguientes preguntas:
// ¿Cuál es nuestra IP de conexión en Internet?  '95.16.193.169'
// ¿Qué es el ISP? ¿Cuál es nuestro ISP?  Internet Service Provider,'Orange Spain'
// Modificar el programa para que se le pueda pasar por argumento una lista de IP's separadas por espacio y se guarde en el archivo un array con la info de nuestra conexión mas la info de la lista de IP's. Para obtener la info de una IP debemos llamar al API con la IP en la URL. Por ejemplo Si queremos obtener la infor de la ip 80.59.55.55 debemos llamar a la siguiente URL (http://ip-api.com/json/80.59.55.55)

import fetch from 'node-fetch';
import { process, argv} from 'process';

const response = await fetch('http://ip-api.com/json/');
const data = await response.json();
console.log(data);
// writeFile('./api.json', JSON.stringify(data))
let params = process.argv[2]
appendFile('./api.json',`${params}`)


let IPs = [" " , "208.80.152.201", "8.8.8.8", "24.48.0.1"]
let arr = []

IPs.map(c => {
    
    fetch(`http://ip-api.com/json/${c}`)
        .then(r => r.json())
        .then(data => {
            arr.push(data)
            console.log(typeof arr)
            writeFile('./connection.json', JSON.stringify(arr), (err) => {
                if (err) throw err
            })
        })

})

await writeFile('./connection.json', JSON.stringify(data));









