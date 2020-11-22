import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMediumM, FaInfoCircle, FaHome } from "react-icons/fa";
import "./Social.css";
import { NavLink } from "react-router-dom";


export default function Social() {

    const [click, setClick] = useState(false);

    const handleHomeInfoClick = () => setClick(!click);


    return (
        <div>
            <div className="social-container">
                <a
                    href="https://github.com/tshlos"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#ff9933"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaGithub size={23} className="social-icon github-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/taci-shlos/"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#ff9933"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaLinkedinIn className="social-icon linkedin-icon" />
                </a>
                <a
                    href="https://tshlosberg.medium.com/"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#ff9933"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaMediumM className="social-icon medium-icon" />
                </a>
                {!click ?
                    <NavLink to="/about" onClick={handleHomeInfoClick} >
                        <FaInfoCircle
                            className="social-icon about-me"
                            style={{ color: "#a8b2d1" }}
                            onMouseOver={({ target }) => target.style.color = "#ff9933"}
                            onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                        />
                    </NavLink>
                    :
                    <NavLink to="/" onClick={handleHomeInfoClick}>
                        <FaHome
                            className="social-icon about-me"
                            style={{ color: "#a8b2d1" }}
                            onMouseOver={({ target }) => target.style.color = "#ff9933"}
                            onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                        />
                    </NavLink>
                }
                <NavLink to="/contact"></NavLink>
            </div>
            <footer class="footer">
                <a class="footer-link" href="https://taci.dev/" target="_self"> Designed &amp; Built by Taci Shlosberg </a>
            </footer>
        </div>
    )





}
