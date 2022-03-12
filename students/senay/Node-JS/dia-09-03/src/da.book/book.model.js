import { MongoClient } from 'mongodb';
// import { writeFile } from 'fs/promises';
// import { readFileSync } from 'fs';

const URI = 'mongodb+srv://ddr400:ddr400@cluster0.vjygb.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'booksDB';
const COLLECTION_NAME = 'book';
const client = new MongoClient(URI);

export const retrieveBook = async (isbn) => {
    try {
        await client.connect();
        const db = client.db(DB_NAME)
        const bookCollection = db.collection(COLLECTION_NAME)
        const query = { ISBN: isbn }
        return await bookCollection.findOne(query)
        // await bookCollection.insertOne(book);
    } catch (err) {
        console.log('Retrieve book error:', err);
        // console.log.error('Retrieve book error:', err); console.log.error is not a function
    } finally {
        await client.close()
    }
}


export const retrieveBooks = async () => {
    try {
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const bookCollection = db.collection(COLLECTION_NAME); // paso 8

        // a partir de aqui ya puedo hacer operaciones con la collection
        const libros = await bookCollection.find().toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        return libros;
    } catch (err) {
        console.error('Error al encontrar la lista de libros ', err);
    } finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};









export const postBook = async (book) => {
    try {
        await client.connect();
        const db = client.db(DB_NAME)
        const bookCollection = db.collection(COLLECTION_NAME)
        await bookCollection.insertOne(book);
    } catch (err) {
        console.log.error('Create book error:', err);
    } finally {
        await client.close()
    }
}
//--------------------------------- DELETE
export const deleteBook = async (isbn) => {
    try {
        await client.connect();
        const db = client.db(DB_NAME)
        const bookCollection = db.collection(COLLECTION_NAME)
        const query = { ISBN: isbn }
        return await bookCollection.deleteOne(query)
        // await bookCollection.insertOne(book);
    } catch (err) {
        console.log('Retrieve book error:', err);
        // console.log.error('Retrieve book error:', err); console.log.error is not a function
    } finally {
        await client.close()
    }
}




// export const retrieveBook = (usuario) => {
//     const user = {
//         ISBN: usuario.ISBN,
//         title: usuario.title,
//         author: usuario.author,
//         publisher: usuario.publisher,
//         rating: usuario.rating,
//         description: usuario.description,
//         price: usuario.price,
//         img: usuario.img
//     }

//     const data = readFileSync('.user.json', { encoding: 'utf-8' });
//     const obj = JSON.parse(data);
//     obj.push(user)

//     writeFile('./users.json', JSON.stringify(obj), () => { })
// }

/**
 * 
{
    "ISBN":"9781234567897",
    "title":"El libro de DDBB",
    "autor":"Yo",
    "publisher":"ECMA",
    "rating":2,
    "description":"El bosque de Mordor",
    "price":339,
    "img":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRU..."
}
 */