import express from 'express';
import cors from 'cors';
import router from './da.book/book.router.js';

/**
 * Vamos a construir una app de libros. Para ello vamos a construir un API en expressJS con persistencia en Mongodb. Nuestra app express tendrá la siguiente entidad books  en una BBDD que creemos llamada library .
Un libro constará de los siguientes atributos:
ISBN: número que identifica en el mundo a un libro
title: string título del libro
author: string autor del libro
publisher: string con la editorial que publica el libro
rating: number del 1-5 con la valoración
description: string con una pequeña descripción del libro
price: double con el precio del libro
img: string url de la imagen del  libro
Debemos construir los siguientes endpoints:
GET /books: Obtiene todos los libros de la BBDD
POST /books: Crea un libro en nuestro sistema
GET /books/:isbn : Devuelve un libro concreto
DELETE /books/:isbn: Borra un libro de la BBDD
Una vez que tenemos nuestro backend y probado con postman, vamos a construir una interfaz para para usarlo. Para ello construiremos una app en react con lo siguientes diseños:
Cuando haga click en un libro iremos al detalle donde podremos ver todos los detalles del libro.
La imagen de los libros de momento la podemos tener en una carpeta img dentro de la carpeta public de react.
 */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const port = process.env.PORT || 4000;



app.use('/books', router); // asocio el router de los vuelos al app



app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));