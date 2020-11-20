import React, { Component, useState } from "react";
import Button from "./Button";


// export default function About() {


//     const [clicked, setClick] = useState(false);
//     const handleGetInTouchClick = () => setClick(!clicked);

//     return (
//         <div className="profile">
//             {/* <img className="bio-img" src={elephant} alt="south african elephant" /> */}
//             <p className="bio-intro"> 
//                 Hi there! My name is
//                 <p className="bio-name"> Taci Shlosberg.</p>
//                 {/* <h4 className="p2"> I love building things for the web. </h4> */}
//                 <p className="bio-paragraph">
//                     I'm a Full-Stack Web Developer based in <br/>
//                     San Francisco, CA and a UI/UX enthusiast.
//                 </p>
//             </p>
//             <Button 
//                 text="Get in Touch" 
//                 onClick={handleGetInTouchClick}
//             />
//         </div>
//     )
// }


class About extends Component {

    state = {
        clicked: false,
    }

    handleGetInTouchClick = () => {
        this.setState({
            clicked: true
        });
        window.location.href = "http://localhost:3000/contact";
        console.log('clicked');
    }


    render() {
        return (
            <div className="profile-container">
                <div className="profile-wrapper"> 
                    {/* <img className="bio-img" src={elephant} alt="south african elephant" /> */}
                    <p className="bio-intro"> 
                        Hi there! My name is
                        <p className="bio-name"> Taci Shlosberg.</p>
                        {/* <h4 className="p2"> I love building things for the web. </h4> */}
                        <p className="bio-paragraph">
                            I'm a Full-Stack Web Developer based in <br/>
                            San Francisco, CA and a UI/UX enthusiast.
                        </p>
                    </p>
                    <button className="button" onClick={this.handleGetInTouchClick}> Get in Touch </button>
                    {/* <Button text="Get in Touch" onClick={this.handleGetInTouchClick}/> */}
             </div>
         </div>
        )
    }
}

export default About;