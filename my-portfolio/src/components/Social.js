import React, { useState } from "react";
import  { FaGithub, FaLinkedinIn, FaMediumM, FaInfoCircle, FaHome } from "react-icons/fa";
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
                    style={{color: "#c4c4c4"}} 
                    onMouseOver={({target}) => target.style.color="#ff9933"}
                    onMouseOut={({target}) => target.style.color="#c4c4c4"}
                >
                <FaGithub size={23} className="github-icon" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/taci-shlos/" 
                    target="_blank"
                    style={{color: "#c4c4c4"}}
                    onMouseOver={({target}) => target.style.color="#ff9933"}
                    onMouseOut={({target}) => target.style.color="#c4c4c4"}
                >
                <FaLinkedinIn size={23} className="linkedin-icon" />
                </a>
                <a 
                    href="https://tshlosberg.medium.com/" 
                    target="_blank"
                    style={{color: "#c4c4c4"}}
                    onMouseOver={({target}) => target.style.color="#ff9933"}
                    onMouseOut={({target}) => target.style.color="#c4c4c4"}
                >
                <FaMediumM size={23} className="medium-icon" />
                </a>
                    { !click ?
                        <NavLink to="/about" onClick={handleHomeInfoClick} > 
                            <FaInfoCircle 
                                size={23} 
                                className="about-me"
                                style={{color: "#c4c4c4"}}
                                onMouseOver={({target}) => target.style.color="#ff9933"}
                                onMouseOut={({target}) => target.style.color="#c4c4c4"}
                            />    
                        </NavLink>
                        :
                        <NavLink to="/" onClick={handleHomeInfoClick}> 
                            <FaHome 
                                size={23} 
                                className="about-me"
                                style={{color: "#c4c4c4"}}
                                onMouseOver={({target}) => target.style.color="#ff9933"}
                                onMouseOut={({target}) => target.style.color="#c4c4c4"}
                            />
                        </NavLink>
                    }   
                    <NavLink to="/contact"></NavLink>
            </div>
        </div>
    )
}
