import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientPartnerships from "@/components/ClientPartnerships";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ClientPartnerships />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <GetInTouchSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
