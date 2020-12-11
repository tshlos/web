import React from "react";
import "./Button.css";

function Button(props) {
    return (
        <div className={props.className}>
            <button className="button" > 
                {props.text}
            </button>
        </div>
    )
}
export default Button;