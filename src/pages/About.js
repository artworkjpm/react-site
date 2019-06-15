import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

class About extends React.Component {
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
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <h2>
              <img
                src="./images/main/me2.png"
                className="mr-3 curseme"
                alt="..."
                width="64"
                onClick={this.handleShow}
              />
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                  <img
                    src="./images/main/me2.png"
                    className="mr-3"
                    alt="..."
                    width="500"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              About me
            </h2>
            <ul>
              <li>
                I moved to Barcelona in 2016 to work for Norwegian Airlines,
                working the digital marketing department but doing two roles:{" "}
                <b>CRM Developer</b> and <b>UX Developer</b>
              </li>
              <li>
                I first used jquery in 2013 and have been using Vanilla JS full
                time since 2018
              </li>
              <li>
                I have styled many professional sites using SASS/CSS3, have
                worked in the 3 major frameworks (although React and Vue are my
                favourite)
              </li>
              <li>
                I'm currently looking for a new job in Barcelona in doing
                Front-End development, UX design/development, CRM development.
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2 className="mt-4">
                {" "}
                <img
                  src="./images/main/tools.jpg"
                  className="mr-3"
                  alt="..."
                  width="64"
                />
                Other tools I've used
              </h2>
              <ul>
                <li>
                  <b>CRM - Oracle Responsys:</b> for creating templates in a
                  modular way, launching email campaigns, obtaining reports,
                  organizing customer audiences based on rules.
                </li>
                <li>
                  <b>Ecommerce</b> - StoreFront - CRM, adding products, prices,
                  amending orders.
                </li>
                <li>
                  <b>Wordpress:</b> I have amended themes, created sites.{" "}
                </li>
                <li>
                  <b>Surveyjs.io:</b> this is a great open source create survey
                  tool, I used a lot for Norwegian then styled the default
                  styling.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col xs={12} md={6}>
            <div>
              <h2 className="mt-4">
                {" "}
                <img
                  src="./images/main/arsenal.png"
                  className="mr-3"
                  alt="..."
                  width="64"
                />
                Passions
              </h2>
              <ul>
                <li>
                  <b>Cycling:</b> road and mountain. I have have completed
                  several long distance events and continue to ride mostly
                  everyday or at least everyweek.
                </li>
                <li>
                  <b>Films:</b> I love films and series, I love the Avengers and
                  all things Marvel.
                </li>
                <li>
                  <b>Arsenal Football Club:</b> I live to follow my club and
                  watch Arsenal Fan TV nearly everyday
                </li>
                <li>
                  <b>Exploring and Travel:</b> life is about getting out there
                  and seeing new things, I try to travel and have lived in
                  Australia, Germany, prior to coming to Spain.
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2 className="mt-5">
                {" "}
                <img
                  src="./images/main/idealogy.png"
                  className="mr-3"
                  alt="..."
                  width="64"
                />
                Ideology{" "}
                <span style={{ fontSize: "16px" }}>(written on 13/06/19)</span>
              </h2>
              <ul>
                <li>
                  I've decided to dedicate my life to Front End development,
                  when I'm applying for jobs it often happens that I don't have
                  a certain experience using a certain tool, if I am lacking
                  something, I can apply myself to learn about it and master it.
                </li>
                <li>
                  <b>Practice, Practice, Practice, Fail, Fail, Fail:</b> Failing
                  is a part of life. Failing lets you know where you need to
                  improve. I have failed in a lot of things but I try to learn
                  from it and improve where I went wrong.
                </li>
                <li>
                  <b>Continuous learning:</b> I am always doing some kind of
                  online course, right now I'm learning more Vanilla JS with
                  GoMakeThings course and I'm doing a Treehouse Redux Course. I
                  will try to make musical festival app soon, more details to be
                  announced on that idea.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default About;
