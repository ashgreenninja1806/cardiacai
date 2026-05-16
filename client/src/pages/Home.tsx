import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Main landing page for CardiacAI
 * Combines Navbar, Hero section, Features section, and Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
