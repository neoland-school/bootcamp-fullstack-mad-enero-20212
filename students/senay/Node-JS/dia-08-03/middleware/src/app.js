import express from 'express';



/**
 * Crear un middleware que imprima la ip de la petición y continúe al siguiente middleware.
 *  Asociar el middleware a toda la APP. Crear dos rutas get sin MVC. Una que devuelva 'hello' y 
 * otra que devuelva 'goodbye'. Verificar que llamando a una o llamando a la otra se registra la ip de 
 * la petición.
 */

const app = express();
const port = process.env.PORT || 4000;

let middleExample = (req, res, next) => {
    console.log(req.ip)
    console.log('Pintando el IP')
    next();
}

app.use(middleExample);

app.get('/hello', (req, res) => {
    res.send('hello')
})

app.get('/goodbye', (req, res) => {
    res.send('goodbye')
})






app.listen(port, () => {
    console.log(`El servidor escuchando el puerto ${port}`)
})


