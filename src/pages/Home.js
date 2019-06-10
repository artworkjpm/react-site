import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../components/Slider";
import Media from "../components/Media";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <Row className="">
      <Col xs={12} md={4} className="mt-4">
        <Media />
      </Col>
      <Col xs={12} md={8}>
        <Slider />
        <Cards />
      </Col>
    </Row>
  );
};

export default Home;
