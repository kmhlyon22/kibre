const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

// Floating tech illustration component for dark sections
function FloatingTechIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs with color hints */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse-slow" style={{ background: "radial-gradient(circle, hsla(199, 89%, 48%, 0.12) 0%, hsla(270, 55%, 60%, 0.05) 100%)" }} />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" style={{ background: "radial-gradient(circle, hsla(199, 95%, 74%, 0.12) 0%, hsla(320, 45%, 60%, 0.04) 100%)", animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-2xl animate-float-subtle" style={{ background: "radial-gradient(circle, hsla(180, 65%, 50%, 0.08) 0%, hsla(199, 89%, 48%, 0.04) 100%)" }} />
      
      {/* SVG tech elements */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="statsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(199, 95%, 74%)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="statsGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270, 70%, 60%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Circuit-like lines */}
        <path 
          d="M0,50 Q100,30 200,50 T400,50" 
          stroke="url(#statsGradient1)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
        />
        <path 
          d="M100,0 L100,30 L150,30 L150,70 L200,70" 
          stroke="url(#statsGradient2)" 
          strokeWidth="0.5" 
          fill="none" 
          opacity="0.5"
        />
        
        {/* Hexagon shapes */}
        <polygon 
          points="50,20 65,28 65,44 50,52 35,44 35,28" 
          stroke="url(#statsGradient1)" 
          strokeWidth="0.5" 
          fill="none" 
          className="animate-float-subtle"
          opacity="0.3"
        />
        <polygon 
          points="90%,70% 92%,72% 92%,76% 90%,78% 88%,76% 88%,72%" 
          stroke="url(#statsGradient2)" 
          strokeWidth="0.5" 
          fill="none" 
          className="animate-float-slow"
          opacity="0.25"
        />
        
        {/* Floating dots with color variety */}
        <circle cx="10%" cy="30%" r="2" fill="hsl(199, 89%, 48%)" opacity="0.35" className="animate-pulse-slow" />
        <circle cx="85%" cy="25%" r="1.5" fill="hsl(270, 55%, 60%)" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="75%" cy="75%" r="2" fill="hsl(180, 65%, 50%)" opacity="0.25" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="20%" cy="80%" r="1.5" fill="hsl(320, 45%, 60%)" opacity="0.25" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <circle cx="50%" cy="15%" r="1.5" fill="hsl(199, 95%, 74%)" opacity="0.2" className="animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </svg>
      
      {/* Geometric shapes */}
      <div className="absolute top-8 right-[15%] w-8 h-8 border border-primary/20 rotate-45 animate-spin-slower" />
      <div className="absolute bottom-12 left-[20%] w-6 h-6 border border-sky-light/15 rounded-full animate-float-slow" />
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Tech illustration background */}
      <FloatingTechIllustration />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_hsl(199,89%,48%,0.5)]">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70 transition-colors duration-300 group-hover:text-primary-foreground/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
