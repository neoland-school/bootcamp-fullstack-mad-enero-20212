// import React, { useEffect, useState } from "react";
// import Cards from "../../components/card";
// import { Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";


// function Details () {
//     const [books, updateBooks] = useState()
//     console.log(books)
//     const { isbn } = useParams();


//     useEffect(() => {
//         fetch(`http://localhost:4000/libros/books/${isbn}`)
//             .then(r => r.json())
//             .then(data => updateBooks(data))
//     })


//     return (
//         <section className="containerHome">
//             <h2 className="text-center">Best Seller Books</h2>
//             <Container className="d-flex p-100 justify-content-around col-example">
//                 {books.length === 0 ? <h2>cargando</h2> : books.map((a, i) => {
//                     return <Cards book={a} key={i}></Cards>
//                 }
//                 )}
//             </Container>
//         </section>
//     )
// }

// export default Details;








// import React, { useEffect, useState } from "react";
// import Cards from "../../components/card";
// import { Container } from "react-bootstrap";


// function Details() {
//     const [books, updateBooks] = useState([])
//     console.log(books[0])

//     useEffect(() => {
//         fetch(`httP://localhost:4000/libros/books/${isbn}`)
//             .then(r => r.json())
//             .then(data => updateBooks(data))
//     }, [])


//     return (
//         <section className="containerHome">
//             <h2 className="text-center">Best Seller Books</h2>
//             <Container className="d-flex p-100 justify-content-around col-example">
//                 {books.length === 0 ? <h2>cargando</h2> : books.map((a, i) => {
//                     return <Cards book={a} key={i}></Cards>
//                 }
//                 )}
//             </Container>
//         </section>
//     )
// }

// export default Details;
