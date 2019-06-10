import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/react_img.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>
            <b>Graduate of the Treehouse Learn React Course</b>
            <br />I love React and continue to make my own web apps
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/jsvanilla.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            <b>Let's get the basics right first!</b>
            <br />
            I've been using JavaScript since 2013, first jquery, now mostly all
            ES5 and ES6 Vanilla JS.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/git.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <b>How did developers cope without Git and Github?</b>
          <br />
          <p>I've been using Git/Github since 2015, I love it!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/frameworks.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            {" "}
            <b>Vue.js and Angular experience</b>
            <br />I have made apps, added new features, using these libraries,
            both are excellent tools
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/node.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            <b>Using npm since 2015</b>
            <br />
            How would we survive without npm? Yarn! :D
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/sass.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            <b>CSS & SASS</b>
            <br />I always use SASS these days, makes styling so much easier to
            organise!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/ux.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            <b>UX Design/Development experience</b>
            <br />I have worked as a UX designer and developer, using various
            tools like Adobe suite, Mockflow, Sketch
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/graphic-design.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>
            <b>Former Graphic Designer</b>
            <br />
            Before being a Front-End Developer, I was a graphic designer, I have
            designed lots of logos, graphics, brochures and sometimes use these
            skills to create bespoke icons or wireframes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
