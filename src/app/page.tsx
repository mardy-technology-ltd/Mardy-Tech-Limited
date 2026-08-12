import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* High-Performance Hero Section */}
        <Hero />

        {/* Interactive Services Grid Section */}
        <ServicesSection />

        {/* Animated Portfolio Showcase Section */}
        <PortfolioSection />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
