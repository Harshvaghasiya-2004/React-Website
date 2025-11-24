import React from "react";
import ProfilePage from "./ProfilePage";
import ContactPage from "./ContactPage";
import NewNavbar from "../../Navbar/NewNavbar";
import TeamDetailsPage from "./TeamDetailsPage";
import CTASection from "../CTASection";


const TeamDetails = () => {
  return (
    <>
      <NewNavbar />
      <TeamDetailsPage />
      <ProfilePage />
      <ContactPage />
      <CTASection />
    </>
  );
};

export default TeamDetails;
