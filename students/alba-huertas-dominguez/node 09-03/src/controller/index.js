// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta

// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta
import {createBook, retrieveBooks,retrieveBooksById,retrievedeleteById} from '../model/index.js'



export const bookCtrl  = async(req, res) => {
    // este controlador debe consultar en el modelo los vuelos y devolverlos al usuario
    const books = await retrieveBooks();
    res.json(books);
};

export const BooksByIdCtrl = async (req, res) => {
    const  {isbn} = req.params;
    const book = await retrieveBooksById(isbn);
    if(book !== undefined) res.json(book);
    else res.sendStatus(404);
}


export const bookpCtrl=(req,res) => {
    const books = createBook(req.body);
    res.json(books)
    
}

export const bookdeleteCtrl= async(req,res)=> {
    const  {isbn} = req.params;
    const book = await retrievedeleteById(isbn);
    if(book !== undefined) res.json(book);
    else res.sendStatus(404);
}

