import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const Angular = () => {
  useEffect(() => {
    document.body.classList.add("bg-angular");
    return () => {
      document.body.classList.remove("bg-angular");
    };
  });
  return (
    <>
      <h2 className="mt-5">Angular 1 - Angular 2+ work</h2>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/planets/Planet_alignment.jpg" />
            <Card.Body>
              <Card.Title>Death App</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    My introduction to Angular, discover an estimation of when
                    you will day based on real life health and life expectancy
                    records
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
export default Angular;
