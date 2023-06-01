import React from "react";
import "./Statistic.css";
import Contributor from "./assets/icon/Contributor";
import Total from "./assets/icon/Total";
import Target from "./assets/icon/Target";


const Statistic = () => {
    return (
        <div className="Statistic">
            <div className="flex flex-col gap-[51px]">
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-[12px] bg-[#FDD400] rounded outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[137px] h-[144px]">
                        <Contributor className="outline rounded"/>
                        <text className="text-[15px] opacity-50"> Contributor </text>
                        <text className="text-[15px]"> 100 </text>
                    </div>

                    <div className="flex flex-col bg-[#FDD400] gap-[12px] rounded outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[137px] h-[144px]">
                        <Total className="outline rounded"/>
                        <text  className="text-[15px] opacity-50"> Raised Total </text>
                        <text className="text-[15px]"> Rp.34 Million </text>
                    </div>

                    <div className="flex flex-col bg-[#FDD400] gap-[12px] rounded outline pt-[14px] pb-[14px] pl-[20px] pr-[20px] w-[137px] h-[144px]">
                        <Target className="outline rounded"/>
                        <text className="text-[15px] opacity-50"> Target </text>
                        <text className="text-[15px]"> Rp.70 Million </text>
                    </div>
                </div>

                <div className="flex flex-col gap-[16px]">
                    <text className="text-[32px] font-bold"> Rp. 34.485.000 <text className="opacity-50 text-[22px]"> Of 70 Million Rupiah</text></text>

                    <div className="w-[1132px] h-[15px] bg-[#E3E3E3] outline rounded">
                        <div className="w-[520px] h-[15px] bg-[#FDD400] outline rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic