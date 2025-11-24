import ITSolutionSD from "./ITSolutionsSD";
import FAQPage from "./FAQPage";
import ServiceDetailspage from "./ServiceDetailsPage";
import NewNavbar from "../Navbar/NewNavbar";
import CTASection from "./CTASection";

export default function Services() {
  return (
    <>
      <NewNavbar />
      <ServiceDetailspage />
      <ITSolutionSD />
      <FAQPage />
      <CTASection />
      
    </>
  );
}
