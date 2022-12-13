// 1. Hello middleware:
// Crear un middleware que imprima la ip de la petición y continúe al siguiente middleware. Asociar el middleware a toda la APP. Crear dos rutas get sin MVC. Una que devuelva 'hello' y otra que devuelva 'goodbye'. Verificar que llamando a una o llamando a la otra se registra la ip de la petición.

import express from 'express';
import cors from 'cors'
import * as validator from 'email-validator';

const app = express()
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.ip)
//     console.log('LOGGED');
//     next();
// })

// app.get('/hello', (req, res, next) => {
    
//     res.send('Hello')
// })
// app.get('/goodbye', (req, res, next) => {
    
//     res.send('goodbye')
// })

// app.listen(port, ()=>{
//     console.log(`Lisent at port ${port}`)
// })

// 2. Vamos a crear un middleware de validación POST.  Creamos un middleware que valide que un email en el body es correcto. el email vendrá en la propiedad email del body. Si el email No es correcto deberá devolver un 400 indicando que el email NO es correcto. Sino deberá continuar al siguiente handler. Para validar el email podéis usar esta librería (https://www.npmjs.com/package/email-validator). Una vez creado el handler, crear en el app un método post que registre el middleware y que en su controller devuelva un 201 creado. Verificar que solo se devuelve un 201 para emails válidos. PD: No hay que estructurar en MVC, ya que no tenemos entidades es solo un hello del middleware

// const mideleware = (req,res,next) =>{
//     const email = req.body.email
//     const valid = validator.validate(`${email}`);
//     if(valid){
//         next()
//     }else{
//         res.status(400).send('Email no valido')
//     }
// } 

// app.post('/login',mideleware, (req, res, next) => {
    
//     res.status(201).send('Email valido')
// })


// app.listen(port, ()=>{
//     console.log(`Lisent at port ${port}`)
// })


// ejercicios 08/03/2022
// Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto que diga "Hola Router". Añadir a esa aplicación lo siguiente:
// Un middleware de aplicación que pinte por consola en el servidor "Hola mundo App Middleware"
// Un middleware de ruter que pinte por consola en el servidor "Hola mundo Router Middleware"
import router from './router/routes.js'

app.use('/', router);

// Vamos a crear un CRUD con arquitectura MVC para probarlo usaremos POSTMAN.
// Nuestra api tendrá   tres endpoints  "/signup" de tipo POST, "/login" de tipo POST y  /user de tipo Get y delete .
// Nuestra api tendrá un endpoint de tipo POST  para registro el cual recibirá un body con un email y un password (enviarlo desde POSTMAN) la cual deberá guardarlo en nuestra base de datos (fichero), para esto debemos tener nuestra MVC, una ruta un controller y un model.
// Debemos tener un middleware  de ruta que nos compruebe si nuestro usuario ya ha sido registrado previamente, de ser el caso deberá enviarnos un status 400 y un error.
//  Nuestra api tendrá un endpoint de tipo Post para el login el cual va a recibir en el body el email y el password, esta tendrá un middleware de ruta y deberá validar que el usuario y la password existan y coincidan, de ser el caso pasara al get user pasándole en el request el email.
// Con el email  debemos devolver la información del usuario en nuestra ruta Get user o borrar al usuario en el DELETE.

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Lisent at port ${port}`)
})

// Mongodb Atlas
// Crear una colección usuario en monbodb utilizando el cloud de mongodb que tenga los siguientes datos (nombre, edad (number), pais, password y tarjetas de crédito (Array de strings con solo el número de tarjeta).
//  Meter 10 documentos que representan a un usuario en BBDD (es decir crear dos usuarios en
// la BBDD a mano). Para generar tarjetas de crédito usar (https://www.prepostseo.com/tool/credit-card-generator)
// Mediante queries filtra a los usuarios cuya edad sea mayor de 15 años.
// Mediante queries filtra a los usuarios cuyo pais sea españa, portugal o italia.
// Filtra todos los documentos que la edad sea 20 o el pais sea españa.
// Filtra todos los documentos que la edad del usuario sea 20 y el pais sea españa.
// Filtra todos los documentos donde el pais no sea esapaña.
