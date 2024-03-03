import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';

function NavBar(){
return (
    <>
    <Navbar>
        <Container>
           {/* <Navbar.Brand href="#home"><img src="logo.png" alt="logo"/></Navbar.Brand>*/}
          <Nav className="me-auto">
          <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
);
}

export default NavBar;