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
                    <div className="foot_navbar">
                        <h1> Home </h1>
                        <h1> Explore </h1>
                        <h1> About </h1>
                    </div>
                    {/* column 3 */}
                    <div className="foot_sosmed">
                        <h2> Follow Us </h2>
                        <ul className="sosmed_link">
                            <li> ins </li>
                            <li> twt </li>
                            <li> yt </li>
                        </ul>
                    </div>
                </div>
            
                <div>
                    <p className="sm">
                        @Copyright Jambo Company. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;