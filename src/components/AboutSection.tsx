import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
const milestones = [
  {
    year: "2021",
    era: "Cloud & Modern Standards",
    points: [
      "Launch of Multi-FPGA Partitioning Solution for ASIC/SoC Prototyping on AWS Cloud.",
      "Full adoption of the latest VHDL 2019 standards in Active-HDL and Riviera-PRO simulators.",
    ],
  },
  {
    year: "2020",
    era: "RISC-V & Safety Certification",
    points: [
      "Introduction of a comprehensive RISC-V IP/SoC Verification Solution.",
      "DO-254 Tool Qualification Data Packages (TQDP) added to ALINT-PRO, solidifying leadership in avionics compliance.",
    ],
  },
  {
    year: "2019",
    era: "Hardware Ecosystem Expansion",
    points: [
      "Release of Embedded Development Platforms for Microchip PolarFire™ and SmartFusion2™.",
      "Expansion of the FMC Daughter Cards portfolio, offering the widest range of peripherals in the EDA industry.",
    ],
  },
  {
    year: "2017–2018",
    era: "Advanced Verification & HFT",
    points: [
      "Launch of RDC (Reset Domain Crossing) verification in ALINT-PRO.",
      "Introduction of FPGA-based Accelerators for High-Frequency Trading (HFT) platforms.",
      "Strategic partnership with QuickLogic for eFPGA simulation flows.",
    ],
  },
  {
    year: "2016",
    era: "The Embedded Era (TySOM)",
    points: [
      "Launch of the TySOM™ Product Line: A complete embedded development ecosystem based on Xilinx® Zynq™ and FMC daughter cards.",
      "Introduction of ADAS (Automotive) embedded solutions.",
    ],
  },
  {
    year: "2015",
    era: "Safety-Critical Dominance",
    points: [
      "Surpassing 50+ successful DO-254 projects supported by CTS physical test systems.",
      "Major upgrade to ALINT-PRO with CDC (Clock Domain Crossing) Verification.",
    ],
  },
  {
    year: "2012–2014",
    era: "ASIC Prototyping & Requirements",
    points: [
      "Entry into the large-scale SoC/ASIC Prototyping market with the HES-7™ platform.",
      "Launch of Spec-TRACER™ for Requirements Lifecycle Management in safety-critical designs.",
      "Release of Aldec Cloud solutions.",
    ],
  },
  {
    year: "2007–2008",
    era: "Space & Static Analysis",
    points: [
      "Launch of ALINT™: An industry-standard Design Rule Checker (DRC).",
      "Introduction of the RTAX/RTSX Prototyping Solution, revolutionizing anti-fuse FPGA development for the Space industry.",
      "Debut of DO-254 CTS™ (Compliance Tool Set) for avionics hardware verification.",
    ],
  },
  {
    year: "2003–2006",
    era: "Emulation & Global Expansion",
    points: [
      "Opening of strategic offices in China and Japan.",
      "Launch of HES™ (Hardware Emulation System), establishing a strong foothold in hardware acceleration.",
      "Awarded the ClockConversion™ patent for ASIC-to-FPGA technology.",
    ],
  },
  {
    year: "2002",
    era: "The Simulator Flagship",
    points: [
      "Release of Riviera-PRO™, a high-performance, multi-platform mixed-language HDL simulator that became an industry benchmark.",
    ],
  },
  {
    year: "1999",
    era: "Foundation of Alatek",
    points: [
      "Establishment of Alatek as a strategic entity dedicated to delivering high-end hardware and software solutions.",
      "Focus on critical systems development, FPGA acceleration technologies, and expanding the European engineering footprint.",
    ],
  },
];

const getStartYear = (yearStr: string): number => {
  const match = yearStr.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 2000;
};

const gapMargins = milestones.map((m, i) => {
  if (i === 0) return 0;
  const prevYear = getStartYear(milestones[i - 1].year);
  const currYear = getStartYear(m.year);
  const gap = prevYear - currYear;
  // Tighter overlap with proportional spacing
  return gap * 16 - 48;
});

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground font-['Rajdhani']">
          About Us
        </h2>

        {/* Mission & Vision — unified statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-24 relative"
        >
          {/* Decorative vertical accent */}
          <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full hidden md:block overflow-hidden">
            <motion.div
              className="w-full h-[200%] bg-gradient-to-b from-primary via-accent via-50% to-primary"
              animate={{ y: [0, "-50%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>

          <div className="md:pl-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/70 font-['Rajdhani']">
                Our Mission
              </span>
              <p className="text-2xl md:text-3xl font-light text-foreground leading-snug mt-3">
                To empower engineers and organizations worldwide with cutting-edge
                <span className="text-primary font-medium"> FPGA, ASIC, and embedded systems </span>
                solutions — enabling faster innovation cycles, safer designs, and seamless hardware-software integration.
              </p>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-primary/40 via-border to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/70 font-['Rajdhani']">
                Our Vision
              </span>
              <p className="text-2xl md:text-3xl font-light text-foreground leading-snug mt-3">
                To be Europe's leading partner for
                <span className="text-primary font-medium"> advanced electronic design automation</span>,
                bridging the gap between innovative ideas and production-ready hardware with world-class tools and expert engineering support.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-14 text-foreground/80 font-['Rajdhani']">
          Our Journey
        </h3>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const topMargin = i === 0 ? 0 : isMobile ? 24 : gapMargins[i];

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex items-start md:items-center"
                  style={{ marginTop: topMargin }}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-primary shadow-[0_0_10px_hsl(var(--glow)/0.5)] -translate-x-1.5 md:-translate-x-1.5 top-6 z-10" />

                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 w-full">
                    {isLeft ? (
                      <>
                        <div className="pr-10">
                          <TimelineCard year={m.year} era={m.era} points={m.points} />
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="pl-10">
                          <TimelineCard year={m.year} era={m.era} points={m.points} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-10 w-full">
                    <TimelineCard year={m.year} era={m.era} points={m.points} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({
  year,
  era,
  points,
}: {
  year: string;
  era: string;
  points: string[];
}) => (
  <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow)/0.1)]">
    <span className="inline-block text-sm font-bold tracking-wider uppercase text-primary font-['Rajdhani'] bg-primary/10 px-3 py-1 rounded-md mb-2">
      {year}
    </span>
    <h3 className="text-lg font-bold text-foreground font-['Rajdhani'] mb-3">
      {era}
    </h3>
    <ul className="space-y-2">
      {points.map((p, idx) => (
        <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
          <span className="text-primary mt-1 flex-shrink-0">▸</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutSection;
