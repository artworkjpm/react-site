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
          <Nav.Link as={Link} to="/webdev">
            Web Dev
          </Nav.Link>
          <Nav.Link as={Link} to="/ux">
            UX
          </Nav.Link>
          <Nav.Link as={Link} to="/crm">
            CRM
          </Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/1hZ5_CVsc8YF02QJXNB5F3MwLCZE0p-8n/view"
            target="_blank"
          >
            Graphic Design
          </Nav.Link>
          <Nav.Link
            href="https://github.com/artworkjpm/react-site"
            target="_blank"
          >
            <img
              src="images/main/GitHub-Mark-Light-32px.png"
              alt="github"
              width="22"
              className="mr-1"
            />
            Repo
          </Nav.Link>
          <NavDropdown title="Testing" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/testing/buttons">
              Buttons
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Contact me" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/linkedin">
              LinkedIn
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/emailme">
              Email Form
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/skypeme">
              Skype
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
