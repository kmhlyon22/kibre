import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { useEffect, useState } from "react";

// Import client logos
import uconLogo from "@/assets/clients/ucon-logo-new.webp";
import yonasChercher from "@/assets/clients/yonas-chercher-logo-new.webp";
import sunnySideHotel from "@/assets/clients/sunny-side-hotel-logo.webp";
import churrosLogo from "@/assets/clients/churros-logo-new.webp";
import honeyBadgerLogo from "@/assets/clients/honey-badger-logo-new.webp";
import fiandimoLogo from "@/assets/clients/fiandimo-logo.webp";
import mtmLogo from "@/assets/clients/mtm-logo.webp";
import afroTattooLogo from "@/assets/clients/afro-tattoo-logo.webp";
import afroEagleLogo from "@/assets/clients/afro-eagle-logo.webp";
import mekelleLogo from "@/assets/clients/mekelle-security-logo.webp";
import kmgLogo from "@/assets/clients/kmg-logo.webp";

const clients = [
  { id: 1, name: "UCON", logo: uconLogo },
  { id: 2, name: "Yonas Chercher", logo: yonasChercher },
  { id: 3, name: "Sunny Side Hotel", logo: sunnySideHotel },
  { id: 4, name: "Mr. & Mrs. Churros", logo: churrosLogo },
  { id: 5, name: "Honey Badger Courses", logo: honeyBadgerLogo },
  { id: 6, name: "Fiandimo Trading", logo: fiandimoLogo },
  { id: 7, name: "MTM Muay Thai Club", logo: mtmLogo },
  { id: 8, name: "Afro Tattoo Studio", logo: afroTattooLogo },
  { id: 9, name: "Afro Eagle Electro-Mechanical", logo: afroEagleLogo },
  { id: 10, name: "Mekelle City Security", logo: mekelleLogo },
  { id: 11, name: "KMG Engineering", logo: kmgLogo },
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
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-3">
            Trusted By Growing Businesses
          </h2>
          <p className="text-muted-foreground">
            Companies that rely on our solutions
          </p>
        </div>

        {/* Desktop: Show all logos in a row */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-x-8 gap-y-6 lg:gap-x-10">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="hover:scale-110 transition-all duration-300 opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img loading="lazy" decoding="async"
                src={client.logo}
                alt={client.name}
                className="h-14 lg:h-16 max-w-[120px] w-auto object-contain transition-all duration-300 group-hover:drop-shadow-lg"
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
                <img loading="lazy" decoding="async"
                  src={client.logo}
                  alt={client.name}
                  className="h-24 max-w-[200px] w-auto object-contain"
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
