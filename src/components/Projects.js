import React from "react";
import "./Projects.scss";
import { Row, Container, Col, Button } from "react-bootstrap";

function SingleProject({ link, src, title}){
return(<>
    <div id="project">
        <div id="project-header">
        <h5>{title}</h5>
        <Button>
            <a href={link} target="_blank" rel="noopener noreferrer">Visit</a>
        </Button>
        </div>
        <img src={src} alt="img" id="image-project"/>
    </div>
</>);
}

function Projects(){
    return(
        <section id="projects">
        <Container fluid="md">
            <Row>
                <Col><SingleProject link={"https://stefaniapaduraru.github.io/focusify/"} src={"./resources/focusify.png"} title={"Focusify"}/></Col>
                <Col><SingleProject link={"https://stefaniapaduraru.github.io/magic-memory/"} src={"./resources/focusify.png"} title={"Magic Memory Game"}/></Col>
                <Col><SingleProject link={"https://stefaniapaduraru.github.io/calories-counter.github.io/"} src={"./resources/focusify.png"} title={"Calories Counter"}/></Col>
            </Row>
            <Row >
                <Col><SingleProject link={"https://github.com/StefaniaPaduraru/quotes-generator"} src={"./resources/focusify.png"} title={"Quotes Generator"}/></Col>
                <Col><SingleProject link={"https://stefaniapaduraru.github.io/task-manager.github.io/"} src={"./resources/focusify.png"} title={"Task Manager"}/></Col>
                <Col><SingleProject link={"https://stefaniapaduraru.github.io/magic-memory/"} src={"./resources/focusify.png"} title={"Letter B"}/></Col>
            </Row>
    </Container>
        </section>
    );
}
export default Projects;