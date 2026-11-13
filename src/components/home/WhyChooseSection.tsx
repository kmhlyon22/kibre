import { Lightbulb, Zap, Headphones, BadgeDollarSign } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const reasons = [
  { icon: Lightbulb, title: "Better Solutions", text: "Systems designed around how your business actually works." },
  { icon: Zap, title: "Fast Results", text: "Clear milestones and quick delivery without cutting corners." },
  { icon: Headphones, title: "Customer Support", text: "We stay with you after launch with training and ongoing help." },
  { icon: BadgeDollarSign, title: "Cost Effective", text: "Enterprise-quality software at a price growing businesses can afford." },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <SectionEyebrow>Why Us</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">Why Choose United Tech</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="group bg-card rounded-xl p-8 text-center border border-border/50 card-hover">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                <r.icon className="w-7 h-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
