import React from "react";
import "./System.css";

const System = () => {
    return (
        <div className="System">
            <div className="flex flex-col gap-[34px]">
                <div className="flex flex-col gap-[31px]">
                    <h1 className="text-[30px] font-bold"> System Requirements</h1>

                    <div className="flex gap-[50px]">
                        <text className="text-[20px] font-semibold"> WINDOWS </text>
                        <text className="text-[20px] opacity-50"> MACOS </text>
                        <text className="text-[20px] opacity-50"> LINUX </text>
                    </div>

                    <div className="flex gap-[146px]">
                        <div className="flex flex-col gap-[30px]">
                            <text className="text-[20px] opacity-50"> Minimum </text>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> OS </text>
                                <text className="text-[20px] font-semibold"> Windows 10 - 32 Bit </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Processor </text>
                                <text className="text-[20px] font-semibold"> Intel i3 3200 U </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Memory </text>
                                <text className="text-[20px] font-semibold"> 2 GB RAM DDR3 </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Storage </text>
                                <text className="text-[20px] font-semibold"> 5GB Free Space </text>
                            </div>

                        </div>

                        <div className="flex flex-col gap-[30px]">
                            <text className="text-[20px] opacity-50"> Recommended </text>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> OS </text>
                                <text className="text-[20px] font-semibold"> Windows 10 - 32 Bit </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Processor </text>
                                <text className="text-[20px] font-semibold"> Intel i3 3200 U </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Memory </text>
                                <text className="text-[20px] font-semibold"> 2 GB RAM DDR3 </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px]"> Storage </text>
                                <text className="text-[20px] font-semibold"> 5GB Free Space </text>
                            </div>
                            
                        </div>    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default System