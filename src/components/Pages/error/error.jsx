import React from "react";
import NotFound from "./NotFound404";
import NewNavbar from "../../Navbar/NewNavbar";
import ErrorPage from "./ErrorPage";
import CTASection from "../CTASection";

const error = () => {
  return (
    <>
      <NewNavbar />
      <ErrorPage />
      <NotFound />
      <CTASection />
    </>
  );
};

export default error;
