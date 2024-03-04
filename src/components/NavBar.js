import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <Navbar fixed="bottom" className="mx-auto">
        <Container className="justify-content-center">
          <Nav className="m-auto">
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
        </Container>
      </Navbar>
      

    </>
  );
}

export default NavBar;
