import React from "react";
import "./Skills.scss";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function Skills({ direction = "right", speed = 60 }) {
  return (
    <section id="skills">
      <hr />
      <Container fluid className="skills-container marquee-container">
        <Marquee direction={direction} speed={speed}>
          <p className="skills-component">
            HTML <br />
            <img src="./resources/html.png" alt="react" />
          </p>
          <p className="skills-component">
            CSS <br />
            <img src="./resources/css.png" alt="react" />
          </p>
          <p className="skills-component">
            JavaScript <br />
            <img src="./resources/javascript.png" alt="react" />
          </p>
          <p className="skills-component">
            React <br />
            <img src="./resources/react.png" alt="react" />
          </p>
          <p className="skills-component">
            Bootstrap <br />
            <img src="./resources/bootstrap.png" alt="react" />
          </p>
          <p className="skills-component">
            Sass <br />
            <img src="./resources/sass.png" alt="react" />
          </p>
          <p className="skills-component">
            Figma <br />
            <img src="./resources/figma.png" alt="react" />
          </p>
        </Marquee>
      </Container>

      <hr />
    </section>
  );
}

export default Skills;
