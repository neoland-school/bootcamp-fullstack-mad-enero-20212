import express from 'express';
import { middleware } from '../middleware/index.middleware.js';

const router = express.Router();

// router.route('/')
//     .get(middleware, (req, res) => {
//         res.send('hola router')
//     })

// export default router;

router.route('/login')
    .post(getDemoCtrl)


export default router;