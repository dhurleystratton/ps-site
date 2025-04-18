import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TheSystemSection from "@/components/TheSystemSection";
import InterstitialImageSection from "@/components/InterstitialImageSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContentEcosystemSection from "@/components/ContentEcosystemSection";
import PhilosophySection from "@/components/PhilosophySection";
import TetrahedronSection from "@/components/TetrahedronSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <TheSystemSection />
      <InterstitialImageSection
        imagePath="/images/skydiver.jpg"
        altText="Skydiver jumping from plane with view of clouds below"
      />
      <ServicesSection />
      <InterstitialImageSection
        imagePath="/images/tattooed-palm.jpg"
        altText="Close-up of a tattooed palm with watch"
      />
      <CaseStudiesSection />
      <InterstitialImageSection
        imagePath="/images/triangle-prism.jpg"
        altText="Glowing triangle prism with red edges and amber light"
      />
      <ContentEcosystemSection />
      <PhilosophySection />
      <TetrahedronSection />
      <InterstitialImageSection
        imagePath="/images/mountain-view.jpg"
        altText="Man sitting on rock overlooking mountains"
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
