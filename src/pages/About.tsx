import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Headphones, 
  PenTool, 
  Code, 
  LifeBuoy,
  Target,
  Shield,
  Users,
  Sparkles
} from "lucide-react";
import aboutHeroImage from "@/assets/illustrations/about-hero.png";
import processIllustration from "@/assets/illustrations/process-isometric.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";
import { TechNetworkBackground } from "@/components/ui/tech-network-background";
import { useState, useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "We build straightforward solutions that solve real problems. No unnecessary features, no over-engineering.",
  },
  {
    icon: Shield,
    title: "Reliability First",
    description: "We deliver what we promise, on time. If something goes wrong, we fix it. Simple as that.",
  },
  {
    icon: Users,
    title: "Long-term Relationships",
    description: "We're not here for one-off projects. We want to be your technology partner for years to come.",
  },
  {
    icon: Sparkles,
    title: "Quality in Every Detail",
    description: "From clean code to polished interfaces, we care about the details that make a difference.",
  },
];

const process = [
  {
    step: 1,
    icon: Headphones,
    title: "Listen",
    description: "We start by understanding your business, your challenges, and your goals. What problem are you trying to solve? What does success look like?",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description: "We create clear specifications and visual designs so you know exactly what you're getting. No surprises, no scope creep.",
  },
  {
    step: 3,
    icon: Code,
    title: "Build",
    description: "Our team develops your solution with regular updates and demos. You'll always know where things stand.",
  },
  {
    step: 4,
    icon: LifeBuoy,
    title: "Support",
    description: "We don't disappear after launch. We provide ongoing support, maintenance, and improvements as your needs evolve.",
  },
];

const differentiators = [
  "We don't oversell or overpromise",
  "We communicate clearly and regularly",
  "We build for maintainability, not just launch day",
  "We provide honest timelines and stick to them",
  "We're upfront about costs—no hidden fees",
  "We focus on your business goals, not just technical specs",
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const processRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!processRef.current) return;
    const rect = processRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 15, y: y * 15 });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero pt-20 pb-32 lg:pt-28 lg:pb-44 overflow-hidden relative">
        {/* Floating Tech Elements - visible on all screens */}
        <FloatingTechElements className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                About United Tech
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                We're a technology company based in <strong className="text-navy">Addis Ababa, Ethiopia</strong>, 
                building ERP systems, websites, and applications for growing businesses. 
                We value clarity, reliability, and long-term relationships.
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Addis Ababa, Ethiopia
              </p>
            </div>
            {/* Illustration - visible on all screens, below text on mobile */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-sky-light/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={aboutHeroImage} 
                  alt="About us illustration" 
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-float-subtle transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slide-up">
                <SectionEyebrow>Who We Are</SectionEyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                  Why We Exist
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Too many businesses struggle with technology partners who overpromise 
                  and underdeliver. They deal with missed deadlines, unexpected costs, 
                  and solutions that don't quite fit their needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We started United Tech to be different. We believe in honest 
                  communication, realistic expectations, and solutions that actually 
                  work. Our goal is to be the technology partner you can rely on.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border/50 card-hover opacity-0 animate-slide-up stagger-2 relative overflow-hidden">
                {/* Tech Network Background */}
                <TechNetworkBackground variant="default" />
                
                <h3 className="text-lg font-semibold text-navy mb-6 relative z-10">
                  What Makes Us Different
                </h3>
                <ul className="space-y-4 relative z-10">
                  {differentiators.map((item, index) => (
                    <li key={item} className={`flex items-start gap-3 opacity-0 animate-fade-in stagger-${index + 1}`}>
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 icon-hover" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <SectionEyebrow>Our Values</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className={`text-center card-hover p-6 rounded-2xl opacity-0 animate-slide-up stagger-${index + 1} bg-card border border-border/50 relative overflow-hidden`}
              >
                {/* Tech Network Background */}
                <TechNetworkBackground variant="compact" />
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors icon-hover relative z-10">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2 relative z-10">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        className="py-20 lg:py-28 bg-background relative overflow-hidden"
      >
        {/* Floating Tech Elements - visible on all screens */}
        <FloatingTechElements variant="minimal" className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <SectionEyebrow>Our Process</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, reliable process that keeps you informed every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Process Steps - Left Side */}
            <div>
              {process.map((item, index) => (
                <div key={item.title} className={`relative opacity-0 animate-slide-up stagger-${index + 1}`}>
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="absolute left-7 top-20 w-0.5 h-16 bg-border" />
                  )}
                  
                  <div className="flex gap-6 mb-12 group">
                    {/* Step Number */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration - visible on all screens, below steps on mobile */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div 
                className="relative group"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Pulsing glow effect - smaller on mobile */}
                <div className="absolute -inset-6 lg:-inset-12 bg-gradient-to-r from-primary/20 via-sky-light/25 to-primary/20 rounded-3xl blur-2xl lg:blur-3xl animate-pulse-slow" />
                <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-primary/15 to-sky-light/15 rounded-3xl blur-xl lg:blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Illustration with white fade edges */}
                <div className="relative">
                  <img 
                    src={processIllustration} 
                    alt="Structured engineering process illustration showing connected systems" 
                    className="relative max-w-xs sm:max-w-sm lg:max-w-lg w-full rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] animate-float-slow"
                  />
                  {/* White fade overlay on edges */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-white via-transparent to-white/50" />
                  <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-r from-white/60 via-transparent to-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        {/* Decorative tech illustrations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-sky-light/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-subtle" />
          
          {/* SVG elements */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aboutCtaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(270, 70%, 60%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M0,60 Q200,30 400,70 T800,50" stroke="url(#aboutCtaGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" />
            <polygon points="90%,30% 93%,35% 93%,45% 90%,50% 87%,45% 87%,35%" stroke="hsl(199, 89%, 48%)" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-float-subtle" />
            <circle cx="8%" cy="60%" r="3" fill="hsl(199, 89%, 48%)" opacity="0.25" className="animate-pulse-slow" />
            <circle cx="95%" cy="75%" r="2" fill="hsl(270, 70%, 60%)" opacity="0.2" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
          </svg>
          
          {/* Geometric shapes */}
          <div className="absolute top-12 right-[12%] w-10 h-10 border border-primary/20 rotate-45 animate-spin-slower" />
          <div className="absolute bottom-16 left-[10%] w-8 h-8 border border-sky-light/15 rounded-full animate-float-slow" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Ready to start a project? Or just want to chat about your ideas? 
              Either way, we'd love to hear from you.
            </p>
            <Button asChild variant="hero" size="xl" className="hover:scale-105 transition-transform">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
