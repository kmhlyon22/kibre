import { ReactNode, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useScroll } from "@/hooks/use-scroll";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { FloatingCallButton } from "@/components/ui/floating-call-button";
import { FloatingWhatsAppButton } from "@/components/ui/floating-whatsapp-button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax offsets based on scroll
  const parallax1 = scrollY * 0.15;
  const parallax2 = scrollY * 0.1;
  const parallax3 = scrollY * 0.08;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Ambient Background Motion Graphics with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
        {/* Primary floating blue gradient orb with subtle purple hint - reacts to scroll and mouse - smaller on mobile */}
        <div 
          className="absolute w-[400px] sm:w-[600px] lg:w-[1000px] h-[400px] sm:h-[600px] lg:h-[1000px] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[150px] transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 89%, 65%, 0.28) 0%, hsla(210, 80%, 60%, 0.18) 35%, hsla(260, 60%, 65%, 0.08) 60%, transparent 75%)',
            top: `calc(5% - ${parallax1}px)`,
            left: `calc(-5% + ${mousePosition.x * 0.03}%)`,
            transform: `translate3d(0, 0, 0)`,
          }} 
        />
        
        {/* Secondary blue glow with pink accent - slower parallax - smaller on mobile */}
        <div 
          className="absolute w-[350px] sm:w-[550px] lg:w-[900px] h-[350px] sm:h-[550px] lg:h-[900px] rounded-full blur-[70px] sm:blur-[90px] lg:blur-[130px] transition-transform duration-1500 ease-out"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 95%, 70%, 0.25) 0%, hsla(199, 89%, 48%, 0.12) 40%, hsla(320, 50%, 70%, 0.06) 65%, transparent 75%)',
            bottom: `calc(10% + ${parallax2}px)`,
            right: `calc(-10% - ${mousePosition.x * 0.02}%)`,
            transform: `translate3d(0, 0, 0)`,
          }} 
        />
        
        {/* Accent gradient with purple tint - middle of page - smaller on mobile */}
        <div 
          className="absolute w-[280px] sm:w-[450px] lg:w-[700px] h-[280px] sm:h-[450px] lg:h-[700px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] transition-transform duration-2000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 100%, 75%, 0.22) 0%, hsla(230, 70%, 75%, 0.12) 40%, hsla(280, 50%, 70%, 0.06) 60%, transparent 75%)',
            top: `calc(45% - ${parallax3}px)`,
            left: `calc(55% + ${mousePosition.y * 0.02}%)`,
            transform: `translate3d(0, 0, 0)`,
          }} 
        />
        
        {/* Top-right floating orb for upper sections - smaller on mobile */}
        <div 
          className="absolute w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] transition-transform duration-1500 ease-out"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 89%, 60%, 0.2) 0%, hsla(199, 95%, 74%, 0.1) 50%, transparent 70%)',
            top: `calc(20% - ${parallax2 * 0.6}px)`,
            right: '5%',
            transform: `translate3d(0, 0, 0)`,
          }} 
        />
        
        {/* Bottom-left wave for lower sections - smaller on mobile */}
        <div 
          className="absolute w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] rounded-full blur-[70px] sm:blur-[90px] lg:blur-[120px] transition-transform duration-2000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 89%, 68%, 0.22) 0%, hsla(199, 100%, 80%, 0.1) 50%, transparent 70%)',
            bottom: `calc(40% + ${parallax1 * 0.4}px)`,
            left: '-10%',
            transform: `translate3d(0, 0, 0)`,
          }} 
        />
        
        {/* Subtle pulsing orbs for ambient motion with color hints - smaller on mobile */}
        <div 
          className="absolute w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 89%, 48%, 0.18) 0%, hsla(270, 50%, 60%, 0.06) 50%, transparent 65%)',
            top: `calc(65% - ${parallax1 * 0.5}px)`,
            left: '15%',
            animationDuration: '8s',
          }} 
        />
        
        <div 
          className="absolute w-[180px] sm:w-[300px] lg:w-[450px] h-[180px] sm:h-[300px] lg:h-[450px] rounded-full blur-[50px] sm:blur-[70px] lg:blur-[90px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 95%, 74%, 0.2) 0%, hsla(180, 60%, 65%, 0.08) 45%, transparent 65%)',
            top: `calc(25% + ${parallax2 * 0.3}px)`,
            right: '25%',
            animationDuration: '10s',
            animationDelay: '3s',
          }} 
        />
        
        {/* Additional pulsing orb with pink hint for mid-page - smaller on mobile */}
        <div 
          className="absolute w-[160px] sm:w-[280px] lg:w-[400px] h-[160px] sm:h-[280px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[65px] lg:blur-[80px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsla(199, 89%, 55%, 0.15) 0%, hsla(320, 45%, 65%, 0.05) 50%, transparent 65%)',
            top: `calc(80% - ${parallax3 * 0.3}px)`,
            right: '40%',
            animationDuration: '12s',
            animationDelay: '5s',
          }} 
        />
        
        {/* Floating geometric accents - slightly more visible - scaled for mobile */}
        <div 
          className="absolute w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 border border-primary/[0.12] rounded-2xl rotate-12"
          style={{ 
            top: `calc(12% - ${parallax1 * 0.3}px)`,
            right: '12%',
            animation: 'spin 80s linear infinite',
          }} 
        />
        <div 
          className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 border border-sky/[0.1] rounded-full"
          style={{ 
            bottom: `calc(25% + ${parallax2 * 0.2}px)`,
            left: '8%',
            animation: 'spin 60s linear infinite reverse',
          }} 
        />
        <div 
          className="absolute w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/[0.06] to-sky/[0.06] rounded-lg rotate-45 animate-pulse"
          style={{ 
            top: `calc(50% - ${parallax3 * 0.4}px)`,
            right: '22%',
            animationDuration: '6s',
          }} 
        />
        <div 
          className="absolute w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-primary/[0.08] rounded-full"
          style={{ 
            top: `calc(75% - ${parallax1 * 0.2}px)`,
            left: '60%',
            animation: 'spin 90s linear infinite',
          }} 
        />
        
        {/* Subtle tech grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(199 89% 48%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(199 89% 48%) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        />
        
        {/* Very soft gradient overlay for depth - reduced opacity to let effects show */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        
        {/* Floating particles */}
        <FloatingParticles />
      </div>
      
      <Header />
      <main className="flex-1 pt-20 relative z-10">{children}</main>
      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </div>
  );
}
