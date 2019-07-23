import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/react_img.png" />
            <Card.Body>
              <Card.Title>React.js work</Card.Title>
              <Card.Text>React is the most popular library, for good reason; here a some real life projects, game apps and random things I've done with React/Redux</Card.Text>
              <Link to="/react">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/vuejs.jpeg" />
            <Card.Body>
              <Card.Title>Vue.js work</Card.Title>
              <Card.Text>
                I love Vue.js but not as much as React, I was impressed by how similar it is to React and Angular, almost the best of both libraries, I particularly like the Vue.js UI that comes when you install Vue CLI. Here are some real life work examples I've done using Vue/Vuex{" "}
              </Card.Text>
              <Link to="/vue">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/angular.jpg" />
            <Card.Body>
              <Card.Title>Angular.js work</Card.Title>
              <Card.Text>
                I started using Angular 1 in 2015, it was a revelation when it first came out, using <code>ng</code> attributes directly into the HTML to render different content. Since then I have done a few projects with the latest version of Angular.
              </Card.Text>
              <Link to="/angular">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/wedev.jpg" />
            <Card.Body>
              <Card.Title>Web Dev work without libraries</Card.Title>
              <Card.Text>You don't always need to use a library of course, here are some examples of what you can do with Vanilla JS, quite a lot as it goes!</Card.Text>
              <Link to="/webdev">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/ux.jpg" />
            <Card.Body>
              <Card.Title>UX design/development</Card.Title>
              <Card.Text>I have made wireframes for UI's and developed the HTML, CSS, JAVASCRIPT, here some examples</Card.Text>
              <Link to="/ux">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/graphics.jpg" />
            <Card.Body>
              <Card.Title>Graphic Design Portfolio</Card.Title>
              <Card.Text>Take a look at my best work when I was a graphic designer in London</Card.Text>

              <Button variant="dark" href="https://drive.google.com/file/d/1hZ5_CVsc8YF02QJXNB5F3MwLCZE0p-8n/view" target="_blank">
                Take a look
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img className="homeImage" variant="top" src="images/main/crm.jpg" />
            <Card.Body>
              <Card.Title>CRM Email Development and Management</Card.Title>
              <Card.Text>
                I have a been an Email Developer and used several Email Marketing Software like <b>Oracle Responsys</b>, <b>Campaign Monitor</b>, <b>Litmus</b>. Take a look at some examples
              </Card.Text>
              <Link to="/crm">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Cards;
