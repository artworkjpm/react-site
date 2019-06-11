import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/react_img.png" />
            <Card.Body>
              <Card.Title>React.js work</Card.Title>
              <Card.Text>
                React is the most popular library, for good reason; here a some
                real life projects, game apps and random things I've done with
                React/Redux
              </Card.Text>
              <Link to="/react">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vuejs.jpeg" />
            <Card.Body>
              <Card.Title>Vue.js work</Card.Title>
              <Card.Text>
                I love Vue.js but not as much as React, I was impressed by how
                similar it is to React and Angular, almost the best of both
                libraries, I particularly like the Vue.js UI that comes when you
                install Vue CLI. Here are some real life work examples I've done
                using Vue/Vuex{" "}
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
            <Card.Img variant="top" src="images/angular.jpg" />
            <Card.Body>
              <Card.Title>Angular.js work</Card.Title>
              <Card.Text>
                I started using Angular 1 in 2015, it was a revelation when it
                first came out, using <code>ng</code> attributes directly into
                the HTML to render different content. Since then I have done a
                few projects with the latest version of Angular.
              </Card.Text>
              <Link to="/angular">
                <Button variant="dark">Take a look</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/wedev.jpg" />
            <Card.Body>
              <Card.Title>Web Dev work without libraries</Card.Title>
              <Card.Text>
                You don't always need to use a library of course, here are some
                examples of what you can do with Vanilla JS, quite a lot as it
                goes!
              </Card.Text>
              <Link to="/webdev">
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
