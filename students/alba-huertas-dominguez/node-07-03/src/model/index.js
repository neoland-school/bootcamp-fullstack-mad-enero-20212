
import {writeFile} from 'fs/promises';
import { readFileSync } from 'fs';

export const ModelDemo = (usuario)=> {


    let user={
        email:usuario.email,
        password:usuario.password,
        username:usuario.username    
        
        }
    const data = readFileSync('./user.json', { encoding: 'utf-8' });
    const obj= JSON.parse(data);
    obj.push(user)
          
    writeFile('./user.json',JSON.stringify(obj), ()=>{});
                // console.log(user)
              
    

    // const hello= 'hello world model' // el model se encarga de decir que es lo que quieres hacer en realidad
    
}