import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <a
      href="tel:+251911517680"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 group animate-call-pulse"
      aria-label="Call us"
      style={{
        boxShadow: "0 0 0 0 hsl(var(--primary) / 0.7)",
      }}
    >
      <div className="relative">
        <Phone className="w-5 h-5 animate-phone-vibrate" />
        {/* Ringing waves */}
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-75" />
      </div>
      <span className="font-medium text-sm">Call Us</span>
    </a>
  );
}
