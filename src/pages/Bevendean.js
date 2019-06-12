import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class Bevendean extends Component {
  componentWillMount() {
    this.props.hideNavigation();
  }

  componentDidMount() {
    document.body.classList.add("background-white");
  }

  componentWillUnmount() {
    document.body.classList.remove("background-white");
  }

  render() {
    return (
      <>
        <h2 className="mt-5">Evidence from Amy Dixon received 11/06/19</h2>

        <Row className="">
          <Col xs={12} md={4} className="mt-4">
            <Card>
              <a href="images/bevendean/WhatsApp Image 2019-06-11 at 18.55.07.jpeg">
                <Card.Img
                  variant="top"
                  src="images/bevendean/WhatsApp Image 2019-06-11 at 18.55.07.jpeg"
                />
              </a>
              <Card.Body>
                <Card.Title>Photo 1</Card.Title>
                <Card.Text>
                  Amy quotes: "Window large bedroom, cracked from the edge 2
                  days after install as glass was to hot"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-4">
            <Card>
              <video controls style={{ objectFit: "unset" }}>
                <source
                  src="images/bevendean/WhatsApp Video 2019-06-11 at 18.56.10.mp4"
                  type="video/mp4"
                />
              </video>
              <Card.Body>
                <Card.Title>Film 1</Card.Title>
                <Card.Text>
                  "As you can see No safety catch, the window is in the kids
                  bedroom, the drop is massive"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Bevendean;
