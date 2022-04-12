// poner el type module
// instalar express. npm i express.
//importar express

import express from "express";
import{accesSync, constants, readFileSync,writeFile,writeFileSync} from 'fs';




const app = express();
app.use=(express.json())
const port = 4000;
const FILE_PATH= '/data/users.json';
try{
    accesSync(FILE_PATH, constants.R_OK | constants.W_OK)

} catch(error){
    console.info('no tenemos acceso al archivo',err);
    writeFileSync(FILE_PATH,'[]')


}
const users =readFileSync(FILE_PATH);

app.get('/users',(req,res)=>res.json(users));
app.get('users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find(u => u.id ===  id);
    if(user !== undefined) res.json(user);
    else res.sendStatus(404);

} )


app.post('/users', (req,res)=>{
    const {email} = req.body;
    if(user.some(u => u.email === email)){
        res.status(409).json({error:'el usuario ya existe'});
    }else{
        const id =uuidv4();
        users.push({
            id,
            ...req.body

        });
        writeFile(FILE_PATH,JSON.stringify(users));
        res.status(201).json(users)



    }





})




app.listen(port, ()=> console.log(`servidor levantado en el puerto ${port}`))
