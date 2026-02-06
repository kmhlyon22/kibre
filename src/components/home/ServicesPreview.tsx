import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Globe, Smartphone, ArrowRight } from "lucide-react";
import { TechNetworkBackground } from "@/components/ui/tech-network-background";

const services = [
  {
    icon: Database,
    title: "ERP Systems",
    description: "Custom enterprise solutions that streamline your operations, automate workflows, and provide real-time insights for better decision-making.",
    features: ["Inventory Management", "Financial Tracking", "Custom Workflows"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, responsive websites that look professional on every device and are optimized for search engines to help you reach more customers.",
    features: ["Mobile-First Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Android and web applications with clean interfaces and secure backends that your customers will love to use.",
    features: ["Clean UI", "Secure Backend", "Cross-Platform"],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on three core services, delivering quality over quantity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 card-hover opacity-0 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Tech Network Background */}
              <TechNetworkBackground variant="compact" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className="flex items-center gap-2 text-sm text-muted-foreground opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.15) + (featureIndex * 0.1)}s` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Learn More About Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
