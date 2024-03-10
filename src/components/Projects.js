import React from "react";
import "./Projects.scss";
import { Row, Container, Col, Button } from "react-bootstrap";

function SingleProject({ link, src, title }) {
  return (
    <>
      <div id="project">
        <div id="project-header">
          <h4>{title}</h4>
          <Button
            className="rounded-pill border-0 border-white"
            id="visit-project"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              Visit
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-circle"
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
              />
            </svg>
          </Button>
        </div>
        <img src={src} alt="img" id="image-project" />
      </div>
    </>
  );
}

function Projects() {
  return (
    <section id="projects">
      <Container fluid="md">
        <Row>
          <Col>
            <SingleProject
              link={"https://stefaniapaduraru.github.io/focusify/"}
              src={"./resources/5.jpg"}
              title={"Focusify"}
            />
          </Col>
          <Col>
            <SingleProject
              link={
                "https://stefaniapaduraru.github.io/calories-counter.github.io/"
              }
              src={"./resources/3.jpg"}
              title={"Calories Counter"}
            />
          </Col>
          <Col>
            <SingleProject
              link={"https://stefaniapaduraru.github.io/magic-memory/"}
              src={"./resources/2.jpg"}
              title={"Magic Memory"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SingleProject
              link={"https://github.com/StefaniaPaduraru/quotes-generator"}
              src={"./resources/1.jpg"}
              title={"Quotes Generator"}
            />
          </Col>
          <Col>
            <SingleProject
              link={
                "https://stefaniapaduraru.github.io/task-manager.github.io/"
              }
              src={"./resources/4.jpg"}
              title={"Task Manager"}
            />
          </Col>
          <Col>
            <SingleProject
              link={"https://github.com/StefaniaPaduraru/LetterB"}
              src={"./resources/6.jpg"}
              title={"Letter B"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
