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
                    <text className="faqNumber text-[40px] bg-[#FFD7C3] w-[60px] h-[60px] text-center outline rounded-lg"> 01 </text>

                    <div className="flex flex-col gap-[15px]">
                        <h1 className="faqTitle text-[30px]"> What benefits do you get if you use Jambo? </h1>

                        <p className="text-[18px] font-jakarta">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris <br></br>
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <text className="faqNumber text-[40px] bg-[#D0EA57] w-[60px] h-[60px] text-center outline rounded-lg"> 02 </text>

                    <div className="flex flex-col gap-[15px]">
                        <h1 className="faqTitle text-[30px]"> What benefits do you get if you use Jambo? </h1>

                        <p className="text-[18px] font-jakarta">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris <br></br>
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-[25px]">
                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <text className="faqNumber text-[40px] bg-[#FDD400] w-[60px] h-[60px] text-center outline rounded-lg"> 03 </text>

                    <div className="flex flex-col gap-[15px]">
                        <h1 className="faqTitle text-[30px]"> What benefits do you get if you use Jambo? </h1>

                        <p className="text-[18px] font-jakarta">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris <br></br>
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[25px] outline p-7 rounded-lg">
                    <text className="faqNumber text-[40px] bg-[#32CBFC] w-[60px] h-[60px] text-center outline rounded-lg"> 04 </text>

                    <div className="flex flex-col gap-[15px]">
                        <h1 className="faqTitle text-[30px]"> What benefits do you get if you use Jambo? </h1>

                        <p className="text-[18px] font-jakarta">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris <br></br>
                            nisi ut aliquip ex ea commodo consequat.
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