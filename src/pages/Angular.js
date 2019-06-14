import React, { useEffect } from "react";
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
            <Card.Img variant="top" src="images/angular/deathapp.jpg" />
            <Card.Body>
              <Card.Title>Death App (Angular 1)</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    My introduction to Angular, discover an estimation of when
                    you will day based on real life health and life expectancy
                    records
                  </li>
                  <li>Fancy css form styling</li>
                </ul>
              </Card.Text>

              <Button
                variant="dark"
                href="https://deathapp.netlify.com/"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/deathapp" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/angular/restaurantzone.png" />
            <Card.Body>
              <Card.Title>restaurantzone new features</Card.Title>
              <Card.Text>
                <ul>
                  <li>Implemented the code for the Aboutus page</li>
                  <li>
                    Created new components and features to large Angular 4
                    website
                  </li>
                  <li>Worked with Typescript</li>
                  <li>CSS animation on the Meet Our Team page</li>
                </ul>
              </Card.Text>

              <Button
                variant="dark"
                href="https://therestaurantzone.com/aboutus"
                target="_blank"
              >
                Take a look
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Angular;
