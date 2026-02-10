import { CircuitBoard, Wifi, Zap, HardDrive } from "lucide-react";
import ProductCard from "./ProductCard";

const accentColors = [
  "hsl(160, 80%, 45%)",
  "hsl(280, 70%, 55%)",
  "hsl(30, 90%, 55%)",
  "hsl(350, 75%, 55%)",
];

const hardwareProducts = [
  {
    title: "FPGA Dev Board X1",
    icon: CircuitBoard,
    points: [
      "High-performance FPGA evaluation board for rapid prototyping",
      "Supports DDR4 memory and high-speed serial transceivers",
      "Built-in JTAG programmer and debug interface",
    ] as [string, string, string],
  },
  {
    title: "IoT Gateway Module",
    icon: Wifi,
    points: [
      "Industrial IoT gateway with multi-protocol support",
      "Edge computing capabilities with real-time data processing",
      "Secure cloud connectivity with TLS 1.3 encryption",
    ] as [string, string, string],
  },
  {
    title: "Power Management IC",
    icon: Zap,
    points: [
      "Ultra-low noise power regulation for sensitive analog circuits",
      "Wide input voltage range with 95%+ efficiency",
      "Compact QFN package with integrated protection features",
    ] as [string, string, string],
  },
  {
    title: "Data Acquisition System",
    icon: HardDrive,
    points: [
      "Multi-channel high-speed data acquisition platform",
      "24-bit ADC resolution with configurable sampling rates",
      "Rugged enclosure designed for harsh industrial environments",
    ] as [string, string, string],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground font-['Rajdhani']">
          Key ALATEK Products
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Hardware engineered for reliability and cutting-edge performance.
        </p>
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
