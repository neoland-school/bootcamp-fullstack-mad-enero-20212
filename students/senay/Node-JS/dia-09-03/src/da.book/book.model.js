import { MongoClient } from 'mongodb';
// import { writeFile } from 'fs/promises';
// import { readFileSync } from 'fs';

const URI = 'mongodb+srv://ddr400:ddr400@cluster0.vjygb.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'booksDB';
const COLLECTION_NAME = 'book';
const COLLECTION_NAME2 = 'library';
const client = new MongoClient(URI);

export const retrieveBook = async () => {
    try {
        await client.connect();
        const db = client.db(DB_NAME)
        const bookCollection = db.collection(COLLECTION_NAME)
        // await bookCollection.insertOne(book);
    } catch (err) {
        console.log.error('Retrieve book error:', err);
    } finally {
        await client.close()
    }
}

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