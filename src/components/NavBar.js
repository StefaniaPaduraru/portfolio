import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
    </>
  );
}

export default NavBar;
