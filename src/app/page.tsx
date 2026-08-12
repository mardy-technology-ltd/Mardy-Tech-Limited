import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { Footer } from "@/components/navigation/footer";
import { DigitalNodeNetwork } from "@/components/ui/digital-node-network";
import { ScrollReveal3D } from "@/components/ui/scroll-reveal-3d";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200 relative">
      {/* 3D Floating Digital Node Network Background Canvas */}
      <DigitalNodeNetwork />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 z-10">
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
    </div>
  );
}
