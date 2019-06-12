import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const ReactView = () => {
  return (
    <>
      <h2 className="mt-5">React.js work</h2>
      <Button
        variant="dark"
        href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/InterviewQuestions.md"
        target="_blank"
      >
        Interview questions
      </Button>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/planets/Planet_alignment.jpg" />
            <Card.Body>
              <Card.Title>Planets - my first React page!</Card.Title>
              <Card.Text>
                Here is React in its purest form, an object array with data,
                creating a jsx template, creating a component which maps that
                jsx and renders out the content. Also, you will get to read up
                the essential facts of our solar system. I particularly liked
                using the <code>(...planet)</code> spread operator, so I don't
                need to list each prop name and value
              </Card.Text>
              <Link to="/react/planets">
                <Button variant="dark">Take a look</Button>
              </Link>

              <Button
                variant="dark"
                className="ml-4"
                href="https://github.com/artworkjpm/react-site/blob/master/src/pages/react/Planets.js"
                target="_blank"
              >
                <img
                  src="images/GitHub-Mark-Light-32px.png"
                  alt="github"
                  width="22"
                  className="mr-2"
                />
                Github code
              </Button>
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
    </>
  );
};
export default ReactView;
