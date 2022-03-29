import logo from ".././logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function Navbar() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="buttom" expand="sm">
        <Navbar.Brand>
          <img src={logo} alt="Logo" width="40px" height="40px" />
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#createPost">Crear post</Nav.Link>
            <Nav.Link href="#neighborhoodCenter">Mi centro vecinal</Nav.Link>
            <Nav.Link href="#viewProfile">Ver perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">This is a content.</div>
    </div>
  );
}

export default Navbar;