import React, { Component } from 'react'
import "./Home.css";
import Hello from './Hello'
import About from './About';
import Skills from './Skills';
import { withRouter } from "react-router-dom";

class Home extends Component {

    handleGetInTouchClick = () => {
        console.log('IT HAS BEEN CLICKED!')
        this.props.history.push("/say_hello");
    }

    render() {
        return (
            <div>
                <section className="hello-area" id="hello">
                    <div className="text-part">
                        <div className="hello-page"> </div>
                        <Hello />
                    </div>
                </section>

                <section className="about-area" id="about">
                    <div className="text-part">
                        <div className="about-me-header"> About me </div>
                        <About />
                    </div>
                </section>

                <section className="skills-area" id="skills">
                    <div className="text-part">
                        <h4 className="skills-header"> Skills </h4>
                        <Skills />
                    </div>
                </section>

                <section className="contact-area" id="contact">
                    <div className="text-part">
                        <h3 className="get-in-touch-header"> Say Hello! </h3>
                        <p className="get-in-touch-text">
                            I'm currenty open to new opportunities. Don't hesitate to get in touch, even if it's just to say hello.
                        </p>

                        <button className="button" onClick={this.handleGetInTouchClick}> Get in Touch </button>
                    </div>
                </section>
            </div>
        )  
    } 
}
export default withRouter(Home);