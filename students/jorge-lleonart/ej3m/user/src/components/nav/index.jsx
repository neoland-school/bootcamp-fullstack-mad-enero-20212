import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';



function NavigateBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/form">Login</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigateBar;