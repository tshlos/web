import React from "react";
import cartoon from "./img/cartoon.jpg";
import "./Home.css";

export default function Home() {
    return (
        <div className="main-container"> 
            <div className="main-center">
                <div className="cartoon-img-container">
                    <img className="cartoon-img" src={cartoon} alt="cartoon-img" />
                </div>

                <div className="name-container"> 
                    <h1 className="first-name"> Taci </h1>
                
                    <h1 className="last-name"> Shlosberg </h1>
                </div>
            </div>
            
        </div>
    )
}
