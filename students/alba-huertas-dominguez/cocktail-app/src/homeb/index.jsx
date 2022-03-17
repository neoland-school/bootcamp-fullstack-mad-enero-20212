import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button,ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThemingSelector from '../components/themingselector';



function HomeB(){



    return(
        <div>
          <button className='btn--primary'>boton theming</button>
          <ThemingSelector></ThemingSelector>
    
          <Link to ='bebidas'>BEBIDAS</Link>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Minibar" id="collasible-nav-dropdown">
      <Link to='bebidas'>bebidas</Link>
        <NavDropdown.Divider />
        <Link to='/zumos'>zumos</Link>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
     
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  />
  <Form.Check 
    disabled
    type="switch"
    label="disabled switch"
    id="disabled-custom-switch"
  />
</Form>
  </Container>
</Navbar>



<Container>
  <Row>
    <Col xs >column 1</Col>
    <Col xs>column 2</Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col xxl >column 1</Col>
    <Container>
  <Row>
    <Col xxl >column 2</Col>

    </Row>
    <Row>
    <Col xs>column 3</Col>
  </Row>
</Container>
    <Col xs>column 4</Col>
  </Row>
</Container>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>




    )






}


export default HomeB