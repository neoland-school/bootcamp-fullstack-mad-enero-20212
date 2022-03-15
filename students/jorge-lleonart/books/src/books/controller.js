import {postBooksModel, getBooksModel,deleteBooksModelByIsbn,getBooksModelByIsbn} from './model.js'


export const postBooksCtrl = async (req, res) => {
    const books = await postBooksModel(req.body);
    console.log(req.body)
    res.json(books);
};

export const getBooksCtrl = async (req, res) => {
    const books = await getBooksModel();
    res.json(books);
};

export const getBooksCtrlByIsbn = async (req, res) => {
    const  {isbn} = req.params;
    const books = await getBooksModelByIsbn(isbn);
    if(books !== undefined) res.json(books);
    else res.sendStatus(404);
};

export const deleteBooksCtrlByIsbn = async (req, res) => {
    const  {isbn} = req.params;
    const books = await deleteBooksModelByIsbn(isbn);
    if(books !== undefined) res.json(books);
    else res.sendStatus(404);
};