// app/itsolution/page.tsx
import View from "./view";
import TrustedBy from "./TrustedBy";
import WhyChooseUs from "./WhyChooseUs";
import AboutTekmino from "./AboutTekmino";
import ServicesSection from "./ServicesSection";
import ClientsFeedback from "./ClientsFeedback";
import TeamSection from "./TeamSection";
import TechnologiesSection from "./TechnologiesSection";
import ProjectsSection from "./ProjectsSection";
import ProcessSection from "./ProcessSection";
import ContactForm from "./ContactForm";
import InsightsSection from "./InsightsSection";
import NewNavbar from "../../Navbar/NewNavbar";
import ITSolutionPage from "./ITSolutionPage";
import CTASection from "../../Pages/CTASection";
export default function ITSolution() {
  return (
    <>
      <NewNavbar />
      <ITSolutionPage />
      <View />
      <TrustedBy />
      <WhyChooseUs />
      <AboutTekmino />
      <ServicesSection />
      <ClientsFeedback />
      <TeamSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactForm />
      <InsightsSection />
      <CTASection />
    </>
  );
}
