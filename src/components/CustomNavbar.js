// src/components/CustomNavbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="#home"> Family Generation </Navbar.Brand>

        {/* Center-aligned navigation links */}
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Family</Nav.Link>
        </Nav>

        {/* Login and Sign Up buttons on the right */}
        <Nav>
          <Button variant="outline-info" className="mr-2">Login</Button>
          <Button variant="info">Sign Up</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
