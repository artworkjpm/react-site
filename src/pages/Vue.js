import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const Vue = () => {
  useEffect(() => {
    document.body.classList.add("bg-vue");
    return () => {
      document.body.classList.remove("bg-vue");
    };
  });

  return (
    <>
      <h2 className="mt-5">Vue.js work</h2>

      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/football-app.png" />
            <Card.Body>
              <Card.Title>Football Data Vue App</Card.Title>

              <ul>
                <li>Using Vue CLI to make a Premier League table</li>
                <li>Show data on teams, players, scores, fixtures</li>
                <li>Axios API calls managed in a cleaner way, separate from components</li>
                <li>Using bootstrap-vue to style</li>
              </ul>

              <Button variant="dark" href="https://vue-football-app.netlify.com/" target="_blank">
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/football_app_vue" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/quotes.jpg" />
            <Card.Body>
              <Card.Title>Conveyance Quotes Questionaire</Card.Title>

              <ul>
                <li>Added data via js objects and arrays</li>
                <li>Questions change based on previous answer</li>
                <li>
                  I like Vues expressions inside html like <code>v-if=</code>
                </li>
                <li>Input Form validation, responsive styling, API calls for British postcode and number validation</li>
              </ul>

              <Button variant="dark" href="https://xenodochial-kowalevski-05fb27.netlify.com" target="_blank">
                Take a look
              </Button>

              <GitButton href="https://bitbucket.org/artworkjpm/john-quotes/src/master/" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col xs={12} md={6} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/vuex.jpg" />
            <Card.Body>
              <Card.Title>Vuex shopping app</Card.Title>

              <ul>
                <li>Introduction to using Vuex, similar to Redux</li>
                <li>Calculates discounts for the day</li>
                <li>My first exposure to Vuex store single state of truth, new functions and methods learned.</li>
              </ul>

              <Button variant="dark" href="https://bershka-test-bc29d3.netlify.com/" target="_blank">
                Take a look
              </Button>
              <GitButton href="https://github.com/artworkjpm/bershka-test" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Vue;
