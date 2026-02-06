import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const count = 50; // Increased number of particles

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 3, // 3-8px (larger)
          duration: Math.random() * 20 + 15, // 15-35s
          delay: Math.random() * 10, // 0-10s delay
          opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7 opacity (more visible)
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            // Add color variety - some particles have purple/pink hints
            background: particle.id % 5 === 0 
              ? `radial-gradient(circle, hsla(270, 60%, 65%, ${particle.opacity * 0.7}) 0%, hsla(199, 89%, 60%, ${particle.opacity * 0.4}) 50%, transparent 70%)`
              : particle.id % 7 === 0
              ? `radial-gradient(circle, hsla(320, 50%, 65%, ${particle.opacity * 0.6}) 0%, hsla(199, 89%, 70%, ${particle.opacity * 0.4}) 50%, transparent 70%)`
              : particle.id % 4 === 0
              ? `radial-gradient(circle, hsla(180, 70%, 55%, ${particle.opacity * 0.8}) 0%, hsla(199, 89%, 60%, ${particle.opacity * 0.4}) 50%, transparent 70%)`
              : `radial-gradient(circle, hsla(199, 89%, 60%, ${particle.opacity}) 0%, hsla(199, 89%, 70%, ${particle.opacity * 0.5}) 50%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsla(199, 89%, 60%, ${particle.opacity * 0.5})`,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Add some slightly larger glowing particles with color variety */}
      {[...Array(12)].map((_, i) => {
        // Assign different colors to different particles
        const colorVariants = [
          'hsla(199, 95%, 70%, 0.45)', // primary blue
          'hsla(199, 89%, 60%, 0.4)',  // blue
          'hsla(270, 55%, 65%, 0.3)',  // purple hint
          'hsla(180, 65%, 60%, 0.35)', // teal hint
          'hsla(320, 45%, 65%, 0.25)', // pink hint
        ];
        const color = colorVariants[i % colorVariants.length];
        
        return (
          <div
            key={`glow-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
              width: `${10 + (i % 3) * 5}px`,
              height: `${10 + (i % 3) * 5}px`,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              animation: `floatParticleGlow ${18 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        );
      })}
    </div>
  );
}
