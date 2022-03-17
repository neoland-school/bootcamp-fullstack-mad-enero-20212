import express from "express";
import cors from 'cors';
import router from "./src/router/index.js";
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

const port = process.env.PORT || 4000;



// let midlware = (req,res,next) => {
// console.log(req.ip);
// console.log('LOGGED');
// next();
// };

// app.use(midlware)

// app.get('/', (req, res) =>{
//     res.send('hi,gente');
//   });

//   app.get('/', (req, res) =>{
//     res.send('bye');
//   });





// let midlewareValidateEmail = (req,res,next)=>{
//     const email= req.body.email;
//     if(validator.validate(email)){
//         console.log('VALIDATED'); 
//         res.status(201);  
//         next();     
//     }else {
//         console.log('NOT VALID');
//         res.status(400).send('NOT VALID');
        
//     }
// }
// app.post('/validate',midlewareValidateEmail= (req,res)=>{
//     res.send('email post done');
// })

app.use('/',router)



app.listen(port, ()=> console.log(`servidor levantado en el puerto ${port}`))

