import React from "react";
import Pricing from "./Pricing";
import NewNavbar from "../../Navbar/NewNavbar";
import PricingPage01 from "./PricingPage-1";
import CTASection from "../CTASection";

const PricingPage = () => {
  return (
    <>
      <NewNavbar />
      <PricingPage01 />
      <Pricing />
      <CTASection />
    </>
  );
};

export default PricingPage;
