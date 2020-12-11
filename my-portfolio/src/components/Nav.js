import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div>
            <div className="navbar">
                <a className="logo"> TS </a>
                <ul className="nav">
                    <li><a href="/#hello">Hello</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;