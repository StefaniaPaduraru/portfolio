import React from "react";
import "./Contact.scss";
import { Button } from "react-bootstrap";

function Contact(){
    return(
        <section id="contact">
            <p>email</p>
            <div className="social-links">
                <Button><a href=""></a>Linkedin</Button>
                <Button><a href=""></a>Github</Button>
            </div>
            <a href="#about-me">About me</a>
            <a href="#about-me">Project</a>
            <a href="#about-me">Skills</a>
        </section>
    );
}
export default Contact;