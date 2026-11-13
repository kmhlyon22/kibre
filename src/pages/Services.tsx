import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2,
  Shield,
  Zap,
  BarChart3,
  Search,
  Layers,
  Code2
} from "lucide-react";
import servicesHeroImage from "@/assets/illustrations/services-hero.png";
import { FloatingTechElements } from "@/components/ui/floating-tech-elements";

const services = [
  {
    id: "erp",
    icon: Database,
    title: "ERP Systems",
    tagline: "Streamline Your Business Operations",
    description: "Custom enterprise resource planning solutions designed specifically for your business needs. We build secure, scalable systems that grow with you.",
    features: [
      { icon: BarChart3, text: "Real-time business analytics and reporting" },
      { icon: Layers, text: "Inventory and supply chain management" },
      { icon: Shield, text: "Secure data handling and user permissions" },
      { icon: Zap, text: "Automated workflows to reduce manual work" },
    ],
    benefits: [
      "Reduce operational costs by automating repetitive tasks",
      "Make better decisions with real-time data insights",
      "Scale your operations without adding complexity",
      "Integrate all your business processes in one place",
    ],
  },
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    tagline: "Professional Websites That Convert",
    description: "Fast, responsive websites that look professional on every device. Optimized for search engines to help you reach more customers.",
    features: [
      { icon: Smartphone, text: "Mobile-first responsive design" },
      { icon: Search, text: "SEO optimization for better visibility" },
      { icon: Zap, text: "Fast loading speeds for better user experience" },
      { icon: Shield, text: "Secure hosting and SSL certificates" },
    ],
    benefits: [
      "Reach customers on any device with responsive design",
      "Get found on Google with built-in SEO best practices",
      "Convert visitors into leads with clear calls-to-action",
      "Easy content management for your team",
    ],
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "App Development",
    tagline: "Apps Your Users Will Love",
    description: "Android and web applications with clean interfaces and secure backends. We focus on usability and performance to create apps people actually enjoy using.",
    features: [
      { icon: Code2, text: "Clean, maintainable code architecture" },
      { icon: Layers, text: "Intuitive user interface design" },
      { icon: Shield, text: "Secure backend and data protection" },
      { icon: Zap, text: "Optimized performance and fast load times" },
    ],
    benefits: [
      "Engage customers with a dedicated mobile experience",
      "Increase efficiency with streamlined workflows",
      "Build brand loyalty with a polished app experience",
      "Scale easily as your user base grows",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero pt-20 pb-32 lg:pt-28 lg:pb-44 overflow-hidden relative">
        {/* Floating Tech Elements - visible on all screens */}
        <FloatingTechElements className="opacity-50 lg:opacity-100" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground">
                We focus on three core areas where we deliver the most value: 
                ERP systems, websites, and applications. Quality over quantity.
              </p>
            </div>
            {/* Illustration - visible on all screens, below text on mobile */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-sky-light/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={servicesHeroImage} 
                  alt="Services illustration" 
                  className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-float-subtle mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${index % 2 === 1 ? 'bg-secondary/30' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} opacity-0 animate-slide-up`}>
                {/* Icon & Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center icon-hover">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{service.tagline}</span>
                </div>

                {/* Title & Description */}
                <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature.text} 
                      className={`flex items-start gap-3 opacity-0 animate-fade-in stagger-${featureIndex + 1}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild variant="hero" className="hover:scale-105 transition-transform">
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Benefits Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} opacity-0 animate-slide-up stagger-2`}>
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card card-hover relative overflow-hidden">
                  {/* Tech Network Background */}
                  
                  <h3 className="text-lg font-semibold text-heading mb-6 relative z-10">
                    What You Get
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefit} 
                        className={`flex items-start gap-3 opacity-0 animate-fade-in stagger-${benefitIndex + 1}`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 icon-hover" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
              <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(270, 70%, 60%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M0,80 Q150,40 300,80 T600,60" stroke="url(#ctaGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" />
            <polygon points="85%,20% 88%,25% 88%,35% 85%,40% 82%,35% 82%,25%" stroke="hsl(199, 89%, 48%)" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-float-subtle" />
            <circle cx="10%" cy="70%" r="3" fill="hsl(199, 89%, 48%)" opacity="0.25" className="animate-pulse-slow" />
            <circle cx="92%" cy="60%" r="2" fill="hsl(270, 70%, 60%)" opacity="0.2" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
          </svg>
          
          {/* Geometric shapes */}
          <div className="absolute top-12 right-[10%] w-10 h-10 border border-primary/20 rotate-45 animate-spin-slower" />
          <div className="absolute bottom-16 left-[15%] w-8 h-8 border border-sky-light/15 rounded-full animate-float-slow" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Let's have a conversation. We'll help you figure out the best approach 
              for your specific situation—no pressure, no obligations.
            </p>
            <Button asChild variant="hero" size="xl" className="hover:scale-105 transition-transform">
              <a href="https://united_kmh.t.me" target="_blank" rel="noopener noreferrer">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
