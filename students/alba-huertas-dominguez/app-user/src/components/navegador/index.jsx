
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom";


function Navegador(){



return(

<Nav className="navegador"
  activeKey="/home"
>
  <Nav.Item>
    <Link to="/">Home</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/card">Cards</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/formulario">Formulario</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/">
    </Link>
  </Nav.Item>
</Nav>
)}

export default Navegador;