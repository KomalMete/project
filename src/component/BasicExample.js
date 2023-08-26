import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="justify-content-end" bg="light" data-bs-theme="light">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Employee
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patient</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;