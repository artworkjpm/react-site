import React from "react";
import { Row, Col } from "react-bootstrap";

const EmailMe = () => {
  return (
    <>
      <h2 className="mt-5">Email me</h2>
      <p>
        Whilst I figure out a way to create an email form in React, please email
        me: <br />
        johnnymoran44@outlook.com
      </p>
      <Row className="">
        <Col xs={12} md={6} className="mt-4" />
      </Row>
    </>
  );
};
export default EmailMe;
