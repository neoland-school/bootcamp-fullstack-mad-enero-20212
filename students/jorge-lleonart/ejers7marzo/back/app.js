// Ya hemos aprendido a organizar mejor nuestra aplicación en express, ahora vamos a ponerlo en practica:
// Vamos a crear app en express levantada en el puerto 4000 que tenga una ruta "/", esta ruta estará desde una carpeta de rutas,  la cual debe tener un método get que devuelva un "hola mundo desde el router ".
// Ahora vamos a crearnos una carpeta Controller donde debemos tener una función que devuelva un "hola mundo desde el controller", de nuestra ruta "/" con el método Get.
// Ya tenemos nuestra carpeta de router y de controller ahora vamos a crearnos la carpeta de model la cual debe tener una función que devuelva un "hola mundo desde el model".
// Ya que tenemos organizada nuestra app con el MODELO-VISTA-CONTROLADOR, vamos a ponerla a prueba con una aplicación de vuelos (solo ida y sin escalas), con persistencia en ficheros. La aplicación podrá hacer las siguientes operaciones:
// * Devolver todos los vuelos (GET)
// * Devolver un solo vuelo (GET)
// * Crear un vuelo (POST)
// * Eliminar un vuelo (DELETE)
// Las rutas deben estar en una carpeta de rutas, nuestros datos del json los manejaremos desde nuestra carpeta Model y nuestras funciones desde Controller, para la vista usaremos POSTMAN.
// Un vuelo dentro de nuestro sistema será un objeto JSON con la siguiente información:
// {- id: Un número que identifica de manera única nuestro vuelo en el sistema
// - origin: Un string de 3 caracteres con el código IATA del aeropuerto de origen del vuelo
// - destination: Un string de 3 caracteres con el código IATA del aeropuerto de destino del vuelo
// - outboundDate: Fecha y hora de salida del vuelo
// - inboundDate: Fecha y hora de llegada de un vuelo}
// Un código IATA es un código único que representa un aropuerto a nivel mundial. Podéis obtener el listado de códigos IATA de aquí
// (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json)
// Lo primero que tiene que hacer nuestro servidor al iniciarse es crear un archivo "flights.json" vacío en el mismo directorio donde se encuentra nuestro server, siempre que no
// esté creado ya. En este archivo es donde nuestro servidor almacenará la información y la consultará. Nuestro servidor tiene que estar preparado para responder a cada una de las operaciones:
// * Devolver todos los vuelos (GET)
// - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método GET al path '/flights'
// - El metodo devolverá un 200 con todo el listado que haya en el archivo flights.json.
// * Devolver un vuelo por ID (GET) =>
// - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método GET al path '/flights/:id', siendo :id un parámetro de path donde se encontrará el identificador de vuelos.
// - La operación buscará dentro de todos los vuelos que tenemos en nuestro archivo flights.json y devolverá el que encuentre
// - Si no encuentra ninguno, la operación devolvera un status 404, con un texto diciendo: No se ha encontrado el vuelo buscado.
// * Crear un vuelo (POST) =>
// - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método POST al path '/flights', pasándonos la info en el body.
// - El body contendrá un JSON con la siguient info (origin, destination, outboundDate y inboundDate)
// - La operación añadirá al la lista de vuelos del archivo 'flight.js' un vuelo con la información dada. El id lo generará sumando 1 al último id que tengamos en nuestra lista.
// - La operación debe validar los datos que introduce el usuario:
// * el origen tiene que ser un código IATA válido
// * el destino tiene que ser un código IATA válido
// * la fecha de salida tiene que ser posterior a la fecha y horas actuales
// * la fecha de destino tiene que ser posterior a la fecha de salida
// - Si alguno de los datos es erróneo retornaremos un statusCode 400 indicando en el mensaje cual es el atributo que no es valido: EJ: 'El atributo outboundDate es inválido'.
// * Eliminar un vuelo (DELETE) =>
// - Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método DELETE al path '/flights/:id', siendo :id un parámetro de path donde se encontrará el identificador de vuelos.
// - La operación buscará dentro de todos los vuelos que tenemos en nuestro archivo flights.json y eliminará del archivo ese vuelo si lo encuentra

import express from 'express';
import cors from 'cors'
import routerHello from './src/user/router/router.js'

const app = express()
// const port = 4000 
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())

app.use('/', routerHello);

app.listen(port, ()=>{
    console.log(`Lisent at port ${port}`)
})




