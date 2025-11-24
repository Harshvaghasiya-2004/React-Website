import React from "react";
import TeamCarousel from "./TeamCarousel";
import NewNavbar from "../../Navbar/NewNavbar";
import TeamPage from "./TeamPage";
import CTASection from "../CTASection";

const Team = () => {
  return (
    <>
      <NewNavbar />
      <TeamPage />
      <TeamCarousel />
      <CTASection />
    </>
  );
};

export default Team;
