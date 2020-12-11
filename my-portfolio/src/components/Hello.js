import React from "react";
import "./Hello.css";

function Hello() {

    return (
        <div className="profile-container">
            <div className="profile-wrapper"> 
                <div className="bio-intro"> Hi there! My name is <br></br><span className="ts-name"> Taci Shlosberg </span>
                <br></br> I'm a Full-Stack Software Engineer based in San Francisco, CA and a UI/UX enthusiast.
                </div>
            </div>
        </div>
    )
}
export default Hello;