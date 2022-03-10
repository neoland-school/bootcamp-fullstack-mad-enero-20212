import express from 'express';
import { getBooksCtrl, postBooksCtrl, putBooksCtrl } from './book.controller.js';
// l, deletetBooksCtrl lo mismo k en el controller


const router = express.Router();


router.route('/')
    .get(getBooksCtrl)
    .post(postBooksCtrl)
    .put(putBooksCtrl)
// .delete(deletetBooksCtrl)

export default router;

