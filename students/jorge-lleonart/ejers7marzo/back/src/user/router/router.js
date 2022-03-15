import express from 'express';
import {helloWorld} from '../controller/controller.js'

const router = express.Router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .get(helloWorld)
    // .get((req,res)=>{
    //     res.send('hola mundo')
    // })

export default router;