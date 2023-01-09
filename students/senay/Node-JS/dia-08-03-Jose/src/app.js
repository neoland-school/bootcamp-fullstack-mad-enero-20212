import express from 'express';
import router from './roter/index.router.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const port = process.env.PORT || 4000;


app.use('/', router) // todo lo k empieza por /, voy al directorio/carpeta/archivo router


app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));

/**
 * Vamos a crear un CRUD con arquitectura MVC para probarlo usaremos POSTMAN.
Nuestra api tendrá   tres endpoints  "/signup" de tipo POST, "/login" de tipo POST y  
/user de tipo Get y delete .
Nuestra api tendrá un endpoint de tipo POST  para registro el cual recibirá un body con un email 
y un password (enviarlo desde POSTMAN) la cual deberá guardarlo en nuestra base de datos (fichero), 
para esto debemos tener nuestra MVC, una ruta un controller y un model.
Debemos tener un middleware  de ruta que nos compruebe si nuestro usuario ya ha sido registrado
previamente, de ser el caso deberá enviarnos un status 400 y un error.
Nuestra api tendrá un endpoint de tipo Post para el login el cual va a recibir en el body el 
email y el password, esta tendrá un middleware de ruta y deberá validar que el usuario y la 
password existan y coincidan, de ser el caso pasara al get user pasándole en el request el email.
Con el email  debemos devolver la información del usuario en nuestra ruta Get user o borrar al 
usuario en el DELETE.

 */