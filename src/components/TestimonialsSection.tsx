import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Their FPGA prototyping boards significantly accelerated our development cycle.",
    company: "Aerospace Corp.",
    solution: "TySOM-3A-ZU19EG",
  },
  {
    quote: "Outstanding support and deep technical expertise in FPGA design services.",
    company: "Defense Systems Ltd.",
    solution: "HES Board",
  },
  {
    quote: "We reduced our verification time by 40% using their hardware emulation platform.",
    company: "Silicon Valley Startup",
    solution: "HES-HPC",
  },
  {
    quote: "Reliable partner for space-grade FPGA prototyping with excellent turnaround.",
    company: "Space Technologies GmbH",
    solution: "RT Chip Interposer",
  },
  {
    quote: "Their custom PCB assembly quality exceeded our expectations for complex SoC designs.",
    company: "MedTech Solutions",
    solution: "Service",
  },
  {
    quote: "A key technology partner enabling our edge-computing AI deployments.",
    company: "AutoDrive Inc.",
    solution: "TySOM-3-ZU7EV",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-foreground font-['Rajdhani']">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow)/0.1)]"
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
                <p className="text-xs text-primary/80">
                  Related Solution: {t.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
