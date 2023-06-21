import React from "react";
import "./Statistic.css";
import Contributor from "./assets/icon/Contributor";
import Total from "./assets/icon/Total";
import Target from "./assets/icon/Target";
import { Link } from "react-router-dom";


const Statistic = () => {
    return (
        <div className="Statistic">
            <div className="flex flex-col gap-[50px]">
                <div className="flex gap-[50px]">
                    <div className="statBox flex flex-col gap-[12px] bg-[#FDD400] outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[140px] h-[144px] justify-center font-jakarta">
                        <Contributor className="outline rounded"/>
                        <text className="text-[14px] text-[#808080]"> Contributor <text className="text-black font-semibold text-[16px]"> 101 People </text></text>
                    </div>

                    <div className="statBox flex flex-col gap-[12px] bg-[#FDD400] outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[140px] h-[144px] justify-center font-jakarta">
                        <Total className="outline rounded"/>
                        <text className="text-[14px] text-[#808080]"> Raised Total <text className="text-black font-semibold text-[15px]"> <br></br>$1.100 </text></text>
                    </div>

                    <div className="statBox flex flex-col gap-[12px] bg-[#FDD400] outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[140px] h-[144px] justify-center font-jakarta">
                        <Target className="outline rounded"/>
                        <text className="text-[14px] text-[#808080]"> Target <br></br><text className="text-black font-semibold text-[15px]"> $2.000 </text></text>
                    </div>

                    

                </div>

                <div className="flex flex-col gap-[16px]">
                    <text className="text-[32px] font-bold"> $1.100 <text className="opacity-50 text-[22px]"> Of $2.000</text></text>

                    <div className="w-[1132px] h-[15px] bg-[#E3E3E3] outline rounded">
                        <div className="w-[566px] h-[15px] bg-[#FDD400] outline rounded"></div>
                    </div>
                </div>

                <Link to="/Payment">
                    <button className="button britanica text-[25px] outline outline-4 w-[200px] h-[54px] rounded justify-center items-center hover:bg-[#FDD400]">
                        Donate
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Statistic