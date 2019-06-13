import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Row className="">
        <Col xs={12} md={6}>
          <div>
            <h1 className="mt-5">About me</h1>
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
              <li>I have styled many professional sites using SASS/CSS3</li>
              <li>
                I'm currently looking for a new job in Barcelona in Front-End
                Development, I am work in UX, making wireframes if needed. I am
                also to code emails in the CRM team if needed.
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h1 className="mt-5">Other tools I've used</h1>
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
            <h1 className="mt-5">Passions</h1>
            <ul>
              <li>
                <b>Cycling:</b> road and mountain. I have have completed several
                long distance events and continue to ride mostly everyday or at
                least everyweek.
              </li>
              <li>
                <b>Films:</b> I love films and series, I love the Avengers and
                all things Marvel.
              </li>
              <li>
                <b>Arsenal Football Club:</b> I live to follow my club and watch
                Arsenal Fan TV nearly everyday
              </li>
              <li>
                <b>Exploring and Travel:</b> life is about getting out there and
                seeing new things, I try to travel and have lived in Australia,
                Germany, prior to coming to Spain.
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h1 className="mt-5">Ideology from 13/06/19</h1>
            <ul>
              <li>
                I've decided to dedicate my life to Front End development, when
                I'm applying for jobs it often happens that I don't have a
                certain experience using a certain tool, if I am lacking
                something, I can apply myself to learn about it and master it.
              </li>
              <li>
                <b>Practice, Practice, Practice, Fail, Fail, Fail:</b> Failing
                is a part of life. Failing lets you know where you need to
                improve. I have failed in a lot of things but I try to learn
                from it and improve where I went wrong or learn what I was
                lacking.
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
};

export default About;
