import { Building2, ShoppingBag, Utensils, Building, Factory, Truck, GraduationCap, HeartPulse } from "lucide-react";
import { TechNetworkBackground } from "@/components/ui/tech-network-background";

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Property management & listings",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    description: "Online stores & inventory systems",
  },
  {
    icon: Utensils,
    name: "Food & Hospitality",
    description: "Restaurants & hotel management",
  },
  {
    icon: Building,
    name: "Construction",
    description: "Project tracking & resource planning",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Production & supply chain",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Fleet & delivery management",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Learning platforms & admin systems",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Patient records & scheduling",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background illustration */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-subtle/50 via-background to-background" />
      
      {/* Tech network background */}
      <div className="absolute inset-0 opacity-20">
        <TechNetworkBackground variant="wide" />
      </div>
      
      {/* Animated floating gradient orbs - Primary blue */}
      <div 
        className="absolute top-1/4 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-[60px] lg:blur-[80px] animate-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(199 89% 60% / 0.25) 0%, hsl(199 89% 48% / 0.1) 50%, transparent 70%)",
          animationDuration: "6s",
        }}
      />
      
      {/* Purple accent orb - top right */}
      <div 
        className="absolute -top-20 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full blur-[50px] lg:blur-[70px] animate-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 65% / 0.2) 0%, hsl(280 60% 55% / 0.1) 50%, transparent 70%)",
          animationDuration: "8s",
          animationDelay: "2s",
        }}
      />
      
      {/* Pink/coral accent orb - bottom right */}
      <div 
        className="absolute bottom-1/4 -right-32 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full blur-[50px] lg:blur-[70px] animate-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(330 70% 65% / 0.18) 0%, hsl(340 60% 55% / 0.08) 50%, transparent 70%)",
          animationDuration: "7s",
          animationDelay: "1s",
        }}
      />
      
      {/* Cyan/teal accent orb - center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full blur-[80px] lg:blur-[100px] animate-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(199 100% 70% / 0.1) 0%, transparent 60%)",
          animationDuration: "10s",
          animationDelay: "3s",
        }}
      />
      
      {/* Small floating orbs for extra motion */}
      <div 
        className="absolute top-[15%] left-[20%] w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-sky/30 blur-sm animate-float-subtle pointer-events-none"
        style={{ animationDuration: "5s" }}
      />
      <div 
        className="absolute top-[60%] left-[10%] w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-primary/20 blur-sm animate-float pointer-events-none"
        style={{ animationDuration: "7s", animationDelay: "1s" }}
      />
      <div 
        className="absolute top-[30%] right-[15%] w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-sky/25 blur-sm animate-float-slow pointer-events-none"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-[20%] right-[25%] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary/15 blur-sm animate-float-subtle pointer-events-none"
        style={{ animationDuration: "6s", animationDelay: "0.5s" }}
      />
      <div 
        className="absolute top-[70%] left-[40%] w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-sky/20 blur-sm animate-float pointer-events-none"
        style={{ animationDuration: "9s", animationDelay: "3s" }}
      />
      
      {/* Rotating geometric accents */}
      <div 
        className="absolute top-[10%] right-[8%] w-16 h-16 lg:w-24 lg:h-24 border border-sky/10 rounded-xl rotate-12 pointer-events-none"
        style={{ animation: "spin 60s linear infinite" }}
      />
      <div 
        className="absolute bottom-[15%] left-[5%] w-12 h-12 lg:w-20 lg:h-20 border border-primary/10 rounded-full pointer-events-none"
        style={{ animation: "spin 80s linear infinite reverse" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky/10 text-sky rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver tailored solutions across diverse sectors, understanding the unique challenges each industry faces.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group relative bg-card/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-border/50 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Abstract tech network background - top right corner */}
              <div className="absolute -top-4 -right-4 w-32 h-32 lg:w-40 lg:h-40 opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full"
                  style={{
                    animation: `float-subtle ${6 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <defs>
                    {/* Multi-color gradients for lines */}
                    <linearGradient id={`lineGradient1-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" /> {/* Sky blue */}
                      <stop offset="100%" stopColor="#a78bfa" /> {/* Purple */}
                    </linearGradient>
                    <linearGradient id={`lineGradient2-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                      <stop offset="100%" stopColor="#f472b6" /> {/* Pink */}
                    </linearGradient>
                    <linearGradient id={`lineGradient3-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" /> {/* Purple */}
                      <stop offset="100%" stopColor="#38bdf8" /> {/* Sky blue */}
                    </linearGradient>
                    {/* Radial gradients for nodes */}
                    <radialGradient id={`nodeGradient1-${index}`} cx="30%" cy="30%">
                      <stop offset="0%" stopColor="#67e8f9" /> {/* Light cyan */}
                      <stop offset="100%" stopColor="#38bdf8" /> {/* Sky blue */}
                    </radialGradient>
                    <radialGradient id={`nodeGradient2-${index}`} cx="30%" cy="30%">
                      <stop offset="0%" stopColor="#c4b5fd" /> {/* Light purple */}
                      <stop offset="100%" stopColor="#a78bfa" /> {/* Purple */}
                    </radialGradient>
                    <radialGradient id={`nodeGradient3-${index}`} cx="30%" cy="30%">
                      <stop offset="0%" stopColor="#fbcfe8" /> {/* Light pink */}
                      <stop offset="100%" stopColor="#f472b6" /> {/* Pink */}
                    </radialGradient>
                    {/* Fade mask */}
                    <radialGradient id={`cardFade${index}`} cx="100%" cy="0%" r="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="1" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id={`cardMask${index}`}>
                      <rect width="100" height="100" fill={`url(#cardFade${index})`} />
                    </mask>
                  </defs>
                  <g mask={`url(#cardMask${index})`}>
                    {/* Connection lines with different gradient colors */}
                    <line x1="85" y1="10" x2="60" y2="25" stroke={`url(#lineGradient1-${index})`} strokeWidth="1" opacity="0.8" />
                    <line x1="60" y1="25" x2="75" y2="45" stroke={`url(#lineGradient2-${index})`} strokeWidth="1" opacity="0.7" />
                    <line x1="75" y1="45" x2="50" y2="55" stroke={`url(#lineGradient3-${index})`} strokeWidth="0.8" opacity="0.6" />
                    <line x1="85" y1="10" x2="95" y2="30" stroke={`url(#lineGradient2-${index})`} strokeWidth="1" opacity="0.7" />
                    <line x1="95" y1="30" x2="75" y2="45" stroke={`url(#lineGradient1-${index})`} strokeWidth="0.8" opacity="0.6" />
                    <line x1="60" y1="25" x2="45" y2="35" stroke={`url(#lineGradient3-${index})`} strokeWidth="0.7" opacity="0.5" />
                    <line x1="45" y1="35" x2="50" y2="55" stroke={`url(#lineGradient1-${index})`} strokeWidth="0.7" opacity="0.5" />
                    <line x1="75" y1="45" x2="85" y2="65" stroke={`url(#lineGradient2-${index})`} strokeWidth="0.7" opacity="0.5" />
                    {/* Colorful nodes with different gradients */}
                    <circle cx="85" cy="10" r="3.5" fill={`url(#nodeGradient1-${index})`} opacity="0.9">
                      <animate attributeName="r" values="3.5;4;3.5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="25" r="3" fill={`url(#nodeGradient2-${index})`} opacity="0.85">
                      <animate attributeName="r" values="3;3.5;3" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="75" cy="45" r="2.5" fill={`url(#nodeGradient3-${index})`} opacity="0.8">
                      <animate attributeName="r" values="2.5;3;2.5" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="95" cy="30" r="2" fill={`url(#nodeGradient1-${index})`} opacity="0.7" />
                    <circle cx="50" cy="55" r="1.8" fill={`url(#nodeGradient2-${index})`} opacity="0.6" />
                    <circle cx="45" cy="35" r="1.5" fill={`url(#nodeGradient3-${index})`} opacity="0.5" />
                    <circle cx="85" cy="65" r="1.2" fill={`url(#nodeGradient1-${index})`} opacity="0.4" />
                  </g>
                </svg>
              </div>
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky/0 via-sky/0 to-sky/0 group-hover:from-sky/10 group-hover:via-sky/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 40px hsl(199 89% 48% / 0.1)",
                }}
              />
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 30px -5px hsl(199 89% 48% / 0.3), 0 0 60px -10px hsl(199 89% 48% / 0.2)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-4 group-hover:bg-sky/20 group-hover:scale-110 transition-all duration-500 ease-out">
                  <industry.icon className="w-6 h-6 lg:w-7 lg:h-7 text-sky group-hover:text-sky-light transition-colors duration-300" />
                </div>
                
                {/* Text */}
                <h3 className="text-base lg:text-lg font-semibold text-navy mb-1 group-hover:text-sky transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-sky/5 rounded-full group-hover:scale-[3] group-hover:bg-sky/10 transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
