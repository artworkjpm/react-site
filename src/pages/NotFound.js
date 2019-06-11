import React from "react";
import { Row, Col } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Row className="">
      <Col xs={12} md={8}>
        <div>
          <h1>Whoops, this url does not seem to work</h1>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
