import React from "react";
import QuickFAQ from "./QuickFAQ";
import QuickAnswersFAQ from "./QuickAnswersFAQ";
import NewNavbar from "../../Navbar/NewNavbar";
import FaqPage from "./FaqPage";
import CTASection from "../CTASection";

const Faq = () => {
  return (
    <>
      <NewNavbar /> 
      <FaqPage />
      <QuickFAQ />
      <QuickAnswersFAQ />
      <CTASection />
    </>
  );
};

export default Faq;
