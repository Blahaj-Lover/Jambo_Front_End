import React from "react";
import "./Payment_1.css";
import PayPal from "./assets/PayPal";
import Credit from "./assets/CreditCard";
import { Link } from "react-router-dom";

const Payment_1 = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[30px] outline p-10 rounded-lg">
        <div className="flex flex-col gap-[20px]">
          <text className="font-jakarta text-[18px] font-extrabold">
            {" "}
            Enter how much money you want to contribute{" "}
          </text>
          <div class="w-[402px]">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
              type="number"
                class="paymentBox peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2 text-sm font-jakarta outline outline-0 transition-all placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent [&::-webkit-inner-spin-button]:appearance-none"
                placeholder=" "
              />
              <label class="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-jakarta leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black">
                $
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <text className="font-jakarta text-[18px] font-extrabold">
            {" "}
            Payment Methods{" "}
          </text>
          <div className="flex gap-[30px] items-center">
            <button className="flex flex-col gap-[12px] items-center justify-center w-[111px] h-[109px] outline rounded-lg hover:bg-[#FDD400] focus:bg-[#FDD400]">
              <PayPal />
              <text className="font-jakarta text-[16px] font-bold">
                {" "}
                PayPal{" "}
              </text>
            </button>

            <button className="flex flex-col gap-[12px] items-center justify-center w-[111px] h-[109px] outline rounded-lg hover:bg-[#FDD400] focus:bg-[#FDD400]">
              <Credit />
              <text className="font-jakarta text-[16px] font-bold"> CC </text>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <Link to="/Success">
            <button className="Confirm w-[398px] h-[45.35px] bg-[#FDD400] outline font-jakarta font-extrabold text-[16px] rounded-lg">
              {" "}
              Proceed{" "}
            </button>
          </Link>

          <Link to="/spirit-well">
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
