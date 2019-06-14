import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const Webdev = () => {
  useEffect(() => {
    document.body.classList.add("bg-webdev");
    return () => {
      document.body.classList.remove("bg-webdev");
    };
  });

  return (
    <>
      <h2 className="mt-5">Web development without frameworks</h2>

      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/webdev/d3work.jpg" />
            <Card.Body>
              <Card.Title>
                User Interface development, Data visualisation example
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Used D3.js for the first time</li>
                  <li>All made with Vanilla.js</li>
                  <li>Difficult proposal completed in small time frame</li>
                </ul>
              </Card.Text>

              <Button
                variant="dark"
                href="https://artworkjpm.github.io/marfeel-test/index.html"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/marfeel-test" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/webdev/mini-ui.jpg" />
            <Card.Body>
              <Card.Title>Norwegian Mini UI feature</Card.Title>
              <Card.Text>
                <ul>
                  <li>One example of mini UI added to Norwegian website</li>
                  <li>Jquery / Vanilla.js, no frameworks</li>
                  <li>Completed in small time frame</li>
                </ul>
              </Card.Text>

              <Button
                variant="dark"
                href="https://artworkjpm.github.io/Boehringer-Ingelheim/norwegian-demo/"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/Boehringer-Ingelheim/blob/master/norwegian-demo/index.html" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Webdev;
