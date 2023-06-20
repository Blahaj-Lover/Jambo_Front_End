import React from "react";
import "./FAQ.css"
import person_1 from "./assets/peep-68.png"
import person_2 from "./assets/peep-32.png"
import Vector from "./assets/Vector.png"

const FAQ = () => {
    return(
        <div className="FAQ flex flex-col items-center gap-[30px]">
            <div className="flex gap-[15px]">
                <h1 className="faqTitle text-[50px]"> Frequently Asked Questions </h1>
                <img src={Vector} alt="QnA Icon"></img>
            </div>

            <div className="flex gap-[25px]">
                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <div className="flex flex-col gap-[15px] w-[800px]">
                        <div className="flex items-center gap-[30px]">
                            <text   text className="faqNumber text-[40px] bg-[#FFD7C3] w-[60px] h-[60px] text-center outline rounded-lg"> 01 </text>
                            <h1 className="faqTitle text-[30px]"> What is Jambo? </h1>
                        </div>

                        <p className="text-[18px] font-jakarta">
                        Jambo is a platform designed for game developers, providing a community-driven <br></br>
                        space where they can showcase their games, collaborate with other developers, <br></br>
                        receive feedback, and explore various opportunities to enhance their skills and projects.

                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex items-center gap-[30px]">
                            <text className="faqNumber text-[40px] bg-[#D0EA57] w-[60px] h-[60px] text-center outline rounded-lg"> 02 </text>
                            <h1 className="faqTitle text-[30px]"> How can I showcase my game on Jambo? </h1>
                        </div>

                        <p className="text-[18px] font-jakarta">
                        To showcase your game on Jambo, simply create an account,
                        upload your game assets and description, and make it
                        available for the community to explore and provide feedback. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-[25px]">
                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex items-center gap-[30px]">
                            <text className="faqNumber text-[40px] bg-[#FDD400] w-[60px] h-[60px] text-center outline rounded-lg"> 03 </text>
                            <h1 className="faqTitle text-[30px]"> How does crowdfunding work on Jambo? </h1>
                        </div>

                        <p className="text-[18px] font-jakarta">
                        Jambo provides a crowdfunding feature that allows developers to seek financial support for their game projects. Developers can create a campaign, share details about their game, and set funding goals. Users interested in supporting the project can contribute funds, becoming sponsors of the game. 

                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex items-center gap-[30px]">
                            <text className="faqNumber text-[40px] bg-[#32CBFC] w-[60px] h-[60px] text-center outline rounded-lg"> 04 </text>
                            <h1 className="faqTitle text-[30px]"> Is Jambo free to use for developers? </h1>
                        </div>

                        <p className="text-[18px] font-jakarta">
                        Yes, Jambo is a free platform for developers to join and utilize its core features. Developers can create an account, showcase their games, participate in game jams, collaborate with other developers, and receive feedback without any upfront costs.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-[700px]">
                <img src={person_1}></img>
                <img src={person_2}></img>
            </div>

        </div>

    );
};

export default FAQ;