import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">MiAppDeContactos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Button variant="primary" href="/agregar" className="nav-button">Agregar Contacto</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;