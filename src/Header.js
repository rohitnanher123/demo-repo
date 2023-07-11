import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Contactus">Contatus</Nav.Link>
            <Nav.Link href="/ListEmployee">ListEmployee</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      );
}

export default Header;