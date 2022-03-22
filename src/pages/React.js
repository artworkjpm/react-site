import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GitButton from "./react/GitButton";

const ReactView = () => {
	useEffect(() => {
		document.body.classList.add("bg-react");
		return () => {
			document.body.classList.remove("bg-react");
		};
	});
	return (
		<>
			<h2 className="mt-5 react-blue">React project examples and best practices</h2>
			<div className="react-links">
				<Button
					variant="dark"
					href="/files/html/after-udemy-classes-1st-session"
					target="_blank"
					rel="noopener noreferrer"
				>
					Session 1 | Modern React tutorial by John Moran 2021
					<img src="/images/main/logo.png" alt="github" width="22" className="mx-2" />
				</Button>
				<Button
					variant="dark"
					href="/files/html/after-udemy-classes-2nd-session"
					target="_blank"
					rel="noopener noreferrer"
				>
					Session 2 | Modern React tutorial by John Moran 2021
					<img src="/images/main/logo.png" alt="github" width="22" className="mx-2" />
				</Button>
				<Button
					variant="dark"
					href="https://github.com/artworkjpm/react-hooks-course/blob/master/best-practices.md"
					target="_blank"
					rel="noopener noreferrer"
				>
					Best practices guide
					<img src="/images/main/logo.png" alt="github" width="22" className="mx-2" />
				</Button>
			</div>
			<Row>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/atomic-design.png" />
						<Card.Body>
							<Card.Title>Atomic Design Architecture with React-Redux</Card.Title>

							<ul>
								<li>Simple todos app showing off the Atomic Design principles</li>
								<li>Using React-Redux with hooks</li>
								<li>Integration tests for the redux store actions and reducers</li>
							</ul>

							<Button variant="dark" href="https://react-atomic-redux.netlify.app/" target="_blank">
								Take a look
							</Button>
							<GitButton href="https://github.com/artworkjpm/react-code-challenge-todos-react-redux" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/react-hooks.png" />
						<Card.Body>
							<Card.Title>React Hooks and Best Practices</Card.Title>

							<ul>
								<li>I built an app to understand better React hooks and custom hooks</li>
								<li>
									Using Redux inside the page <b>Redux-Expensify</b>
								</li>
								<li>Based on several Udemy courses on React, React Hooks and Redux</li>
							</ul>

							<Button variant="dark" href="https://react-hooks-redux.netlify.app/redux-expensify" target="_blank">
								Take a look
							</Button>
							<GitButton href="https://github.com/artworkjpm/react-hooks-course" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/glasto.png" />
						<Card.Body>
							<Card.Title>Clipify app - instantly listen to music</Card.Title>

							<ul>
								<li>
									Using Spotify API to listen to bands on music listings, removing the annoyance to copy, paste and
									select through the spotify app
								</li>
								<li>My most complex project to date, using React, a backend OAUTH server and HEROKUAPP</li>
								<li>Listen to Glastonbury 2019 immediately from the app, more festivals to come!</li>
							</ul>

							<Button variant="dark" href="https://clipify-backend.herokuapp.com/login" target="_blank">
								Take a look
							</Button>

							<GitButton href="https://github.com/artworkjpm/spotify-calls" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/climate.png" />
						<Card.Body>
							<Card.Title>Climate Change Forecaster</Card.Title>

							<ul>
								<li>
									I combined a free API service that predicts temperatures of the future with my Trendline made in js
								</li>
								<li>Chart.js is used for the form.</li>
								<li>No CSS Framework, handcoded CSS.</li>
							</ul>

							<Button variant="dark" href="https://intellisensejpm.netlify.com/" target="_blank">
								Take a look
							</Button>

							<GitButton href="https://github.com/artworkjpm/intellisense" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/glucose.png" />
						<Card.Body>
							<Card.Title>Glucose level checker</Card.Title>

							<ul>
								<li>Chart.js app to show blood sugar levels of patients</li>
								<li>Login with Pracitioner Id, view patient data</li>
								<li>Using Redux to map data to props</li>
							</ul>

							<Button variant="dark" href="https://rochejm.netlify.com/" target="_blank">
								Take a look
							</Button>

							<GitButton href="https://github.com/artworkjpm/roche-app-jm" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/life-expectance.png" />
						<Card.Body>
							<Card.Title>Country Statistics</Card.Title>

							<ul>
								<li>Chart.js to show country stats like Life Expectancy, Water Quality Ratings etc</li>
							</ul>

							<Link to="https://bestiario.netlify.com/">
								<Button variant="dark">Take a look</Button>
							</Link>
							<GitButton href="https://github.com/artworkjpm/bestiario-dropDownChart" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/car-locator.png" />
						<Card.Body>
							<Card.Title>React with Google maps</Card.Title>

							<ul>
								<li>Map out coordinates from json into google maps</li>
								<li>Using bespoke map placemarkers</li>
								<li>Display table data in a easy to read / app/ way.</li>
							</ul>

							<Button variant="dark" href="https://react-car-locator.netlify.com/" target="_blank">
								Take a look
							</Button>

							<GitButton href="https://github.com/artworkjpm/react-app-car-locator" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/react/order-explorer.png" />
						<Card.Body>
							<Card.Title>Order review app</Card.Title>

							<ul>
								<li>Uses an API to get images</li>
								<li>Handles amendments to orders</li>
								<li>Search feature</li>
							</ul>

							<Button variant="dark" href="https://order-explorer.netlify.com/" target="_blank">
								Take a look
							</Button>
							<GitButton href="https://github.com/artworkjpm/git_job_tests/tree/master/deporvillage/depor-app" />
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4} className="mt-4">
					<Card>
						<Card.Img variant="top" src="images/planets/Planet_alignment.jpg" />
						<Card.Body>
							<Card.Title>Planets - my first React page!</Card.Title>

							<ul>
								<li>This is basic but I learnt some important React basics</li>
								<li>Learnt about jsx, using props and passing data</li>
								<li>
									First use of <code>array.map()</code> to print out json data
								</li>
								<li>
									Using <code>(...planet)</code> spread operator to avoid listing each prop on child component
								</li>
							</ul>

							<Link to="/react/planets">
								<Button variant="dark">Take a look</Button>
							</Link>
							<GitButton href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/Planets.js" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
export default ReactView;
