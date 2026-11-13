import { ReactNode, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useScroll } from "@/hooks/use-scroll";
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
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
        
      </div>
      
      <Header />
      <main className="flex-1 pt-20 relative z-10">{children}</main>
      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </div>
  );
}
