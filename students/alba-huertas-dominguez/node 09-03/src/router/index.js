import express from "express";

import { bookCtrl } from "../controller/index.js";
import { BooksByIdCtrl } from "../controller/index.js";
import { bookpCtrl } from "../controller/index.js";
import { bookdeleteCtrl } from "../controller/index.js";


const router = express.Router();


// router.route('/')
// .get((req,res)=> {


//     res.send('hola')
// }) esto es un get normal
// router.route('/:id')
//     .get(BooksByIdCtrl)




router.route('/books') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(bookpCtrl)
    .get(bookCtrl)
    
router.route('/books/:isbn') 
.get(BooksByIdCtrl)// coger por id
.delete(bookdeleteCtrl) // borrar

export default router;








// GET /books: Obtiene todos los libros de la BBDD
// POST /books: Crea un libro en nuestro sistema
// GET /books/:isbn : Devuelve un libro concreto
// DELETE /books/:isbn: Borra un libro de la BBDD

