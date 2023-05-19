import React from "react";
import "./Footer.css"

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
                    <div className="right">
                        <h2> Follow Us </h2>
                        <div className="wrapper">
                            <div className="icon facebook">
                                <span><i class="fa-brands fa-instagram"></i></span>
                                <div className="tooltip"> Instagram </div>
                            </div>

                            <div className="icon twitter">
                                <span><i class="fa-brands fa-twitter"></i></span>
                                <div className="tooltip"> Twitter </div>
                            </div>

                            <div className="icon youtube">
                                <span><i class="fa-brands fa-youtube"></i></span>
                                <div className="tooltip"> Youtube </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;