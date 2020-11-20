import React, { Component } from "react";


class About extends Component {

    state = {
        clicked: false,
    }

    handleGetInTouchClick = () => {
        this.setState({
            clicked: true
        });
        this.props.history.push("/contact")
        // window.location.href = "http://localhost:3000/contact";
    }


    render() {
        return (
            <div className="profile-container">
                <div className="profile-wrapper"> 
                    <p className="bio-intro"> 
                        Hi there! My name is
                        <p className="bio-name"> Taci Shlosberg.</p>
                        <p className="bio-paragraph">
                            I'm a Full-Stack Web Developer based in <br/>
                            San Francisco, CA and a UI/UX enthusiast.
                        </p>
                    </p>
                    <button className="button" onClick={this.handleGetInTouchClick}> Get in Touch </button>
             </div>
         </div>
        )
    }
}

export default About;