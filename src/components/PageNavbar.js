import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const PageNavbar = () => {
  return (
    <>
    <Container>
      <Navbar bg="./index.html" expand="lg">
        <Navbar.Brand href="#home"><LinkContainer to="/"><img src="https://github.com/Japahuep/finalProject/blob/main/media/images/circle-icon.png?raw=true" className='navbarLogo' alt='Logo Pollos'/></LinkContainer></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/category/chicken"}>Pollos Asados</Nav.Link>
            <Nav.Link as={NavLink} to={"/category/as"}>As</Nav.Link>
            <Nav.Link as={NavLink} to={"/category/fried"}>Fritangas</Nav.Link>
            <Nav.Link as={NavLink} to={"/category/burger"}>Hamburguesas</Nav.Link>
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