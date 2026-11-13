import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { useEffect, useState } from "react";

// Import client logos
import uconLogo from "@/assets/clients/ucon-logo-new.png";
import yonasChercher from "@/assets/clients/yonas-chercher-logo-new.png";
import sunnySideHotel from "@/assets/clients/sunny-side-hotel-logo.png";
import churrosLogo from "@/assets/clients/churros-logo-new.png";
import honeyBadgerLogo from "@/assets/clients/honey-badger-logo-new.png";
import fiandimoLogo from "@/assets/clients/fiandimo-logo.png";

const clients = [
  { id: 1, name: "UCON", logo: uconLogo },
  { id: 2, name: "Yonas Chercher", logo: yonasChercher },
  { id: 3, name: "Sunny Side Hotel", logo: sunnySideHotel },
  { id: 4, name: "Mr. & Mrs. Churros", logo: churrosLogo },
  { id: 5, name: "Honey Badger Courses", logo: honeyBadgerLogo },
  { id: 6, name: "Fiandimo Trading", logo: fiandimoLogo },
];

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <SectionEyebrow>Our Clients</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            Trusted By Growing Businesses
          </h2>
          <p className="text-muted-foreground">
            Companies that rely on our solutions
          </p>
        </div>

        {/* Desktop: Show all logos in a row */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="hover:scale-110 transition-all duration-300 opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-32 lg:h-40 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Slideshow */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="min-w-full flex justify-center items-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-36 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
