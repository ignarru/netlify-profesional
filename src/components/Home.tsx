import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ServicesSection from "./ServicesSection"
import ProcessSection from "./ProcessSection"
import ResultsSection from "./ResultsSection"
import TestimonialsSection from "./TestimonialsSection"
import FaqSection from "./FaqSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import FloatingWhatsapp from "./FloatingWhatsapp"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}