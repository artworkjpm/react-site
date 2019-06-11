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
          <Nav.Link as={Link} to="/react">
            React
          </Nav.Link>
          <Nav.Link as={Link} to="/vue">
            Vue
          </Nav.Link>
          <Nav.Link as={Link} to="/angular">
            Angular
          </Nav.Link>
          <Nav.Link as={Link} to="webdev">
            Web Dev
          </Nav.Link>
          <Nav.Link as={Link} to="ux">
            UX
          </Nav.Link>
          <Nav.Link as={Link} to="crm">
            CRM
          </Nav.Link>
          <Nav.Link as={Link} to="graphic">
            Graphic Design
          </Nav.Link>
          <NavDropdown title="Contact me" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/linkedin">
              LinkedIn
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="emailme">
              Email Form
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="skypeme">
              Skype
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
