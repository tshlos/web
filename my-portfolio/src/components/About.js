import React from "react";
import "./About.css";
import cartoon from "./img/cartoon.jpg";

function About() {

    return (
        <div> 
            <a id="about-me"> </a>
            <p className="about-me-paragraph"> 
                <img className="cartoon-img" src={cartoon} alt="cartoon-img"></img>
                Hello! I'm Taci Shlosberg, a full-stack Software Engineer, currently living in San Francisco, CA.
                I am both driven and self motivated, and I'm constantly experimenting with new technologies. I'm passionate about 
                Web Development, and strive to better myself as a developer. When I'm not keeping busy with coding, you can find me
                lifting heavy things and putting them down or redecorating my apartment. 
            </p> 
        </div>
    )
}
export default About;