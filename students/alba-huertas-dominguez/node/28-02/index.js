import os from 'os'; // version ESM
import { cwd, pid, ppid } from 'process';
import { isObject } from 'util';
import dns from 'dns';
import { argv } from 'process';
import { toUnicode } from 'punycode';
import { readFile, writeFile, rm, mkdir  } from 'fs/promises';
import { readFileSync } from 'fs';
import { appendFile } from 'fs/promises';


// console.log('hello world')
// console.log(`Current Process PID: ${pid}`);
// console.log(`Current Process Parent PID: ${ppid}`);
// setTimeout(() => { // paro el proceso a los 10 segundos
//     console.log('parando el proceso');
//     process.exit();
// },10000);

// console.log(`sitema operativo: ${os.hostname()}`);
// console.log(`aquitectura: ${os.arch()}`);
// console.log(`numero cpus:
//  ${os.cpus().length}`);
// console.log(`memoria libre: ${os.freemem()}`);
// console.log(`ruta directorio home: ${os.homedir()}`);

// console.log(Object.keys(os.networkInterfaces())) // esto es para recorrer el objeto.
// console.log(Object.keys(os.networkInterfaces()['wi-fi'])) // estoy accediendo  al wifi dentro de mi objeto.
// console.log(Object.keys(os.networkInterfaces()['wi-fi'][0])) //estoy accediendo al wifi posicion cero.
// console.log(Object.keys(os.networkInterfaces()['wi-fi'][0]['mac']))// estoy accediendo al wifi, posicion cero, mac.

// console.log(os.networkInterfaces()) // esto me da mis interfaces, es decir, dos objetos. 
// // Object.keys(os.networkInterfaces())


// const options = {
//   family: 4,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('google.com', options, (err, address, family) =>
//   console.log( address, family));



//   Los programas cuando los ejecutamos pueden recibir parámetros de entrada. 
//   Estos parámetros nos permiten configurar nuestra aplicación y se puede obtener su valor dentro del programa. 
//   Para obtener los parámetros de un programa utilizamos el array process.argv. Para poder pasar un parámetro de entrada a un programa NodeJS, 
//   tendremos que ejecutar el programa y con espaciós vamos pasando cada uno de los parámetros. EJ: node hello-world.js 3 adios este programa node 
//   le mandamos dos parámetros de entrada cuyo valor, en este caso, son "3" y "adios". Construir 
//   un programa en NodeJS que pinte por consola el valor del primer parámetro de entrada que se le pase.


//  let params = process.argv[3];
//  console.log(params)


// let params = process.argv[2]

// const options4 = {
//     family: 4,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//   };
//   dns.lookup(`${params}`, options4, (err, address, family) =>
//     console.log( address, family));

// const options6 = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//   };
//   dns.lookup(`${params}`, options6, (err, address, family) =>
//     console.log( address, family));




// let params = process.argv[2]

//             if (params.startsWith('wwww')){
//                 const options4 = {
//                     family: 4,
//                     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//                   };
//                   dns.lookup(`${params}`, options4, (err, address, family) =>
//                     console.log( address, family));
                
//                 const options6 = {
//                     family: 6,
//                     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//                   };
//                   dns.lookup(`${params}`, options6, (err, address, family) =>
//                     console.log( address, family));
//                     console.log(params)


//             } else { dns.reverse(`${params}`,(err, address,) =>
//             console.log(address))

//             }


            

//       /// EJERCICIO 5 :

//       const dns = argv[2]; // obtengo en DNS.

//       const options = {

//         family:0,
//         all: true
//       }


//       promises.lookup(dns,options)


// Describe los siguientes permisos:
// 101 111 110  
// 001 010 110
// 100 101 011
// 101 112 001
// Representación Octal
// 465
// 666
// // 755
// // 500

// - el dueño puede leer y ejecutar pero no escribir.  El equipo puede escribir, leer y ejecutar. el resto de gente puede leer y escribir pero no ejecutar.

// - el dueño puede solo ejecutar. el equipo solo puede escribir, el resto de la gente puede leer y escribir pero no ejecutar.El
// - el dueño  puede solo  leer, el equipo solo puede leer y ejecutar, el resto solo puede escribir y ejecutar.
// - el dueño puede leer y ejecutar, el equipo puede hacer todo leer, ejecutar y escribir, el resto solo puede ejecutar.El

// REPRESENTACION OCTAL:

// // 100 110 101
// //110 110 110 
// // 111  101 101
// //101 000 000

// Crear un app en nodejs que realice las siguientes operaciones:
// Crear un archivo vacío con el nombre hello.json

// await writeFile('./hello.json','#hola');




// const data = await readFile('./hello.json', { encoding: 'utf-8' });
// console.log(data) // esto es para pintar lo que hay dentro


// Leer el archivo package.json y pintar por consola el name


// const data = await readFile('./package.json');
// const dataObj = JSON.parse(data);
// // console.log(data.toString());
// console.log(dataObj.name); //accede a la propiedad test



// Escribir en el archivo hello.json el siguiente objeto ({"name":"hello-world-nodejs","version":"1.0.0"} )


// const data = await readFile('./hello.json', { encoding: 'utf-8' }); // lectura de un archivo
// await writeFile('./hello.json', JSON.stringify( {"name":"hello-world-nodejs","version":"1.0.0"} )); 

// Crear una carpeta con el nombre mi-primera-carpeta
// await mkdir('mi-primera-carpeta');


// // Añadir al archivo hello.json el texto texto añadido a un JSON
// await appendFile('./hello.json', JSON.stringify( 'hola hola')); 


// Borrar el archivo hello.json
//  rm('./hello.json')


// const data = await readFile('./objeto.json', { encoding: 'utf-8' });
// console.log(data) // esto es para pintar lo que hay dentro


// const data = await readFile('./objeto.json', { encoding: 'utf-8' });
// const obj= JSON.parse(data);
// console.log(obj.list.length)


// Nombre + codigo swift de las entidades malagueñas.

// const data = await readFile('./objeto.json', { encoding: 'utf-8' });
// const obj= JSON.parse(data);
// const malaga = obj.list.filter( c => c.city ==="MALAGA");
// malaga.map( c =>
//   console.log(c.bank, c.swift_code)
//    )



// Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.


// const data = await readFile('./objeto.json', { encoding: 'utf-8' });
// const obj= JSON.parse(data);
// const car = obj.list.filter(c=> c.swift_code.length > 8);

// car.map( c =>
//   console.log(c.bank, c.swift_code)
  
//   )

// const data = await readFile('./objeto.json', { encoding: 'utf-8' });
// const obj= JSON.parse(data);
// const huelva = obj.list.filter( c => c.city ==="HUELVA");
//   console.log(huelva.lenght)
// //    )
// import fetch from 'node-fetch';
// const response = await fetch('http://ip-api.com/json/');
// const data = await response.json();

// console.log(data);


// // await writeFile('./connection.json',data); ,zone(err)=>(if(err)trow err)

// await writeFile('./connection.json', JSON.stringify( data )); 

// let params = process.argv[2];
// console.log(params)




// 5.Crear un programa que liste todos los archivos y directorios de la carpeta Home del usuario que ejecuta el programa, indicando si es archivo o directorio.

// import { readFile } from 'fs';
import fetch from 'node-fetch';

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