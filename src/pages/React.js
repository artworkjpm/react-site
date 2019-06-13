import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const ReactView = () => {
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
        href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/InterviewQuestions.md"
        target="_blank"
      >
        Testing React components
      </Button>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/planets/Planet_alignment.jpg" />
            <Card.Body>
              <Card.Title>Planets - my first React page!</Card.Title>
              <Card.Text>
                Here is React in its purest form, an object array with data,
                creating a jsx template, creating a component which maps that
                jsx and renders out the content. Also, you will get to read up
                the essential facts of our solar system. I particularly liked
                using the <code>(...planet)</code> spread operator, so I don't
                need to list each prop name and value
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
