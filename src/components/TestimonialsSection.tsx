import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import testimonialsBg from "@/assets/testimonials-bg.jpg";

const testimonials = [
  {
    quote: "Their FPGA prototyping boards significantly accelerated our development cycle.",
    company: "Aerospace Corp.",
    solution: "TySOM-3A-ZU19EG",
    solutionHref: "#products",
  },
  {
    quote: "Outstanding support and deep technical expertise in FPGA design services.",
    company: "Defense Systems Ltd.",
    solution: "Riviera-PRO",
    solutionHref: "#software",
    solutionId: "Riviera-PRO",
  },
  {
    quote: "We reduced our verification time by 40% using their hardware emulation platform.",
    company: "Silicon Valley Startup",
    solution: "ALINT-PRO",
    solutionHref: "#software",
    solutionId: "ALINT-PRO",
  },
  {
    quote: "Reliable partner for space-grade FPGA prototyping with excellent turnaround.",
    company: "Space Technologies GmbH",
    solution: "DO-254/CTS",
    solutionHref: "#software",
    solutionId: "DO-254/CTS",
  },
  {
    quote: "Their custom PCB assembly quality exceeded our expectations for complex SoC designs.",
    company: "MedTech Solutions",
    solution: "BFM",
    solutionHref: "#software",
    solutionId: "BFM",
  },
  {
    quote: "A key technology partner enabling our edge-computing AI deployments.",
    company: "AutoDrive Inc.",
    solution: "Riviera-PRO",
    solutionHref: "#software",
    solutionId: "Riviera-PRO",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <motion.div className="absolute -inset-y-[20%] inset-x-0 pointer-events-none" style={{ y: bgY }}>
        <img src={testimonialsBg} alt="" className="w-full h-full object-cover opacity-[0.5]" />
      </motion.div>
      <div className="absolute inset-0 bg-background/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-foreground font-['Rajdhani']">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border-2 border-border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_hsl(var(--glow)/0.15)]"
            >
              <div>
                <Quote size={28} className="text-primary/60 mb-3" />
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-border pt-4 mt-auto">
                <p className="font-semibold text-foreground font-['Rajdhani'] text-lg">
                  {t.company}
                </p>
                <a
                  href={t.solutionHref}
                  onClick={(e) => {
                    if (t.solutionId) {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("expand-product", { detail: t.solutionId }));
                      document.querySelector(t.solutionHref)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-1"
                >
                  Solution: {t.solution} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
