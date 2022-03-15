import {writeFile} from 'fs/promises'
import { readFileSync } from 'fs';

export const signupModel = (users)=>{
    const user ={
        email: users.email,
        password: users.password
    }
    const nameJson = readFileSync('./products.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    obj.push(user)
    writeFile('./users.json',JSON.stringify(obj),()=>{})
}

export const loginModel = (u)=>{
    console.log(`su usuario es ${u}`)
}
