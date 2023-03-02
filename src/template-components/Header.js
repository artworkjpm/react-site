import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAnalytics } from "../context/analyticsContext";

const Header = () => {
	const { rum } = useAnalytics();
	console.log(rum);
	const recordClickEvent = (nameOfElement) => {
		console.log(`click event ${nameOfElement}`);
		rum.recordEvent(nameOfElement, {
			user_interaction: {
				interaction: "click",
			},
		});
	};

	return (
		<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
			<Nav>
				<Nav.Link navbar-collapse="true" as={Link} to="/" href="#home" className="navbar-brand active">
					JPM Portfolio
				</Nav.Link>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav.Link as={Link} to="/about" href="#about" onClick={() => recordClickEvent("aboutButtonClicked")}>
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/react" href="#react" onClick={() => recordClickEvent("reactButtonClicked")}>
						React
					</Nav.Link>
					<Nav.Link as={Link} to="/vue" href="#vue" onClick={() => recordClickEvent("vueButtonClicked")}>
						Vue
					</Nav.Link>
					<Nav.Link as={Link} to="/angular" href="#angular" onClick={() => recordClickEvent("angularButtonClicked")}>
						Angular
					</Nav.Link>
					<Nav.Link as={Link} to="/webdev" href="#webdev" onClick={() => recordClickEvent("webdevButtonClicked")}>
						Web Dev
					</Nav.Link>
					<Nav.Link as={Link} to="/ux" href="#ux" onClick={() => recordClickEvent("uxButtonClicked")}>
						UX
					</Nav.Link>
					<Nav.Link as={Link} to="/crm" href="#crm" onClick={() => recordClickEvent("crmButtonClicked")}>
						CRM
					</Nav.Link>
					<Nav.Link
						href="https://drive.google.com/file/d/1hZ5_CVsc8YF02QJXNB5F3MwLCZE0p-8n/view"
						target="_blank"
						onClick={() => recordClickEvent("graphicDesignButtonClicked")}
					>
						Graphic Design
					</Nav.Link>
					<Nav.Link
						href="https://github.com/artworkjpm/react-site"
						target="_blank"
						onClick={() => recordClickEvent("RepoButtonClicked")}
					>
						<img src="images/main/GitHub-Mark-Light-32px.png" alt="github" width="22" className="mr-1" />
						Repo
					</Nav.Link>
					<NavDropdown title="Testing" id="basic-nav-dropdown">
						<NavDropdown.Item
							as={Link}
							to="/testing/buttons"
							href="#buttonsx"
							onClick={() => recordClickEvent("testingButtonClicked")}
						>
							Buttons
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title="Contact me" id="basic-nav-dropdown">
						<NavDropdown.Item
							as={Link}
							to="/emailme"
							href="#emailme"
							onClick={() => recordClickEvent("emailmeButtonClicked")}
						>
							Email/Skype/Telephone
						</NavDropdown.Item>
						<NavDropdown.Item
							href="http://journeyofjpm.blogspot.com/"
							target="_blank"
							onClick={() => recordClickEvent("blogspotButtonClicked")}
						>
							My blog
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							href="https://www.linkedin.com/in/artworkjpm/"
							target="_blank"
							onClick={() => recordClickEvent("linkedinButtonClicked")}
						>
							LinkedIn Profile
						</NavDropdown.Item>
					</NavDropdown>
				</Navbar.Collapse>
			</Nav>
		</Navbar>
	);
};

export default Header;
