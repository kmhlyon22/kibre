import { useEffect, useState, useRef } from "react";

interface TechNetworkBackgroundProps {
  className?: string;
  variant?: "default" | "compact" | "wide";
}

export function TechNetworkBackground({ className = "", variant = "default" }: TechNetworkBackgroundProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
      });
    };

    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.02);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Generate dots and connections based on variant
  const getDots = () => {
    const configs = {
      default: [
        { cx: 15, cy: 20, r: 2, delay: 0 },
        { cx: 35, cy: 15, r: 1.5, delay: 0.5 },
        { cx: 55, cy: 25, r: 2.5, delay: 1 },
        { cx: 75, cy: 18, r: 1.8, delay: 1.5 },
        { cx: 90, cy: 30, r: 2, delay: 2 },
        { cx: 25, cy: 45, r: 1.5, delay: 0.3 },
        { cx: 45, cy: 55, r: 2, delay: 0.8 },
        { cx: 65, cy: 48, r: 1.8, delay: 1.3 },
        { cx: 85, cy: 60, r: 2.2, delay: 1.8 },
        { cx: 20, cy: 75, r: 2, delay: 0.6 },
        { cx: 40, cy: 80, r: 1.5, delay: 1.1 },
        { cx: 60, cy: 72, r: 2, delay: 1.6 },
        { cx: 80, cy: 85, r: 1.8, delay: 2.1 },
        { cx: 95, cy: 70, r: 1.5, delay: 2.3 },
        { cx: 10, cy: 50, r: 1.8, delay: 0.9 },
        { cx: 50, cy: 38, r: 1.5, delay: 1.4 },
      ],
      compact: [
        { cx: 20, cy: 25, r: 2, delay: 0 },
        { cx: 50, cy: 20, r: 1.8, delay: 0.5 },
        { cx: 80, cy: 30, r: 2.2, delay: 1 },
        { cx: 30, cy: 55, r: 1.5, delay: 0.3 },
        { cx: 60, cy: 50, r: 2, delay: 0.8 },
        { cx: 85, cy: 65, r: 1.8, delay: 1.3 },
        { cx: 25, cy: 80, r: 2, delay: 0.6 },
        { cx: 55, cy: 75, r: 1.5, delay: 1.1 },
        { cx: 75, cy: 85, r: 2, delay: 1.6 },
      ],
      wide: [
        { cx: 10, cy: 30, r: 2, delay: 0 },
        { cx: 25, cy: 20, r: 1.5, delay: 0.4 },
        { cx: 40, cy: 35, r: 2.2, delay: 0.8 },
        { cx: 55, cy: 25, r: 1.8, delay: 1.2 },
        { cx: 70, cy: 40, r: 2, delay: 1.6 },
        { cx: 85, cy: 30, r: 1.5, delay: 2 },
        { cx: 15, cy: 60, r: 1.8, delay: 0.2 },
        { cx: 30, cy: 55, r: 2, delay: 0.6 },
        { cx: 45, cy: 65, r: 1.5, delay: 1 },
        { cx: 60, cy: 55, r: 2.2, delay: 1.4 },
        { cx: 75, cy: 70, r: 1.8, delay: 1.8 },
        { cx: 90, cy: 60, r: 2, delay: 2.2 },
        { cx: 20, cy: 85, r: 2, delay: 0.3 },
        { cx: 50, cy: 80, r: 1.5, delay: 1.1 },
        { cx: 80, cy: 85, r: 2, delay: 1.9 },
      ],
    };
    return configs[variant];
  };

  const getConnections = () => {
    const dots = getDots();
    const connections: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    
    // Connect nearby dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dist = Math.sqrt(
          Math.pow(dots[j].cx - dots[i].cx, 2) + 
          Math.pow(dots[j].cy - dots[i].cy, 2)
        );
        if (dist < 35) {
          connections.push({
            x1: dots[i].cx,
            y1: dots[i].cy,
            x2: dots[j].cx,
            y2: dots[j].cy,
            delay: (dots[i].delay + dots[j].delay) / 2,
          });
        }
      }
    }
    return connections;
  };

  const dots = getDots();
  const connections = getConnections();

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ 
        transform: `translate(${mousePos.x + 5}px, ${mousePos.y + scrollOffset + 8}px)`,
        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="w-[120%] h-[120%] -left-[10%] -top-[10%] absolute blur-[0.5px]"
        style={{ opacity: 0.12 }}
      >
        <defs>
          {/* Gradient for dots and lines */}
          <linearGradient id="techGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199, 89%, 60%)" />
            <stop offset="50%" stopColor="hsl(270, 70%, 65%)" />
            <stop offset="100%" stopColor="hsl(330, 70%, 70%)" />
          </linearGradient>
          <linearGradient id="techGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(330, 70%, 70%)" />
            <stop offset="50%" stopColor="hsl(270, 70%, 65%)" />
            <stop offset="100%" stopColor="hsl(199, 89%, 60%)" />
          </linearGradient>
          <linearGradient id="techGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(199, 89%, 55%)" />
            <stop offset="100%" stopColor="hsl(290, 60%, 60%)" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        {connections.map((conn, i) => (
          <line
            key={`line-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke={`url(#techGradient${(i % 3) + 1})`}
            strokeWidth="0.3"
            opacity="0.6"
            className="animate-pulse-slow"
            style={{ 
              animationDelay: `${conn.delay}s`,
              animationDuration: "4s",
            }}
          />
        ))}

        {/* Dots */}
        {dots.map((dot, i) => (
          <circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={`url(#techGradient${(i % 3) + 1})`}
            className="animate-pulse-slow"
            style={{ 
              animationDelay: `${dot.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
