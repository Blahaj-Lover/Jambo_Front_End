import React from "react";
import "./SuccessPage.css";
import Success from "./assets/success";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="success">
      <div className="flex flex-col gap-[30px] justify-center items-center outline rounded-lg p-[50px]">
        <Success className="bg-[#08C39E] rounded-full" />
        <h1 className="text-[32px] font-jakarta font-bold text-center">
          {" "}
          Congratulation <br></br> Your Game Has Been Published🎉{" "}
        </h1>

        <Link to="/Necken">
          <button className="viewGame w-[398px] h-[45.35px] outline font-jakarta font-extrabold text-[16px] rounded-lg bg-[#FDD400]">
            {" "}
            View Game{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;