import React from "react";
import './AboutMe.scss'

function AboutMe(){
    const date = new Date();
    const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      };
    
    const formattedDate = date.toLocaleDateString('en-US', options);
    return(
        <>
        <section className="header">
            <img src="logo.png" alt="logo"/>
            <p id="current-date"> {formattedDate}</p>
        </section>
        <section id="about-me">
        <h1>Hi there, I'm Ștefania Păduraru!</h1>
        <h3>Aspiring front-end developer with a passion for creating delightful web experiences.</h3>
        <h5>Self-taught enthusiast on a journey to master the art of crafting minimalistic, responsive, and accessible websites.</h5>
        </section>
        </>
    );
}
export default AboutMe;