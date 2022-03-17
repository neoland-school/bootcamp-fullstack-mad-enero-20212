import express from 'express';
import process from 'process';
import { accessSync, fstat, mkdirSync, readFileSync, writeFile, writeFileSync } from 'fs';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import res from 'express/lib/response';
import { constants } from 'buffer';


// chmod ( sirve para cambiar los persmisos de un archivo, se le tiene que pasar el nombre del archivo y el numero en base octogenal Oo y luego el valor del  los 3 numeros )


const app = express();
const port = 4000;
app.use (express.json()); // esto procesa el body en formato jsson y asi lo puedo levantar.
const file= '/products' // para cuando tengamos que poner la ruta no tengamos que estar todo el rato la ruta. (EL PATH)

   // esto es para crear un archivo en caso de que no exista ya,

   try{
       accessSync(file, constants.R_OK | constants.W_OK); // aqui te esta comprobando si existe o no, si no existe daria error (el catch y te crearia nuevo). ademas tambien gestiona los permisos, en este caso si a escritura y lectura
   }
       catch(err){

    mkdirSync('data');
    writeFileSync(file,'[]')
}



app.get('/products',async (req, res) => {
    try{

        const products = await fs.readfile(file, {encodig:'utf8'}) // siempre ponerle codigo, si no te devuelve en buffer.
        res.json(JSON.parse(products)); // la tengo que parsear la respuesta, para que este en formato json, que si no sera en formato string
     

    } catch(err){
        console.err(err);
        res.status(500).json({'error':'Fallo interno con los datos del backend'}) // para gestionar el error, en vez de dejar colgado el error, se explica el error al usuario.

    }

})


app.post('/products',async (req, res) => {
  
if( typeof req.body.price !=='number' ){
res.status(400).json({error:'el precio debe ser un numero'});

}else{

        const products = await fs.readfile(file)
        const id =uuidv4 ();
        const product = {
            ...req.body,
            id
        }

        products.push(product);
     
        await fs.writeFile(file,JSON.stringify(products));
        res.json(product);
  

    }

})


app.listen(params? params: port, () => {
       
}) //  comprobarlo por con lo de alex 
