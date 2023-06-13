import React from "react";
import Nav from "../components/Nav";
import Payment_2 from "../components/paymentPage_2/Payment_2";
import Footer from "../components/Footer";

const Crowdfunding_2 = () => {
  return (
    <div className="Crowdfunding_2">
      <div className="w-[1440px] h-[136px]">
        <Nav />
      </div>
      <div className="flex justify-center">
        <Payment_2 />
      </div>
      <Footer />
    </div>
  );
};

export default Crowdfunding_2;
