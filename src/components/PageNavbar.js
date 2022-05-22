import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';

const PageNavbar = (chart) => {
  return (
    <>
    <Container>
      <Navbar bg="./index.html" expand="lg">
        <Navbar.Brand href="#home"><img src="./chickenLogo250.png" className='navbarLogo' alt='Logo Pollos'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">MENÚ</Nav.Link>
            <Nav.Link href="#link">PROMOCIONES</Nav.Link>
            <NavDropdown title="LOCALES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Puente Alto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">San Bernando</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Santiago</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">QUIÉNES SOMOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CartWidget />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    <hr/>
    <br/>
    </>
  );
}

export default PageNavbar;