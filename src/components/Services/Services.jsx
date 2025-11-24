import React from "react";
import SixCard from "./six-card";
import ContactForm from "./ContactForm";
import PricingPlans from "./PricingPlans";
import TrustedBy from "./TrustedBy";
import ServicesPage from "./ServicesPage";
import NewNavbar from "../Navbar/NewNavbar";
import CTASection from "./CTASection";

export default function Services() {
  return (
    <>
      <NewNavbar />
      <ServicesPage />
      <SixCard />
      <ContactForm />
      <PricingPlans />
      <TrustedBy />
      <CTASection />
      
    </>
  );
}
