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
      <h2 className="mt-5 react-blue">React.js work</h2>
      <div className="react-links">
        <a href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/InterviewQuestions.md"
          target="_blank" rel="noopener noreferrer">Notes on React</a><br />
        <a href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/TestingReact.md"
          target="_blank" rel="noopener noreferrer">Testing Notes</a>
      </div>

      <Row>
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react/glasto.png" />
            <Card.Body>
              <Card.Title>Clipify app - instantly listen to music</Card.Title>

              <ul>
                <li>
                  Using Spotify API to listen to bands on music listings,
                  removing the annoyance to copy, paste and select through the
                  spotify app
                </li>
                <li>
                  My most complex project to date, using React, a backend OAUTH
                  server and HEROKUAPP
                </li>
                <li>
                  Listen to Glastonbury 2019 immediately from the app, more
                  festivals to come!
                </li>
              </ul>

              <Button
                variant="dark"
                href="https://clipify-backend.herokuapp.com/login"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/spotify-calls" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react/climate.png" />
            <Card.Body>
              <Card.Title>Climate Change Forecaster</Card.Title>

              <ul>
                <li>
                  I combined a free API service that predicts temperatures of the future with my Trendline made in js
                </li>
                <li>
                  Chart.js is used for the form.
                </li>
                <li>
                  No CSS Framework, handcoded CSS.
                </li>
              </ul>

              <Button
                variant="dark"
                href="https://intellisensejpm.netlify.com/"
                target="_blank"
              >
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
                <li>
                  Chart.js app to show blood sugar levels of patients
                </li>
                <li>
                  Login with Pracitioner Id, view patient data
                </li>
                <li>
                  Using Redux to map data to props
                </li>
              </ul>

              <Button
                variant="dark"
                href="https://rochejm.netlify.com/"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/roche-app-jm" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
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

              <Button
                variant="dark"
                href="https://react-car-locator.netlify.com/"
                target="_blank"
              >
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

              <Button
                variant="dark"
                href="https://order-explorer.netlify.com/"
                target="_blank"
              >
                Take a look
              </Button>
              <GitButton href="https://github.com/artworkjpm/git_job_tests/tree/master/deporvillage/depor-app" />
            </Card.Body>
          </Card>
        </Col>


      </Row>
      <Row>
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
                  Using <code>(...planet)</code> spread operator to avoid
                  listing each prop on child component
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
