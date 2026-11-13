import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals. 
            No pressure, no obligations—just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <a href="https://united_kmh.t.me" target="_blank" rel="noopener noreferrer">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/projects">See Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
