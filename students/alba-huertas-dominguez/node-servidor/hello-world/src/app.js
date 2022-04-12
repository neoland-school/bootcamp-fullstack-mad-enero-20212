import express from 'express';
import process from 'process';
import { readFileSync, writeFile } from 'fs';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import { rm } from 'fs';
import cors from 'cors'


 // creamos la app
// let params = process.argv[2]
// app.get('/', (req, res) => {
//     res.send('Hello World express!')
//     res.send('Hello World express!')
//   })
// Crear un método GET en el path '/products' que devuelva la lista de productos existente.



//   app.listen(params? params: port, () => {
//     // console.log(`Example app listening on port${params}`)
//   })

// para metodo post, leer y guardar la informacion (la informacion esta en el body (req.body))



    // app.listen(params? params: port, () => {
       
    //   })


const app = express();
const port =  4000 // definimos el puerto
app.use(express.json());
  app.use(cors());


  
  app.listen(port, () => {
    console.log(`app listening on port${port}`)
  })


  app.get('/', (req, res) => {
    const data = readFileSync('./users.json', { encoding: 'utf-8' });
    const obj= JSON.parse(data);
    res.send(obj)
    
  })
  

     
   
      app.post('/', (req, res) => {
       const id=  uuidv4();
       
       
          const user = {
              name:req.body.name,
              lastname: req.body.lastname,
              username: req.body.username,
              id: id,
              country:req.body.country,
              img:req.body.img,
              email:req.body.email
              
              



          }
          console.log(req.body)
        const data = readFileSync('./users.json', { encoding: 'utf-8' }); 
        const obj= JSON.parse(data);
        obj.push(user);
        writeFile('./users.json',JSON.stringify(obj), ()=>{});
        // console.log(user)
        res.send(obj)
      
      })

     

//TRAER EL ID//

app.get('/products/:id', (req, res) => {
    const data =readFileSync('./products.json', { encoding: 'utf-8' });
    const obj= JSON.parse(data);
   const m = obj.filter( v => v.id === req.params.id)
 
  res.send(m? m:'error 404')
})


// Crear un endpoint DELETE con path params para los productos (/products/:id). 
// Este endpoint deberá eliminar el objeto de la lista de productos del producto que tenga el id o 404 si no existe el producto.

app.delete('/products/:id', (req, res) => {
  const data =readFileSync('./products.json', { encoding: 'utf-8' });
  const obj= JSON.parse(data);
 const m = obj.filter( v => v.id !== req.params.id);
 writeFile('./products.json',JSON.stringify(m),()=>{});
 console.log(m)
 res.send('borrado')
})


// Crear un endpoint PATCH con path params para los productos (/products/:id).
//  Este endpoint recuperará del body la información parcial que se quiere editar, buscará el producto en la lista y modificará las cosas que hayan 
// cambiado del producto que tenga el id o 404 si no existe el producto.

app.patch('/products/:id', function (req, res) {
  const products = readFileSync('./products.json',{encoding: 'utf8'});
  const arrProducts= JSON.parse(products);
  const someProduct = arrProducts.some(c => c.id===req.params.id);

  if (someProduct){
      const product ={
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          id: req.params.id
      }
      const filteredProducts = arrProducts.filter(c => c.id!==req.params.id);
      filteredProducts.push(product)
  
      writeFile('./products.json',JSON.stringify(filteredProducts),()=>{});
      res.send('Got a DELETE request at /user');
  }else{
      res.send(404)
  }
 
});
