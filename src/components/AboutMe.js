import React, { useState, useRef } from "react";
import "./AboutMe.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Footer from './Footer';
import { OffcanvasHeader } from "react-bootstrap";

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
  const circleRef = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);
  const navigationRef = useRef();
  const { contextSafe } = useGSAP({scope: navigationRef});
  const scrollToSection = contextSafe((e) => {
    gsap.to(window, {
        duration: 1.2,
        scrollTo: e
    });
  });
  return (
    <>
      <section className="header">
        <Button id="logo" onClick={() => scrollToSection("#about-me")}>
          <img src="logo.png" alt="logo" />
        </Button>
        <p id="current-date"> {formattedDate}</p>
        <Button
          variant="light"
          className="button-offcanvas"
          onClick={toggleOffcanvas}
        >
          <div
            className={`container ${isMenuOpen ? "change" : ""}`}
            onClick={handleMenuClick}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </Button>
        <Offcanvas
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          placement="end"
          style={{width: "60%"}}
        >
          <OffcanvasHeader>
          <Button id="logo" onClick={() => scrollToSection("#about-me")}>
          <img src="logo.png" alt="logo" />
        </Button>
          </OffcanvasHeader>
          <Offcanvas.Body>
            <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#about-me")}>About me 👤</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#projects")}>Projects 🗂️</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#skills")}>Skills 🛠️</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#contact")}>Contact 📩</Nav.Link>
            </Nav.Item>
            </Nav>
          </Offcanvas.Body>
          <Footer />
        </Offcanvas>
      </section>
      <section id="about-me">
        <div >
          <div ref={circleRef} id="titles">
          <h1>ȘTEFANIA PĂDURARU</h1>
          <h3>
            I'm an aspiring front-end developer with a passion for creating delightful
            web experiences
          </h3>
          <hr />
          <h5>
            Self-taught enthusiast on a journey to master the art of crafting
            minimalistic, responsive, and accessible websites
          </h5>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
