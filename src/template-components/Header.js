import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" href="#home">
        JPM Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" href="#about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/react" href="#react">
            React
          </Nav.Link>
          <Nav.Link as={Link} to="/vue" href="#vue">
            Vue
          </Nav.Link>
          <Nav.Link as={Link} to="/angular" href="#home">
            Angular
          </Nav.Link>
          <Nav.Link as={Link} to="/webdev" href="#webdev">
            Web Dev
          </Nav.Link>
          <Nav.Link as={Link} to="/ux" href="#ux">
            UX
          </Nav.Link>
          <Nav.Link as={Link} to="/crm" href="#crm">
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
            <NavDropdown.Item as={Link} to="/testing/buttons" href="#buttonsx">
              Buttons
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Contact me" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/emailme" href="#emailme">
              Email/Skype/Telephone
            </NavDropdown.Item>
            <NavDropdown.Item
              href="http://journeyofjpm.blogspot.com/"
              target="_blank"
            >
              My blog
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://www.linkedin.com/in/artworkjpm/"
              target="_blank"
            >
              LinkedIn Profile
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
