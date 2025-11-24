import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation

import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

// Pages
import TeamDetails from "./components/Pages/TeamDetails/TeamDetails";
import Error from "./components/Pages/error/error";
import PricingPage from "./components/Pages/PricingPage/PricingPage";
import About from "./components/Pages/AboutUs/AboutUs";
import Team from "./components/Pages/Team/Team";
import FAQ from "./components/Pages/Faq/Faq";

// Home Subpages
import ITConsulting from "./components/Home/ITConsultion/IT-Consultion";
import ITSolu from "./components/Home/ITSolution/IT-Solution";
import ManagedIT from "./components/Home/ManagedIT/Managed-IT";

// Services
import Services from "./components/Services/Services";
import ServiceDetails from "./components/Services/ServiceDetails";

// Projects
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectsDetails";

// Blog
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";

import NotFound from "./components/Pages/error/NotFound404";

const AppContent = () => {
  const location = useLocation(); // Get current pathname
  const [loading, setLoading] = useState(true);

  // Pages where Navbar should NOT show (add more paths as needed)
  const hideNavbarPaths = [
    "/it-solution",
    "/it-consulting",
    "/contact",
    "/error",
    "/pricing",
    "/about",
    "/team",
    "/team-details",
    "/faq",
    "/services",
    "/service-details",
    "/projects",
    "/project-details",
    "/blog",
    "/blog-details",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<ManagedIT />} />

        <Route path="/it-solution" element={<ITSolu />} />
        <Route path="/it-consulting" element={<ITConsulting />} />
        <Route path="/managed-it" element={<ManagedIT />} />

        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/error" element={<Error />} />

        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
