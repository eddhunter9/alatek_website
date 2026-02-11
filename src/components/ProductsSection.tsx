import { CircuitBoard, Server, Cpu, Wrench } from "lucide-react";
import ProductCard from "./ProductCard";
import productsBg from "@/assets/products-bg.png";

const accentColors = [
  "hsl(160, 80%, 45%)",
  "hsl(280, 70%, 55%)",
  "hsl(30, 90%, 55%)",
  "hsl(350, 75%, 55%)",
];

const hardwareProducts = [
  {
    title: "TySOM Boards",
    icon: CircuitBoard,
    points: [
      "Comprehensive family of embedded prototyping boards powered by Xilinx Zynq®, UltraScale+™, and Microchip PolarFire® SoCs.",
      "Scalable solutions for AI, ADAS, and Edge-Computing featuring 64-bit ARM and innovative RISC-V architectures.",
      "From cost-optimized IoT nodes to high-performance AI engines",
    ] as [string, string, string],
  },
  {
    title: "HES Boards",
    icon: Server,
    points: [
      "Versatile hardware platforms designed for both pre-silicon prototyping and High-Performance Computing (HPC) acceleration.",
      "Compatible with cutting-edge Xilinx and Microchip FPGAs for maximum emulation performance.",
      "Ultra-low latency algorithm acceleration platforms for High-Frequency Trading (HFT) and financial modeling.",
    ] as [string, string, string],
  },
  {
    title: "RT Chip Interposer",
    icon: Cpu,
    points: [
      "Innovative reprogrammable prototyping solution for Microchip RTAX-S/SL and RTSX-SU space-flight FPGAs.",
      "Eliminates the risk of costly OTP burn failures by using Flash-based ProASIC®3E technology.",
      "Footprint-compatible adaptors allowing direct plug-in verification on final flight hardware.",
    ] as [string, string, string],
  },
  {
    title: "Service",
    icon: Wrench,
    points: [
      "Professional PCB assembly services for high-complexity FPGA and SoC designs.",
      "Comprehensive Design Verification Testing ensuring hardware reliability and electrical compliance.",
      "Custom FPGA design and embedded software development tailored to specific project needs.",
    ] as [string, string, string],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative bg-cover bg-center" style={{ backgroundImage: `url(${productsBg})` }}>
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-foreground font-['Rajdhani']">
          Key ALATEK products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hardwareProducts.map((p, i) => (
            <ProductCard key={p.title} {...p} accentColor={accentColors[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
