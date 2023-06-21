import React from "react";
import "./Payment_1.css";
import PayPal from "./assets/PayPal";
import Credit from "./assets/CreditCard";
import { Link } from "react-router-dom";

const Payment_1 = () => {
  return (
    <div className="Payment_1">
      <div className="flex flex-col gap-[30px] outline p-10 rounded-lg">
        <div className="flex flex-col gap-[20px]">
          <text className="font-jakarta text-[18px] font-extrabold">
            {" "}
            Enter how much money you want to contribute{" "}
          </text>
          <input
            type="text"
            id="money"
            className="outline outline-2 rounded-lg h-[48px] text-lg pl-[25px]"
            placeholder="$"
          ></input>
        </div>

        <div className="flex flex-col gap-[20px]">
          <text className="font-jakarta text-[18px] font-extrabold">
            {" "}
            Payment Methods{" "}
          </text>
          <div className="flex gap-[30px] items-center">
            <div className="methoods_2 flex flex-col gap-[12px] items-center justify-center bg-[#FDD400] w-[111px] h-[109px] outline rounded-lg cursor-pointer">
              <PayPal />
              <text className="font-jakarta text-[16px] font-bold">
                {" "}
                PayPal{" "}
              </text>
            </div>

            <div className="flex flex-col gap-[12px] items-center justify-center w-[111px] h-[109px] outline rounded-lg cursor-pointer">
              <Credit />
              <text className="font-jakarta text-[16px] font-bold"> CC </text>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <Link to="/Success">
            <button className="Confirm w-[398px] h-[45.35px] bg-[#FDD400] outline font-jakarta font-extrabold text-[16px] rounded-lg">
              {" "}
              Proceed{" "}
            </button>
          </Link>

          <Link to="/About">
            <button className="Back w-[398px] h-[45.35px] outline font-jakarta font-extrabold text-[16px] rounded-lg">
              {" "}
              Back{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment_1;
