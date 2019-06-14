import React from "react";
import { Row, Col } from "react-bootstrap";

const EmailMe = () => {
  return (
    <>
      <h2 className="mt-5">Contact me</h2>
      <p>
        <b>Email:</b> johnnymoran44@outlook.com
        <br />
        <b>Skype username:</b> johnnymoran44 <br />
        <b>Mobile:</b> +34 695966706
      </p>
      <Row className="">
        <Col xs={12} md={6} className="mt-4" />
      </Row>
    </>
  );
};
export default EmailMe;
