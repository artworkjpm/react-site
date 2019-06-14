import React from "react";
import { Card, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import GitButton from "./react/GitButton";

class UXExamples extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <h2 className="mt-5">UX Design and Development</h2>

        <Row className="">
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <Card.Img variant="top" src="images/ux/ux-norwegian.jpg" />
              <Card.Body>
                <Card.Title>Norwegian Airlines UX examples</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Live web pages changed only with javascript and CSS</li>
                    <li>
                      VWO(Visual Web Optimizer) used to render the new pages and
                      gather reports on A/B test results
                    </li>
                    <li>
                      Weekly A/B tests, lots of front end javascript, gave me
                      confidence with js
                    </li>
                    <li>Good feedback from colleagues, happy with my work</li>
                  </ul>
                </Card.Text>

                <Button variant="dark" onClick={this.handleShow}>
                  Launch demo modal
                </Button>
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Norwegian Airlines UX examples</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux1.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <b>Example 1:</b> Create js slider, move static content to
                  slider
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux1.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <b>Example 1:</b> Create js slider, move static content to
                  slider
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux1.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <b>Example 1:</b> Create js slider, move static content to
                  slider
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux1.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <b>Example 1:</b> Create js slider, move static content to
                  slider
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default UXExamples;
