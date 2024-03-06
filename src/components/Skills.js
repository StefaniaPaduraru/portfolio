import React from "react";
import "./Skills.scss";
import { Container } from "react-bootstrap";

function Skills(){
    return(
    <section id="skills">
        <hr/>
        <Container fluid className="skills-container">
            <p className="skills-component">React <img src="./resources/react.png" alt="react"/></p>
            <p className="skills-component">CSS <img src="./resources/css.png" alt="react"/></p>
            <p className="skills-component">HTML <img src="./resources/html.png" alt="react"/></p>
            <p className="skills-component">Bootstrap <img src="./resources/bootstrap.png" alt="react"/></p>
            <p className="skills-component">JavaScript <img src="./resources/javascript.png" alt="react"/></p>
            <p className="skills-component">Sass <img src="./resources/sass.png" alt="react"/></p>
            <p className="skills-component">Figma <img src="./resources/figma.png" alt="react"/></p>
        </Container>
        <hr/>
    </section>
    );
}
export default Skills;