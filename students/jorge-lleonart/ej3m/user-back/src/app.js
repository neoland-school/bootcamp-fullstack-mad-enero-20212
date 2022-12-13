//Para crear un servidor lo primero: npm init, luego instalar el express

import express from 'express';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import {writeFile} from 'fs/promises';
import { readFileSync } from 'fs';

const app = express() //
const port = 4000 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({name:'Jorge'})
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    const nameJson = readFileSync('./users.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    res.json(obj)
})

app.post('/users',(req, res)=>{
    const id = uuidv4()
    const user ={
        name: req.body.name,
        userName: req.body.userName,
        country: req.body.country,
        image: req.body.image,
        id: id
    }
    const nameJson = readFileSync('./users.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    obj.push(user)
    writeFile('./users.json',JSON.stringify(obj),()=>{})
    res.send(obj)
})

app.listen(port, ()=>{
    console.log(`Lisent at port ${port}`)
})