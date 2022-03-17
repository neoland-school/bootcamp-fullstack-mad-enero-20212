import express from "express";
import cors from 'cors' ;
import { getDemoCtrl } from "../controller/index.js"; //se encarga de definir la ruta y los metodos a utilizar
import middlerware from "../middleware/index.js";

//  const router = express.Router();

//  router.route('/')
//  .get(middlerware,(req,res)=>{
//  req.send('hola router')
 
// }
//  )


//  export default router



const router = express.Router();
router.route('/login')
.post(getDemoCtrl)

export default router
