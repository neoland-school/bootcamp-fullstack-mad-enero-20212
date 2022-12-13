import express from 'express';
import middleware from '../middleware/middleware.js';
import { signup, login } from '../controller/controller.js';
import middlewareLogin from '../middleware/middleware.js';

const router = express.Router();
// router.use(middleware)
router.route('/') 
    .get(middleware,(req,res)=>{
        res.send('hola ruter')
    })

router.route('/signup')
    .post(signup)

router.route('/login') 
    .post(middlewareLogin,login)

// router.route('/user') 
//     .get(user)

// router.route('/user') 
//     .delete(rmUser)

export default router;