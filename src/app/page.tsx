import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { Footer } from "@/components/navigation/footer";
import { ScrollReveal3D } from "@/components/ui/scroll-reveal-3d";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* High-Performance Hero Section */}
        <Hero />

        {/* Scroll-Driven 3D Entry Animation for Services Grid Section */}
        <ScrollReveal3D>
          <ServicesSection />
        </ScrollReveal3D>

        {/* Scroll-Driven 3D Entry Animation for Portfolio Section */}
        <ScrollReveal3D>
          <PortfolioSection />
        </ScrollReveal3D>
      </main>

      {/* Semantic Footer */}
      <Footer />
    </>
  );
}
