import React from "react";
import { Card, Row, Col, Button, Modal, Carousel } from "react-bootstrap";

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

                <Button variant="dark" onClick={this.handleShow}>
                  View UX projects
                </Button>
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
                  <p>
                    <b>Example 1:</b> Create js slider, move static content to
                    slider
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux2.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <p>
                    <b>Example 2:</b> Change color scheme to make ticket types
                    more clear
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux3.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <p>
                    <b>Example 3:</b> Improve Compare Fares table, add tick,
                    cross icons, use new color scheme, list out the airports
                    that have the services (Fast track, Lounge)
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux4.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <p>
                    <b>Example 4:</b> New icons to represent service included in
                    ticket type
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ux/ux5.jpg"
                  alt="ux"
                />

                <Carousel.Caption>
                  <p>
                    <b>Example 5:</b> New icons and green ticks to make it
                    clearer (on mobile)
                  </p>
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
