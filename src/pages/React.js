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
      <h2 className="mt-5">React.js work</h2>
      <Button
        variant="dark"
        href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/InterviewQuestions.md"
        target="_blank"
        className="mr-2"
      >
        Interview questions
      </Button>
      <Button
        variant="dark"
        href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/TestingReact.md"
        target="_blank"
      >
        Testing React components
      </Button>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react/glasto.png" />
            <Card.Body>
              <Card.Title>
                Clipify app - instantly listen to groups on music festival
                listings
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    Using Spotify API to listen to bands on music listings,
                    removing the annoyance to copy, paste and select through the
                    spotify app
                  </li>
                  <li>
                    My most complex project to date, using React, a backend
                    OAUTH server and HEROKUAPP
                  </li>
                  <li>
                    Listen to Glastonbury 2019 immediately from the app, more
                    festivals to come!
                  </li>
                </ul>
              </Card.Text>

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
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react/car-locator.png" />
            <Card.Body>
              <Card.Title>React with Google maps</Card.Title>
              <Card.Text>
                <ul>
                  <li>Map out coordinates from json into google maps</li>
                  <li>Using bespoke map placemarkers</li>
                  <li>Display table data in a easy to read / app/ way.</li>
                </ul>
              </Card.Text>

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
      </Row>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/planets/Planet_alignment.jpg" />
            <Card.Body>
              <Card.Title>Planets - my first React page!</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    This is basic but I learnt some important React basics
                  </li>
                  <li>Learnt about jsx, using props and passing data</li>
                  <li>
                    First use of <code>array.map()</code> to print out json data
                  </li>
                  <li>
                    Using <code>(...planet)</code> spread operator to avoid
                    listing each prop on child component
                  </li>
                </ul>
              </Card.Text>
              <Link to="/react/planets">
                <Button variant="dark">Take a look</Button>
              </Link>
              <GitButton href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/Planets.js" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react/order-explorer.png" />
            <Card.Body>
              <Card.Title>Order review app</Card.Title>
              <Card.Text>
                <ul>
                  <li>Uses an API to get images</li>
                  <li>Handles amendments to orders</li>
                  <li>Search feature</li>
                </ul>
              </Card.Text>

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
    </>
  );
};
export default ReactView;
