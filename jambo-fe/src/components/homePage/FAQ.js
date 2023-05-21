import React from "react";
import "./FAQ.css"
import person_1 from "./assets/peep-68.png"
import person_2 from "./assets/peep-32.png"
import Vector from "./assets/Vector.png"

const FAQ = () => {
    return(
        <div className="FAQ">
            <div className="FAQ_Content">
                <div className="FAQ_title">
                    <h1> Frequently Asked Question </h1>
                    <img src={Vector} alt="Vector" />
                </div>

                <div className="FAQ_List">
                    <div className="FAQ_1">
                        <h1> 01 </h1>
                        <h1> What benefits do you get if you use Jambo? </h1>
                        <button> + </button>
                    </div>

                    <div className="FAQ_2">
                        <h1> 02 </h1>
                        <h1> Lorem ipsum dolor sit amet, consectetur?</h1>
                        <button> + </button>
                    </div>

                    <div className="FAQ_3">
                        <h1> 03 </h1>
                        <h1> Lorem ipsum dolor sit amet, consectetur? </h1>
                        <button> + </button>
                    </div>

                    <div className="FAQ_4">
                        <h1> 04 </h1>
                        <h1> Lorem ipsum dolor sit amet, consectetur? </h1>
                        <button> + </button>
                    </div>
                </div>
                
                <div className="person_image">
                    <img src={person_1} alt="person 1" />
                    <img src={person_2} alt="person 2" />
                </div>
            </div>
        </div>

    );
};

export default FAQ;