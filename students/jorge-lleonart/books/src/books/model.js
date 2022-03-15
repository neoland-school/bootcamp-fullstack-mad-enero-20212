import { MongoClient } from 'mongodb'

const URI = 'mongodb+srv://jkoki91:8rXYq9Xp4cQKTEv@cluster0.9lhpi.mongodb.net/library?retryWrites=true&w=majority';
const DB_NAME = 'library';
const COLLECTION_NAME = 'library-collection';
const client = new MongoClient(URI);

export const postBooksModel = async (book) => {
    try{
        await client.connect();
        const db = client.db(DB_NAME);
        const booksCol = db.collection(COLLECTION_NAME);
        await booksCol.insertOne(book);
    }catch(err){
        console.error('Retrieve Flight By id error: ', err);
    }finally {
        await client.close(); 
    }
}

export const getBooksModel = async () => {
    try{
        await client.connect();
        const db = client.db(DB_NAME); 
        const booksCol = db.collection(COLLECTION_NAME);
        const opt = {
            projection: { _id:0 }
        }
        const books = await booksCol.find({}, opt).toArray();
        return books;
    }catch(err){
        console.error('Retrieve books error: ', err);
    }finally {
        await client.close(); 
    }
};

export const getBooksModelByIsbn = async (isbn) => {
    try{
        await client.connect();
        const db = client.db(DB_NAME);
        const booksCol = db.collection(COLLECTION_NAME);
        const query = { ISBN:isbn };
        const f = await booksCol.findOne(query); 
        return f ?? undefined;
    }catch(err){
        console.error('Retrieve Flight By id error: ', err);
    }finally {
        await client.close();
    }
}

export const deleteBooksModelByIsbn = async isbn => {
    try{
        await client.connect();
        const db = client.db(DB_NAME);
        const booksCol = db.collection(COLLECTION_NAME);
        const query = { ISBN:isbn };
        const f = await booksCol.deleteOne(query); 
        return f ?? undefined;
    }catch(err){
        console.error('Retrieve Flight By id error: ', err);
    }finally {
        await client.close();
    }
}