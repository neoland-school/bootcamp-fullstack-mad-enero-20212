import { MongoClient } from 'mongodb'

const uri ='mongodb+srv://Albahd:70584909w@cluster0.9jg02.mongodb.net/library?retryWrites=true&w=majority'


// Create a new MongoClient
const client = new MongoClient(uri);
const DB_NAME = 'library';
const COLLECTION_NAME = 'books';

export const retrieveBooks = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
    
        // a partir de aqui ya puedo hacer operaciones con la collection
        const books = await booksCol.find({}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        console.log(books)
        return books;
    }catch(err){
        console.error('ni libro ni libra: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};

export const retrieveBooksById = async ISBN => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        const query = {ISBN:ISBN};
        // a partir de aqui ya puedo hacer operaciones con la collection
        const f = await booksCol.findOne(query);// paso 9 
        return f ?? undefined;
    }catch(err){
        console.error('ni libro ni libra, pero por id: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const createBook = async (book) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
        await booksCol.insertOne(book);// paso 9 
    }catch(err){
        console.error('ni libro ni libra', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const retrievedeleteById = async ISBN => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        const query = {ISBN:ISBN};
        // a partir de aqui ya puedo hacer operaciones con la collection
        const f = await booksCol.deleteOne(query);// paso 9 
        return f ?? undefined;
    }catch(err){
        console.error('ni libro ni libra, pero por id: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}