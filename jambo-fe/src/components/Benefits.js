import React from "react";
import "./Benefits.css"
import picture_1 from "../assets/Built For Developer.png";
import picture_2 from "../assets/100% Free To Use.png";
import picture_3 from "../assets/Make Connection.png";
import picture_4 from "../assets/Learning By Doing.png";

const Benefits = () => {
    return (
        <div className="Benefits">
            <h1> What's Make Jambo <br/> Special? </h1>

            <div className="Benefits_List">
                <div className="Benefits_1">
                    <img src={picture_1} alt="Benefits 1" />

                    <div className="text_1">
                        <h1> Built For <br/> Developer </h1>
                    </div>
                </div>

                <div className="Benefits_2">
                    <img src={picture_2} alt="Benefits 2" />

                    <div className="text_1">
                        <h1> 100% Free <br/> To Use </h1>
                    </div>
                </div>

                <div className="Benefits_3">
                    <img src={picture_3} alt="Benefits 3" />

                    <div className="text_1">
                        <h1> Make <br/> Connection </h1>
                    </div>
                </div>

                <div className="Benefits_4">
                    <img src={picture_4} alt="Benefits 4" />

                    <div className="text_1">
                        <h1> Learning By <br/> Doing </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Benefits;