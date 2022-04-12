import express from "express";
import cors from 'cors';
import router from "./router/index.js";


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

const port = process.env.PORT || 4000;
app.use('/',router)


app.listen(port, ()=> console.log(`levantemos el servidor... ${port}.. lo tenemos levantado hacia el señor`))