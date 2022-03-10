import { retrieveBook, postBook } from './book.model.js';
//, createBook, setBook, deleteBook  añadir desp de crear las ()


export const getBooksCtrl = (req, res) => {
    // esta función se va a ejecutar cada vez que un cliente llame por GET a la URL  '/hello'
    // res.send(JSON.stringify({hola: 'mundo'}));
    res.json({ Hello: ' GET Recieved' });
};

export const postBooksCtrl = async (req, res) => {
    const books = await postBook(req.body);
    console.log(req.body)
    res.json(books);
};

export const putBooksCtrl = async (req, res) => {

}

// app.get('/hello', (req, res) => {
//     // esta función se va a ejecutar cada vez que un cliente llame por GET a la URL  '/hello'
//     // res.send(JSON.stringify({hola: 'mundo'}));
//     res.json({ hola: 'mundo' });
// });