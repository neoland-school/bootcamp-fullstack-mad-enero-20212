import { retrieveBook, postBook, deleteBook, retrieveBooks } from './book.model.js';
//, createBook, setBook, deleteBook  añadir desp de crear las ()


// export const getBooksCtrl = asyns (req, res) => {
//     res.json({ Hello: ' GET Recieved' });
// };
export const getBooksCtrl = async (req, res) => {
    const books = await retrieveBooks();
    res.json(books);
};


export const postBooksCtrl = async (req, res) => {
    const books = await postBook(req.body);
    console.log(req.body)
    res.json(books);
};

export const getABooksCtrl = async (req, res) => {
    const isbn = req.params.isbn;
    const book = await retrieveBook(isbn);
    if (book !== null) res.json(book);
    else res.sendStatus(404);
}

export const deleteBookCtrl = async (req, res) => {
    const isbn = req.params.isbn;
    const book = await deleteBook(isbn);
    if (book !== null) res.json(book);
    else res.sendStatus(404);
}


// app.get('/hello', (req, res) => {
//     // esta función se va a ejecutar cada vez que un cliente llame por GET a la URL  '/hello'
//     // res.send(JSON.stringify({hola: 'mundo'}));
//     res.json({ hola: 'mundo' });
// });