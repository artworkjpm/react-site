import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const CRM = () => {
  return (
    <>
      <h2 className="mt-5">CRM Email Campaign Development</h2>

      <Row className="">
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/crm/module_guide.png" />
            <Card.Body>
              <Card.Title>Norwegian Airlines CRM work</Card.Title>

              <ul>
                <li>
                  Using Oracle Responsys we put email components into modules,
                  eg hero, body.
                </li>
                <li>Mobile first templates</li>
                <li>
                  Work well on email browsers, using Email on Acid to fix bugs
                </li>
              </ul>

              <Button
                variant="dark"
                href="https://air.norwegian.com/pub/sf/FormLink?_ri_=X0Gzc2X%3DYQpglLjHJlTQGrh1fEodPE5nPzdW9hnFh26vb7qCCf6gYdeoecAInvaHaozfd4F8p8rRVXyjLNpLOfhKLX%3DHggHQkhjLgkLgXHkxohluHptQJhuVXMtX%3DYQpglLjHJlTQGrh1fEodPE5nPzdW9hnFh26ylEDehAzbpMeCjzd5JUweWOhy9zgsFJvHGO&_ei_=Ek557TrDicAMcD3Sa43joR2msXNZ0aCIq5E_b7xhpZkrmVcFZquNIhIE3g."
                target="_blank"
              >
                Take a look
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/crm/email-example.png" />
            <Card.Body>
              <Card.Title>Email development example</Card.Title>

              <ul>
                <li>
                  Example of how coding emails is different to normal html pages
                </li>
                <li>
                  I am aware of the issues of email coding, microsoft office
                  render issues etc
                </li>
              </ul>

              <Button
                variant="dark"
                href="https://artworkjpm.github.io/Boehringer-Ingelheim/"
                target="_blank"
              >
                Take a look
              </Button>
              <GitButton href="https://github.com/artworkjpm/Boehringer-Ingelheim" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CRM;
