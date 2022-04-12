import express from 'express';
import {postBooksCtrl, getBooksCtrl,getBooksCtrlByIsbn,deleteBooksCtrlByIsbn} from './controller.js'

const router = express.Router();

router.route('/') 
    .get(getBooksCtrl)
    .post(postBooksCtrl)

router.route('/:isbn')
    .get(getBooksCtrlByIsbn)
    .delete(deleteBooksCtrlByIsbn)


export default router;