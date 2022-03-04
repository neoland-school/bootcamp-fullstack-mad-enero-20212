/** EJERCICIO 1
 * Describe los siguientes permisos:
101 111 110 --- 
OWNER: leer, no escribir, ejecutar. 
GRUPO OWNER: leer, escribir, ejecutar.
ALL: leer, escribir, no ejecutar

001 010 110 ---
OWNER:  no leer, no escribir, ejecutar 
GRUPO OWNER: no leer, escribir, no ejecutar
ALL: leer, escribir, no ejecutar

100 101 011 --- 
OWNER:  leer, no escribir, no ejecutar
GRUPO OWNER: leer, no escribir, ejecutar
ALL: no leer, escribir, ejecutar

101 112 001 --- 
OWNER:  leer, no escribir, ejecutar
GRUPO OWNER: leer, escribir, XXX
ALL: no leer, no escribir, ejecutar

Representación Octal
465 ---
OWNER:  leer, no escribir, no ejecutar
GRUPO OWNER: leer, escribir, no ejecutar
ALL: leer, no escribir, ejecutar

666 ---
OWNER: leer, escribir, no ejecutar
GRUPO: leer, escribir, no ejecutar
ALL: leer, escribir, no ejecutar

755 ---
OWNER: leer, escribir, ejecutar
GRUPO: leer, no escribir, ejecutar
ALL: leer, no escribir, ejecutar

500 ---
OWNER: leer, no escribir, ejecutar
GRUPO: leer, no escribir, ejecutar
ALL: leer, no escribir, ejecutar
 */

/** EJERCICIO 2
 * Crear un app en nodejs que realice las siguientes operaciones:
--Crear un archivo vacío con el nombre hello.json
--Leer el archivo package.json y pintar por consola el name
--Escribir en el archivo hello.json el siguiente objeto ({"name":"hello-world-nodejs","version":"1.0.0"} )
--Crear una carpeta con el nombre mi-primera-carpeta
--Añadir al archivo hello.json el texto texto añadido a un JSON
--Borrar el archivo hello.json
 */

//   2-1
import { appendFile, mkdir, rm, writeFile } from 'fs/promises';

// await writeFile('./hello.json', '# hello');
await writeFile('./delete.json', '# hello');

/** 2-2
 * Leer el archivo package.json y pintar por consola el name
 */
// import { readFile } from 'fs/promises';

// const data = await readFile('./package.json');
// const dataObj = JSON.parse(data);
// // console.log(data.toString());
// console.log(dataObj.name);

// 2-3
// Escribir en el archivo hello.json el siguiente objeto ({"name":"hello-world-nodejs",
// "version": "1.0.0"} )
// await writeFile('./hello.json', JSON.stringify({ "name": "hello-world-nodejs", "version": "1.0.0" }));

/**  2-4
 * Crear una carpeta con el nombre mi-primera-carpeta
 */

// await mkdir('./mi-primera-carpeta');

//  2-5
// Añadir al archivo hello.json el texto texto añadido a un JSON


// const addJson = 'texto añadido a un JSON'

// await appendFile('./hello.json', JSON.stringify({ addJson }));

// rm('./hello.json');


// ejercicio 3
/** haz el copy
 * 3.1 Numero de entidades españolas en SWIFT.
 * 3.2 Nombre + codigo swift de las entidades malagueñas.
 * 3.3 Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.
 * 3.4 Si hay alguna entidad onubense o no
 */

//  3.1
// const putinMalo = await readFile('./mi-primera-carpeta/putin-malo.json', { encoding: 'utf-8' });
// const pm = JSON.parse(putinMalo);
// console.log(pm.list.length);

// 3.2
// Nombre + codigo swift de las entidades malagueñas.
// const malaga = pm.list.filter(e => e.city === 'MALAGA')
// malaga.map(c => {
//     console.log(c.bank, c.swift_code)
// })

// 3.3
// Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.

// const putinMalo = await readFile('./mi-primera-carpeta/putin-malo.json', { encoding: 'utf-8' });
// const pm = JSON.parse(putinMalo);
// const tresTres = pm.list.filter(c => c.swift_code.length > 8)

// tresTres.map(c => console.log(c.bank, c.swift_code))

// 3.4
// Si hay alguna entidad onubense o no

// const huelva = pm.list.filter(e => e.city === 'HUELVA');
// console.log(huelva.length !== 0);

/** EJERCICIO 4
 * 4.  Existe un API que dada una IP nos permite saber mucha información de conexión de la misma. 
 *      Ese API es https://ip-api.com/. Para llamar al API debemos hacer una petición HTTP GET a la 
 *      siguiente url (http://ip-api.com/json/) y esto nos devolverá un JSON con la información de 
 *      NUESTRA conexión. Como en NodeJ
 * 
 * Crear una aplicación en NodeJS que:
-Escriba en un archivo connection.json la información que devuelve el API.
Contestar a las siguientes preguntas:
-¿Cuál es nuestra IP de conexión en Internet?
-¿Qué es el ISP? ¿Cuál es nuestro ISP?
-Modificar el programa para que se le pueda pasar por argumento una lista de IP's separadas 
por espacio y se guarde en el archivo un array con la info de nuestra conexión mas la info de 
la lista de IP's. Para obtener la info de una IP debemos llamar al API con la IP en la URL. 
---Por ejemplo Si queremos obtener la infor de la ip 80.59.55.55 debemos llamar a la siguiente URL 
(http://ip-api.com/json/80.59.55.55)
 */


// upside down
import fetch from 'node-fetch';

// const response = await fetch('http://ip-api.com/json/');
// const ddata = await response.json();

// console.log(ddata);

// Escriba en un archivo connection.json la información que devuelve el API.
// writeFile('./mi-primera-carpeta/connection.json', JSON.stringify(ddata));
// let IPs = ["208.80.152.201", "8.8.8.8", "24.48.0.1"]

// IPs.map(c => {
//     let arr = []
//     fetch(`http://ip-api.com/json/ ${c}`)
//         .then(r => r.json())
//         .then(d => appendFile('./mi-primera-carpeta/connection.json', JSON.stringify(d),
//             (err) => {
//                 if (err) throw err
//             })
//         )
// })

// IPs.map(c => {
//     let arr = []
//     fetch(`http://ip-api.com/json/ ${c}`)
//         .then(r => r.json())
//         .then(d => {
//             arr.push([...arr, d])
//             appendFile('./mi-primera-carpeta/connection.json', d, (err) => {
//                 if (err) throw err
//             })
//         })
// })


let IPs = [" ", "208.80.152.201", "8.8.8.8", "24.48.0.1"]
let arr = []

IPs.map(c => {
    fetch(`http://ip-api.com/json/${c}`)
        .then(r => r.json())
        .then(data => {
            arr.push(data)
            console.log(typeof arr)
            writeFile('./mi-primera-carpeta/connection.json', JSON.stringify(arr), (err) => {
                if (err) throw err
            })
        })
})
await writeFile('./connection.json', JSON.stringify(data));
