import React, { useState } from "react";
import "./AboutMe.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

function AboutMe() {
  const date = new Date();
  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <section className="header">
        <img src="logo.png" alt="logo" />
        <p id="current-date"> {formattedDate}</p>
        <Button
          variant="dark"
          className="button-offcanvas"
          onClick={toggleOffcanvas}
        >
          <div className={`container ${isMenuOpen ? 'change' : ''}`} onClick={handleMenuClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        </Button>
        <Offcanvas
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          placement="end"
        >
          <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link href="#about">About me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
      <section id="about-me">
        <h1>I'm Ștefania Păduraru</h1>
        <h2>
          Aspiring front-end developer with a passion for creating delightful
          web experiences
        </h2>
        <hr/>
        <h5>
          Self-taught enthusiast on a journey to master the art of crafting
          minimalistic, responsive, and accessible websites
        </h5>
      </section>
    </>
  );
}
export default AboutMe;
