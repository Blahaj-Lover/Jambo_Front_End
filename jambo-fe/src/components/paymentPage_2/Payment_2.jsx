import React from "react";
import "./Payment_2.css";
import Checklist from "./assets/checklist";
import { Link } from "react-router-dom";

const Payment_2 = () => {
  return (
    <div className="Payment_2">
      <div className="flex flex-col gap-[30px] items-center outline rounded-lg p-10">
        <Checklist className="bg-[#08C39E] rounded-full" />
        <h1 className="text-[32px] font-jakarta font-bold text-center">
          {" "}
          Thank You For Your <br></br> Donation🎉{" "}
        </h1>

        <div className="flex gap-[150px] text-[20px] font-jakarta font-semibold">
          <div className="flex flex-col gap-[30px]">
            <text> Payment: </text>
            <text> To: </text>
            <text> Total: </text>
          </div>

          <div className="flex flex-col gap-[30px]">
            <text> PayPal </text>
            <text> Spirit Well </text>
            <text> $100 </text>
          </div>
        </div>

        <Link to="/About">
          <button className="Back w-[398px] h-[45.35px] outline font-jakarta font-extrabold text-[16px] rounded-lg">
            {" "}
            Back{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment_2;