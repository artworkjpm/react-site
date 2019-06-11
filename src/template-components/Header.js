import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        JPM Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link href="#link1">React</Nav.Link>
          <Nav.Link href="#link2">Vue</Nav.Link>
          <Nav.Link href="#link3">Angular</Nav.Link>
          <Nav.Link href="#link4">Web Dev</Nav.Link>
          <Nav.Link href="#link5">UX</Nav.Link>
          <Nav.Link href="#link6">CRM</Nav.Link>
          <Nav.Link href="#link7">Graphic Design</Nav.Link>
          <NavDropdown title="Contact me" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Email Form</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Skype</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
