import express from 'express';
import { getBooksCtrl, postBooksCtrl, getABooksCtrl, deleteBookCtrl } from './book.controller.js';
// l, deletetBooksCtrl lo mismo k en el controller


const router = express.Router();


router.route('/')
    .get(getBooksCtrl)
    .post(postBooksCtrl)



router.route('/:isbn')
    .get(getABooksCtrl)
    .delete(deleteBookCtrl)

export default router;

