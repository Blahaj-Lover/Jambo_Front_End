import React from "react";
import "./System.css";

const System = () => {
    return (
        <div className="System">
            <div className="flex flex-col gap-[34px]">
                <div className="flex flex-col gap-[31px]">
                    <h1 className="britanica text-[35px]"> System Requirements</h1>

                    <div className="flex gap-[50px]">
                        <text className="text-[20px] font-jakarta font-semibold"> WINDOWS </text>
                        <text className="text-[20px] opacity-50 font-jakarta"> MACOS </text>
                        <text className="text-[20px] opacity-50 font-jakarta"> LINUX </text>
                    </div>

                    <div className="flex gap-[146px]">
                        <div className="flex flex-col gap-[30px]">
                            <text className="text-[20px] opacity-50 font-jakarta"> Minimum </text>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> OS </text>
                                <text className="text-[20px] font-semibold font-jakarta"> Windows 10 - 32 Bit </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Processor </text>
                                <text className="text-[20px] font-semibold font-jakarta"> Intel i3 3200 U </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Memory </text>
                                <text className="text-[20px] font-semibold font-jakarta"> 2 GB RAM DDR3 </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Storage </text>
                                <text className="text-[20px] font-semibold font-jakarta"> 5GB Free Space </text>
                            </div>

                        </div>

                        <div className="flex flex-col gap-[30px]">
                            <text className="text-[20px] opacity-50 font-jakarta"> Recommended </text>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> OS </text>
                                <text className="text-[20px] font-semibold font-jakarta"> Windows 10 - 32 Bit </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Processor </text>
                                <text className="text-[20px] font-semibold font-jakarta"> Intel i3 3200 U </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Memory </text>
                                <text className="text-[20px] font-semibold font-jakarta"> 2 GB RAM DDR3 </text>
                            </div>

                            <div className="flex flex-col">
                                <text className="opacity-50 text-[20px] font-jakarta"> Storage </text>
                                <text className="text-[20px] font-semibold font-jakarta"> 5GB Free Space </text>
                            </div>
                            
                        </div>    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default System