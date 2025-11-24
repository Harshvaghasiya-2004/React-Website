import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import AboutTekmino from "./AboutTekmino";
import TeamSection from "./TeamSection";
import  ClientsFeedback  from "./ClientsFeedback";
import  QuickFAQ from "./QuickFAQ";
import TrustedBy from "./TrustedBy";
import NewNavbar from "../../Navbar/NewNavbar";
import AboutPage from "./AboutPage";
import CTASection from "../CTASection";

const AboutUs = () => {
  return (
    <>
      <NewNavbar />
      <AboutPage />
      <WhyChooseUs />
      <AboutTekmino />
      <TeamSection />
      <ClientsFeedback />
      <QuickFAQ />
      <TrustedBy />
      <CTASection />
    </>
  );
};

export default AboutUs;
