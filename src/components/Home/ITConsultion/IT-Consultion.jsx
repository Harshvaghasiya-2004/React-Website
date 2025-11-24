import React from 'react'
import HeroMiddle from './HeroMiddle'
import HeroSection from './Trusted'
import TrustedBy from './TrustedBy'
import SixCard from './six-card'
import AboutTekmino from './AboutTekmino'
import RecentProjects from './RecentProjects'
import TestimonialsSection from './TestimonialsSection'
import ProcessSection from './ProcessSection'
import Pricing from './Pricing'
import QuickFAQ from './QuickFAQ'
import InsightsSection from './InsightsSection'
import MarqueeTicker from "./MarqueeTicker"
import ITConsultionPage from './ITConsultionPage'
import NewNavbar from "../../Navbar/NewNavbar";



const ITConsultion = () => {
  return (
    <>
    {/* <HeroMiddle /> */}
    <NewNavbar />
    <ITConsultionPage />
    <HeroSection />
    <TrustedBy />
    <SixCard />
    <AboutTekmino />
    <RecentProjects />
    <TestimonialsSection />
    <ProcessSection />
    <Pricing />
    <QuickFAQ />
    <InsightsSection />
    <MarqueeTicker />
    </>
  )
}

export default ITConsultion