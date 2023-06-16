import React from "react";
import "./Community.css";
import persons from "./assets/peeps.png";
import Discord from "./assets/icon/Discord";

const Community = () => {
    return(
        <div className="community">
            <div className="flex items-center justify-center gap-[98px] bg-[#FFD7C3] w-[1240px] h-[340px] outline rounded-lg">
                <div className="flex flex-col gap-[20px]">
                    <h1 className="communityTitle text-[50px]"> Join Our Community </h1>
                    <text className="font-jakarta text-[18px]">
                        Meet other indie game developer also know latest update, <br></br>
                        announcements, and more
                    </text>
                    <button className="communityBtn flex justify-center items-center bg-[#5865F2] w-[227px] h-[55px] rounded-lg outline">
                        <div className="flex gap-[5px]">
                            <Discord />
                            <text className="text-[20px] font-jakarta text-white"> Join Our Discord</text>
                        </div>
                    </button>
                </div>

                <img src={persons} alt="People Image" className="pb-[155px]"></img>
            </div>
        </div>
    );
};

export default Community;