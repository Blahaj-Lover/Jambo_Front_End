import React from "react";
import "./OpenCrowdfund.css";

const Crowdfund = () => {
    return(
        <div className="Crowdfund flex flex-col">
            <div className="askOpen">
                <h1 className="text-2xl"> Open Crowdfunding? </h1>
                <h2 className="text-base opacity-50"> *Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet </h2>
                <div className="flex py-[20px] gap-[15px]">
                    <button className="w-[115px] outline rounded">
                        <h2 className="p-[10px] font-jakarta font-bold bg-[#FDD400]"> Open </h2>
                    </button>
                    <button className="w-[115px] outline rounded">
                    <h2 className="p-[10px] font-jakarta font-bold"> Closed </h2>
                    </button>
                </div>
            </div>

            <div className="target">
                <h1 className="text-2xl"> Target Funding In USD ($) </h1>
                <h2 className="text-base opacity-50"> *Funding target can be changed even after already achieved </h2>
                <div className="flex py-[20px]">
                    <button className="w-[95px] outline opacity-50 rounded">
                        <h2 className="p-[10px] font-jakarta font-bold"> $0 </h2>
                    </button>
                </div>
            </div>

            <div className="submit pt-[5px]">
                <div id="term" className="flex flex-row text-sm mb-2">
                  <input type="checkbox" name="term" className="text-sm mx-1 "></input>
                  <p className="text-base"> By uploading files to this platform, users are agreeing to the terms and conditions of this website. </p>
                </div>
                <div className="flex py-[10px]">
                    <button className="w-[155px] h-[52px] outline rounded bg-[#FDD400]">
                        <h2 className="p-[10px] font-jakarta font-bold"> Submit </h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Crowdfund;