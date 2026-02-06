import { useEffect, useState } from "react";

interface FloatingTechElementsProps {
  variant?: "default" | "minimal" | "dense";
  className?: string;
}

export function FloatingTechElements({ variant = "default", className = "" }: FloatingTechElementsProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Connected Nodes - Top Left - scaled for mobile */}
      <div 
        className="absolute top-[10%] left-[5%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      >
        <svg width="120" height="100" viewBox="0 0 120 100" className="animate-float-slow">
          <defs>
            <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
              <stop offset="100%" stopColor="hsl(270, 55%, 60%)" />
            </linearGradient>
          </defs>
          <g className="opacity-60">
            {/* Nodes with color hints */}
            <circle cx="20" cy="20" r="8" fill="hsl(199, 89%, 48%)" className="animate-pulse-slow" />
            <circle cx="60" cy="40" r="6" fill="hsl(270, 55%, 60%)" opacity="0.7" />
            <circle cx="100" cy="20" r="5" fill="hsl(180, 65%, 50%)" opacity="0.5" />
            <circle cx="40" cy="70" r="7" fill="hsl(199, 89%, 55%)" opacity="0.6" />
            <circle cx="90" cy="80" r="4" fill="hsl(320, 45%, 60%)" opacity="0.4" />
            {/* Connection lines with gradient */}
            <line x1="20" y1="20" x2="60" y2="40" stroke="url(#nodeGradient1)" strokeWidth="1" opacity="0.5" />
            <line x1="60" y1="40" x2="100" y2="20" stroke="hsl(180, 65%, 50%)" strokeWidth="1" opacity="0.4" />
            <line x1="60" y1="40" x2="40" y2="70" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
            <line x1="40" y1="70" x2="90" y2="80" stroke="hsl(320, 45%, 60%)" strokeWidth="1" opacity="0.35" />
          </g>
        </svg>
      </div>

      {/* Hexagon - Top Right - scaled for mobile */}
      <div 
        className="absolute top-[15%] right-[8%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.4}px)` }}
      >
        <svg width="60" height="70" viewBox="0 0 60 70" className="animate-float">
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
              <stop offset="50%" stopColor="hsl(270, 55%, 60%)" />
              <stop offset="100%" stopColor="hsl(180, 65%, 50%)" />
            </linearGradient>
          </defs>
          <path 
            d="M30 5L55 20V50L30 65L5 50V20L30 5Z" 
            fill="none" 
            stroke="url(#hexGradient)" 
            strokeWidth="2" 
            opacity="0.5"
            className="animate-pulse-slow"
          />
          <path 
            d="M30 15L45 25V45L30 55L15 45V25L30 15Z" 
            fill="hsl(270, 55%, 60%)" 
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Gear Icon - Middle Left - scaled for mobile */}
      <div 
        className="absolute top-[40%] left-[3%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * -0.3}px)` }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="animate-spin-slow">
          <g opacity="0.5">
            <circle cx="25" cy="25" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <circle cx="25" cy="25" r="3" fill="hsl(var(--primary))" opacity="0.6" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="23"
                y="5"
                width="4"
                height="8"
                fill="hsl(var(--primary))"
                transform={`rotate(${angle} 25 25)`}
                rx="1"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Small Floating Squares - Right Side - scaled for mobile */}
      <div 
        className="absolute top-[55%] right-[5%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * 0.5}px)` }}
      >
        <div className="relative animate-float-delayed">
          <div className="w-8 h-8 border-2 border-primary/40 rounded-md rotate-12 absolute top-0 left-0 hover:border-primary/70 transition-colors" />
          <div className="w-6 h-6 bg-primary/10 border border-primary/30 rounded-sm rotate-45 absolute top-6 left-10 hover:bg-primary/20 transition-colors" />
          <div className="w-4 h-4 bg-primary/20 rounded-sm absolute top-12 left-2 animate-pulse-slow" />
        </div>
      </div>

      {/* Circuit Lines - Bottom Left - scaled for mobile */}
      <div 
        className="absolute bottom-[20%] left-[8%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * -0.4}px)` }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" className="animate-float-slow">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
              <stop offset="50%" stopColor="hsl(180, 65%, 50%)" />
              <stop offset="100%" stopColor="hsl(270, 55%, 60%)" />
            </linearGradient>
          </defs>
          <g opacity="0.5">
            <path 
              d="M5 30 L25 30 L35 15 L55 15 L65 30 L75 30" 
              fill="none" 
              stroke="url(#circuitGradient)" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="5" cy="30" r="3" fill="hsl(199, 89%, 48%)" />
            <circle cx="35" cy="15" r="3" fill="hsl(180, 65%, 50%)" />
            <circle cx="75" cy="30" r="3" fill="hsl(270, 55%, 60%)" className="animate-pulse" />
            <path 
              d="M25 45 L45 45 L55 55" 
              fill="none" 
              stroke="hsl(320, 45%, 60%)" 
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="25" cy="45" r="2" fill="hsl(320, 45%, 60%)" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Dotted Pattern - Bottom Right - scaled for mobile */}
      <div 
        className="absolute bottom-[15%] right-[10%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
        style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.3}px)` }}
      >
        <div className="grid grid-cols-4 gap-2 animate-float">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/60 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Ring - Top Center - scaled for mobile */}
      {variant !== "minimal" && (
        <div 
          className="absolute top-[8%] left-[45%] transition-transform duration-500 ease-out scale-50 sm:scale-75 lg:scale-100"
          style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
        >
          <div className="w-16 h-16 rounded-full border border-primary/20 animate-spin-slower" />
          <div className="w-10 h-10 rounded-full border border-primary/30 absolute top-3 left-3 animate-spin-slow" style={{ animationDirection: "reverse" }} />
        </div>
      )}

      {/* Glowing Orbs with color hints */}
      <div 
        className="absolute top-[25%] right-[15%] w-4 h-4 rounded-full blur-sm animate-pulse"
        style={{ 
          background: "radial-gradient(circle, hsla(199, 89%, 48%, 0.5) 0%, hsla(270, 55%, 60%, 0.2) 100%)",
          boxShadow: "0 0 20px 8px hsla(199, 89%, 48%, 0.2)",
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * 0.3}px)` 
        }}
      />
      <div 
        className="absolute bottom-[30%] left-[12%] w-3 h-3 rounded-full blur-sm animate-pulse-slow"
        style={{ 
          background: "radial-gradient(circle, hsla(180, 65%, 50%, 0.5) 0%, hsla(199, 89%, 48%, 0.3) 100%)",
          boxShadow: "0 0 15px 5px hsla(180, 65%, 50%, 0.15)",
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * -0.4}px)` 
        }}
      />
      <div 
        className="absolute top-[70%] right-[25%] w-3 h-3 rounded-full blur-sm animate-pulse"
        style={{ 
          background: "radial-gradient(circle, hsla(320, 45%, 60%, 0.4) 0%, hsla(199, 89%, 48%, 0.2) 100%)",
          boxShadow: "0 0 12px 4px hsla(320, 45%, 60%, 0.15)",
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * 0.5}px)`,
          animationDelay: "0.5s"
        }}
      />

      {/* Additional elements for dense variant */}
      {variant === "dense" && (
        <>
          <div 
            className="absolute top-[60%] left-[15%] transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="animate-float">
              <polygon points="20,5 35,15 35,30 20,40 5,30 5,15" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
          <div 
            className="absolute bottom-[40%] right-[3%] w-12 h-12 border border-primary/20 rounded-lg rotate-45 animate-float-delayed"
            style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.4}px)` }}
          />
        </>
      )}
    </div>
  );
}
