import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class Bevendean extends Component {
  componentWillMount() {
    this.props.hideNavigation();
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
          <Col xs={12} md={6} className="mt-4">
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
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <video controls>
                <source
                  src="images/bevendean/WhatsApp Video 2019-06-11 at 18.56.10.mp4"
                  type="video/mp4"
                />
              </video>
              <Card.Body>
                <Card.Title>Film 1</Card.Title>
                <Card.Text>
                  <i>
                    "As you can see No safety catch, the window is in the kids
                    bedroom, the drop is massive".
                  </i>{" "}
                  <br />
                  <b>In whatsapp message: </b>
                  Large bedroom again was told by guys that fitted it that they
                  would come back as they put the window in upside-down by
                  mistake they never did
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <video controls>
                <source
                  src="images/bevendean/WhatsApp Video 2019-06-11 at 18.57.07.mp4"
                  type="video/mp4"
                />
              </video>
              <Card.Body>
                <Card.Title>Film 2</Card.Title>
                <Card.Text>
                  <b>Large bedroom</b>
                  <br />
                  Here the window sill is damaged after the install, it never
                  moved before. "They're the windows from the large bedroom by
                  the front door the council came round had a look took pictures
                  and never came back to finish it I've spoken to them several
                  times but they never done anything about it".
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <Card.Img
                variant="top"
                src="images/bevendean/WhatsApp Image 2019-06-11 at 18.56.28.jpeg"
              />

              <Card.Body>
                <Card.Title>Photo 2</Card.Title>
                <Card.Text>
                  "As you can see next to the filter there is no finish on the
                  edge they forgot several around the flat"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <Card.Img
                variant="top"
                src="images/bevendean/WhatsApp Image 2019-06-11 at 18.58.23.jpeg"
              />

              <Card.Body>
                <Card.Title>Photo 3</Card.Title>
                <Card.Text>
                  Bathroom as you can see there's no button in a small window so
                  I can't open the other window
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mt-4">
            <Card>
              <Card.Img
                variant="top"
                src="images/bevendean/WhatsApp Image 2019-06-11 at 19.01.04.jpeg"
              />

              <Card.Body>
                <Card.Title>Photo 4</Card.Title>
                <Card.Text>
                  <b>Front room window </b>
                  The same thing happened as the bedroom glass was hot and
                  cracked from the edge outwards so I had to put tape on it
                  again missing a couple of finishes next to the vents
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
