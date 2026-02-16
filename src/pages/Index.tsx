import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoftwareSection from "@/components/SoftwareSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SoftwareSection />
        {/* <ProductsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
