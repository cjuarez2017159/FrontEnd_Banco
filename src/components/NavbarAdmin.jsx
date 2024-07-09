import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Bank Sternenfall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item className="navbar-text text-center">
              <span>Administrador</span>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown 
              title="☰" 
              id="basic-nav-dropdown" 
              align="end" /* Alinea el botón a la derecha */
              menuVariant="dark" /* Estilo del menú desplegable */
              className="dropdown-menu-left" /* Clase personalizada para alinear el menú a la izquierda */
            >
              <NavDropdown.Item href="#history">Historial</NavDropdown.Item>
              <NavDropdown.Item href="#account">Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#favorites">Favoritos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
