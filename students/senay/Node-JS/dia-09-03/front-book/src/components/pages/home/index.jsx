import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Cards from '../../card'
import './style.css';

function Home() {

    const [books, updateBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then(r => r.json())
            .then(data => updateBooks(data))
        console.log(books)
    }, []);




    return (
        <section className="containerHome">
            <h2 className="text-center">Best Seller Books</h2>
            <Container className="d-flex justify-content-around">
                {books.length === 0 ? <h2>cargando</h2> : books.map((a, i) => {
                    return <Cards book={a} key={i}></Cards>
                }
                )}
            </Container>
        </section>


        // <section className='anime__container'>
        //     {books.map((a, i) => (
        //         <div className='anime__item' key={i}>
        //             <img src={a.image} alt={`Imagen de anime de ${a.title}`}></img>
        //             <h3>{a.title}</h3>
        //             <Rank rank={a.rank}></Rank>
        //         </div>
        //     ))}
        // </section>
    );
}

export default Home;