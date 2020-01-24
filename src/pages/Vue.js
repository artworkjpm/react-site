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
      <h2 className="mt-5 vue-text">Vue.js work</h2>
      <Row className="">


        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/football-app.png" />
            <Card.Body>
              <Card.Title>Football Data Vue App</Card.Title>

              <ul>
                <li>Showing Football Data from around the world</li>
                <li>Data on teams, players, scores, fixtures</li>
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





        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/vue-gridsome.png" />
            <Card.Body>
              <Card.Title>Vue Gridsome Air Table Web App</Card.Title>

              <ul>
                <li>Trying out Gridsome and Airtable to create simple products app</li>
                <li>Gridsome uses GraphSQL to make queries that display content to the page </li>
                <li>Gridsome makes Progressive Web Apps easy</li>
                <li>Airtable is a free data spreadsheet way to manage static data and content</li>
              </ul>

              <Button variant="dark" href="https://jpm-gridsome.netlify.com/" target="_blank">
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/john-gridsome" />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/vue/movie-search.jpeg" />
            <Card.Body>
              <Card.Title>Movie Search Vue App</Card.Title>

              <ul>
                <li>Using The Open Movie Database to search for movies</li>
                <li>Practicing API calls</li>
                <li>Made a bespoke Slider2 to display movies with no frameworks</li>
              </ul>

              <Button variant="dark" href="https://jpm-movie-vue.netlify.com/" target="_blank">
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/movie-vue" />
            </Card.Body>
          </Card>
        </Col>

      </Row>
      {/* ROW*************** */}
      <Row className="">
        <Col xs={12} md={4} className="mt-4">
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

              <Button variant="dark" href="https://jpm-quotes-vue.netlify.com" target="_blank">
                Take a look
              </Button>

              <GitButton href="https://bitbucket.org/artworkjpm/john-quotes/src/master/" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-4">
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
