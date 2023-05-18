import React from "react";
import "./Footer.css"
import picture_1 from "../assets/Instagram.png";
import picture_2 from "../assets/Twitter.png";
import picture_3 from "../assets/Youtube.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="footer_row">
                    {/* column 1 */}
                    <div className="foot_logo">
                        <h1> LOGO </h1>
                    </div>
                    {/* column 2 */}
                    <div className="middle">
                        <div className="foot_navbar">
                            <li className="menu_1"> <a href=""> Home </a></li>
                            <li className="menu_2"> <a href=""> Explore </a></li>
                            <li className="menu_3"> <a href=""> About </a></li>
                        </div>

                        <text> @Copyright Jambo Company. All rights reserved. </text>
                    </div>
        
                    {/* column 3 */}
                    <div className="foot_sosmed">
                        <h2> Follow Us </h2>
                        <ul className="sosmed_link">
                            <li> <a href=""><img src={picture_1} alt="Instagram"></img></a></li>
                            <li> <a href=""><img src={picture_2} alt="Twitter"></img></a></li>
                            <li> <a href=""><img src={picture_3} alt="Youtube"></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;