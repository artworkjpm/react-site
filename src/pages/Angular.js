import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import GitButton from "./react/GitButton";

const Angular = () => {
  useEffect(() => {
    document.body.classList.add("bg-angular");
    return () => {
      document.body.classList.remove("bg-angular");
    };
  });
  return (
    <>
      <h2 className="mt-5">Angular 1 - Angular 2+ work</h2>
      <Row className="">
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/angular/sally-game.jpg" />
            <Card.Body>
              <Card.Title>Photo game for babies / children</Card.Title>
              <ul>
                <li>
                  Using <b>pixabay.com</b> API to create a nice game to learn
                  words and associate photos with the clue words
                </li>
                <li>
                  Search for a thing, place, type or let the search work
                  randomly
                </li>
                <li>Using Angular Service to implement API endpoints</li>
              </ul>
              <Button
                variant="dark"
                href="https://artworkjpm.github.io/jm-game-app-angular/"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/jm-game-app-angular" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/angular/punkipa.JPG" />
            <Card.Body>
              <Card.Title>Brew Dog Beers Gallery</Card.Title>
              <ul>
                <li>
                  Do you like Craft beers? Using{" "}
                  <b>Angular 6 and the Punk API (https://punkapi.com)</b> take a
                  look at The Brew Dog beers, with details about their flavours,
                  what food they match and more.
                </li>
                <li>
                  Using Input Search feature, Pagination, routing each beer to
                  its own description page.
                </li>
              </ul>
              <Button
                variant="dark"
                href="https://artworkjpm.github.io/haufe-beers/beers"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/haufe-beers" />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/angular/restaurantzone.png" />
            <Card.Body>
              <Card.Title>restaurantzone new features</Card.Title>
              <ul>
                <li>Implemented the code for the Aboutus page</li>
                <li>
                  Created new components and features to large Angular 4 website
                </li>
                <li>Worked with Typescript</li>
                <li>CSS animation on the Meet Our Team page</li>
              </ul>
              <Button
                variant="dark"
                href="https://therestaurantzone.com/aboutus"
                target="_blank"
              >
                Take a look
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        <Col xs={12} md={4} className="mt-4">
          <Card>
            <Card.Img variant="top" src="images/angular/deathapp.jpg" />
            <Card.Body>
              <Card.Title>Death App (Angular 1)</Card.Title>
              <ul>
                <li>
                  My introduction to Angular, discover an estimation of when you
                  will day based on real life health and life expectancy records
                </li>
                <li>Fancy css form styling</li>
              </ul>
              <Button
                variant="dark"
                href="https://deathapp.netlify.com/"
                target="_blank"
              >
                Take a look
              </Button>

              <GitButton href="https://github.com/artworkjpm/deathapp" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Angular;
