import React from "react";

import { Card, Row, Col, Button } from "react-bootstrap";

const Cards = () => {
  return (
    <Row className="">
      <Col xs={12} md={6} className="mt-4">
        <Card>
          <Card.Img variant="top" src="images/ux.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} className="mt-4">
        <Card>
          <Card.Img variant="top" src="images/ux.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Cards;
