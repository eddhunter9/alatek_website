import { Code, ShieldCheck, Cpu, Layers } from "lucide-react";
import ProductCard from "./ProductCard";
import softwareBg from "@/assets/software-bg.png";

const softwareProducts = [
  {
    title: "Riviera-PRO",
    icon: Code,
    points: [
      "Premium HDL simulator for FPGA and ASIC designers",
      "Ideal for mission-critical applications requiring robust verification libraries (OSVVM, UVVM)",
      "Delivers the best ROI in the EDA market",
    ] as [string, string, string],
  },
  {
    title: "ALINT-PRO",
    icon: ShieldCheck,
    points: [
      "Advanced Design Rule Checking and CDC/RDC analysis with unique \"Unit Linting\" technology.",
      "Vendor-agnostic framework supporting direct import of Vivado, Quartus, and ISE projects.",
      "Automated batch-mode processing optimized for CI/CD and Jenkins pipelines.",
    ] as [string, string, string],
  },
  {
    title: "DO-254/CTS",
    icon: Cpu,
    points: [
      "DO-254 compliant FPGA verification for safety-critical applications in avionics, space, and defense.",
      "At-speed In-Hardware Verification with automated testbench reuse.",
      "Proven reduction of verification cycle from months to weeks with FAA-recognized tool flows.",
    ] as [string, string, string],
  },
  {
    title: "BFM",
    icon: Layers,
    points: [
      "Comprehensive AXI3/4/Stream models removing the need for manual protocol verification.",
      "Eliminates time-consuming manual testbench development for standard bus protocols.",
      "High-throughput communication via independent 5-channel architecture with internal FIFO buffering.",
    ] as [string, string, string],
  },
];

const SoftwareSection = () => {
  return (
    <section id="software" className="relative overflow-visible">
      {/* Background fixed to a set height, doesn't grow with cards */}
      <div className="absolute top-0 left-0 right-0 h-[900px] bg-cover bg-center" style={{ backgroundImage: `url(${softwareBg})` }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 pt-32 pb-16 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-foreground font-['Rajdhani']">
          ALATEK software solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {softwareProducts.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
