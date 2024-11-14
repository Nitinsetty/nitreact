import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg='black' expand="lg" style={{ color: 'white' }}>
      <Navbar.Brand href="#" style={{ color: 'white' }}>MyStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item href="#mobile" style={{ color: 'black' }}>Mobile</NavDropdown.Item>
            <NavDropdown.Item href="#laptop" style={{ color: 'black' }}>Laptop</NavDropdown.Item>
            <NavDropdown.Item href="#tablet" style={{ color: 'black' }}>Tablet</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#cart" style={{ color: 'white' }}>
            <FaShoppingCart /> Cart
          </Nav.Link>
          <Nav.Link href="#profile" style={{ color: 'white' }}>
            <FaUser /> Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
