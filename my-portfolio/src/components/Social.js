import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMediumM, FaInfoCircle, FaHome, FaTwitter } from "react-icons/fa";
import "./Social.css";
import { NavLink } from "react-router-dom";


function Social() {

    return (
        <div>
            <div className="social-container">
                <a
                    href="https://github.com/tshlos"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#f7882F"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaGithub size={23} className="social-icon github-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/taci-shlos/"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#f7882F"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaLinkedinIn className="social-icon linkedin-icon" />
                </a>
                <a
                    href="https://tshlosberg.medium.com/"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#f7882F"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaMediumM className="social-icon medium-icon" />
                </a>
                <a
                    href="https://twitter.com/tshloss"
                    target="_blank"
                    style={{ color: "#a8b2d1" }}
                    onMouseOver={({ target }) => target.style.color = "#f7882F"}
                    onMouseOut={({ target }) => target.style.color = "#a8b2d1"}
                >
                    <FaTwitter className="social-icon twitter-icon" />
                </a>
                <NavLink to="/contact"></NavLink>
            </div>
            <footer class="footer">
                <a class="footer-link" href="https://taci.dev/" target="_self"> Built by Taci Shlosberg </a>
            </footer>
        </div>
    )
}
export default Social;
