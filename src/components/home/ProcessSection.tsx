import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Headphones, PenTool, Code, LifeBuoy } from "lucide-react";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";
import workflowIllustration from "@/assets/illustrations/workflow-isometric.webp";
import { useState, useRef } from "react";

const steps = [
  {
    icon: Headphones,
    title: "Listen",
    description: "We start by understanding your business, challenges, and goals to ensure we build exactly what you need.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We create clear designs and specifications so you can see exactly what you're getting before we build.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Our team develops your solution with clean code, regular updates, and transparent communication throughout.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "We don't disappear after launch. We provide ongoing support and maintenance to keep things running smoothly.",
  },
];

export function ProcessSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 15, y: y * 15 });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      className="relative py-20 lg:py-28 bg-secondary/30 overflow-hidden"
    >
      {/* Floating Tech Elements - visible on all screens */}
      <FloatingTechElements variant="minimal" className="opacity-50 lg:opacity-100" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionEyebrow>How We Work</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, reliable process that keeps you informed every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-border" />
              )}
              
              <div className="text-center group cursor-default">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Isometric Illustration - now visible on all screens */}
        <div className="flex justify-center animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.5s" }}>
          <div 
            className="relative group"
            style={{
              
              transition: 'transform 0.3s ease-out'
            }}
          >
            
            {/* Illustration with white fade edges */}
            <div className="relative">
              <img loading="lazy" decoding="async" 
                src={workflowIllustration} 
                alt="Tech workflow process illustration showing connected systems and collaboration" 
                className="relative max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
