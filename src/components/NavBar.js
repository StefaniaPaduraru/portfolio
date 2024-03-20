import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "react-bootstrap";

function NavBar() {
  gsap.registerPlugin(ScrollToPlugin);
  const navigationRef = useRef();
  const { contextSafe } = useGSAP({ scope: navigationRef });
  const scrollToSection = contextSafe((e) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: e,
    });
  });
  return (
    <>
    <div id="scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2"><rect x="0.5" y="1.5" width="15" height="21" rx="7.5" stroke="currentColor"></rect><line x1="8.5" y1="5" x2="8.5" y2="10" stroke="currentColor"></line></svg>
          <p>Scroll down</p>
        </div>
      <Navbar fixed="bottom" className="mx-auto">
        <Container className="justify-content-center">
          
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#about-me")}>
                About me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#projects")}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#skills")}>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("#contact")}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Button onClick={() => window.scrollTo(0, 0)} id="up-button">⬆</Button>
    </>
  );
}

export default NavBar;
