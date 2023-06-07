import Reacta from "react";
import Nav from "../components/Nav";
import Payment_1 from "../components/paymentPage_1/Payment_1";
import Footer from "../components/Footer";

const Crowdfunding_1 = () => {
  return (
    <div className="Crowdfunding_1">
      <div className="w-[1440px] h-[136px]">
        <Nav />
      </div>
      <div className="flex justify-center">
        <Payment_1 />
      </div>
      <Footer />
    </div>
  );
};

export default Crowdfunding_1;
