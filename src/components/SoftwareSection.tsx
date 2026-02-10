import { Code, Cpu, BarChart3, Shield } from "lucide-react";
import ProductCard from "./ProductCard";

const softwareProducts = [
  {
    title: "HDL Simulator Pro",
    icon: Code,
    points: [
      "Premium HDL simulator for FPGA and ASIC designers",
      "Supports VHDL, Verilog, and SystemVerilog standards",
      "Integrated waveform viewer with advanced debugging tools",
    ] as [string, string, string],
  },
  {
    title: "Embedded IDE Suite",
    icon: Cpu,
    points: [
      "Full-featured IDE for embedded system development",
      "Real-time code analysis and optimization suggestions",
      "Seamless integration with popular microcontroller families",
    ] as [string, string, string],
  },
  {
    title: "Signal Analyzer",
    icon: BarChart3,
    points: [
      "Advanced signal processing and analysis platform",
      "Multi-channel data acquisition and visualization",
      "Custom plugin architecture for domain-specific analysis",
    ] as [string, string, string],
  },
  {
    title: "SecureLink Manager",
    icon: Shield,
    points: [
      "Enterprise-grade firmware security management",
      "Encrypted OTA update distribution system",
      "Compliance reporting for industry certifications",
    ] as [string, string, string],
  },
];

const SoftwareSection = () => {
  return (
    <section id="software" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground font-['Rajdhani']">
          Software Solutions
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Powerful tools built for engineers who demand precision and performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwareProducts.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
