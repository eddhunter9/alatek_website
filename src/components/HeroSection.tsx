import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Engineering the <span className="text-primary">Future</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Cutting-edge electronic products and software solutions for FPGA, ASIC, and embedded system designers.
        </p>
        <Button asChild size="lg" className="text-base px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--glow)/0.3)]">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
